import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: { jobId: string };
  }
) {
  const { jobId } = params;

  const userWithApplication = await prisma.application.findMany({
    where: {
      jobId: jobId,
    },
  });

  if (!userWithApplication) {
    return NextResponse.json({ error: "job not found" }, { status: 404 });
  }

  return NextResponse.json(userWithApplication);
}

export async function POST(
  request: NextRequest,
  {
    params,
  }: {
    params: { jobId: string };
  }
) {
  const { jobId } = params;

  const { name, email } = await request.json();

  const apply = await prisma.application.create({
    data: {
      name: name as string,
      email: email as string,
      job: {
        connect: {
          id: jobId,
        },
      },
    },
  });

  return NextResponse.json(apply);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { applicationId: string } }
) {
  const { applicationId } = params;

  const existingJob = await prisma.application.findUnique({
    where: { id: applicationId as string },
  });

  if (!existingJob) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  const deleteJob = await prisma.application.delete({
    where: { id: applicationId as string },
  });

  return NextResponse.json(deleteJob);
}
