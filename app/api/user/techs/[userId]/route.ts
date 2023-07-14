import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET({ params }: { params: { userId: string } }) {
  const prisma = new PrismaClient();

  const { userId } = params;

  const userWithJobs = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      jobs: true,
    },
  });
  
  if(!userWithJobs){
    return NextResponse.json(
      { error: "user not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(userWithJobs?.jobs);
}

export async function POST(
  request: NextRequest,
  {
    params,
  }: {
    params: { userId: string };
  }
) {
  const prisma = new PrismaClient();

  const { userId } = params;

  const { name, description } = await request.json();

  const tech = await prisma.job.create({
    data: {
      name: name as string,
      description: description as string,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return NextResponse.json(tech);
}