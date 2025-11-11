import connectDB from "@/lib/mongodb";
import Project from "@/lib/models/Project";
import { NextResponse } from "next/server";
import { projectSchema } from "@/lib/validators/projectSchema";


export async function GET() {
  await connectDB();
  const projects = await Project.find().sort({ createdAt: -1 });
  return NextResponse.json(projects);
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
