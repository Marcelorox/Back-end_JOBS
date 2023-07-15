import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  const prisma = new PrismaClient();

  const jobs = await prisma.job.findMany({
    where: {
      userId: params.userId,
    },
  });

  return NextResponse.json(jobs);
}


