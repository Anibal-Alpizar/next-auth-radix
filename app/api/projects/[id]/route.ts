import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { Prisma } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const project = await prisma.project.findUnique({
    where: { id: +params.id },
  });

  if (!project)
    return NextResponse.json({ message: "Project not found" }, { status: 404 });

  return NextResponse.json({ project }, { status: 200 });
}

export async function DELETE(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  try {
    const projectDeleted = await prisma.project.delete({
      where: { id: +params.id },
    });
    return NextResponse.json(
      { message: "Project deleted", projectDeleted },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          { message: "Project not found" },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }
  }
}

export async function PUT(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const data = await request.json();
  const projectUpdated = await prisma.project.update({
    where: {
      id: +params.id,
    },
    data,
  });
  return NextResponse.json({ projectUpdated }, { status: 200 });
}
