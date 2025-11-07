import connectDB from "@/lib/mongodb";
import Project from "@/lib/models/Project";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  const projects = await Project.find().sort({ createdAt: -1 });
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  await connectDB();
  const data = await req.json();
  const project = await Project.create(data);
  return NextResponse.json(project, { status: 201 });
}

export async function PUT(req: Request) {
  await connectDB();
  const { id, ...updates } = await req.json();
  const project = await Project.findByIdAndUpdate(id, updates, { new: true });
  return NextResponse.json(project);
}

export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ success: true });
}
