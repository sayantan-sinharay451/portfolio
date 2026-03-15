import connectDB from "@/lib/mongodb";
import Project from "@/lib/models/Project";
import { NextResponse } from "next/server";
import { projectSchema } from "@/lib/validators/projectSchema";


export async function GET(req: Request) {
  await connectDB();

  try {
    const url = new URL(req.url);
    const pageParam = url.searchParams.get('page');
    const limitParam = url.searchParams.get('limit');
    const archivedParam = url.searchParams.get('archived');

    let page = parseInt(pageParam ?? '1', 10);
    let limit = parseInt(limitParam ?? '10', 10);

    if (Number.isNaN(page) || page < 1) page = 1;
    if (Number.isNaN(limit) || limit < 1) limit = 10;

    // clamp limit to a safe maximum
    const MAX_LIMIT = 50;
    if (limit > MAX_LIMIT) limit = MAX_LIMIT;

    const filter: Record<string, any> = {};
    if (archivedParam === 'true') {
      filter.isArchived = true;
    } else if (archivedParam === 'false') {
      // treat missing isArchived as false for backward compatibility
      filter.$or = [{ isArchived: false }, { isArchived: { $exists: false } }];
    }

    // First, get the total count for the filter so we can compute pages and clamp
    const totalItems = await Project.countDocuments(filter);
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));

    // Clamp page to totalPages
    if (page > totalPages) page = totalPages;

    const skip = (page - 1) * limit;

    const data = await Project.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit);

    return NextResponse.json({
      data,
      pagination: {
        page,
        limit,
        totalItems,
        totalPages,
      },
    });
  } catch (err) {
    console.error('Failed to fetch projects', err);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();

  debugger;

  const validation = projectSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const project = await Project.create(validation.data);
  return NextResponse.json(project, { status: 201 });
}

export async function PUT(req: Request) {
  await connectDB();
  const data = await req.json();
  const validation = projectSchema.safeParse(data);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const { _id, ...updates } = validation.data;
  const project = await Project.findByIdAndUpdate(_id, updates, { new: true });
  return NextResponse.json(project);
}

export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
