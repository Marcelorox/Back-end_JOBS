import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const prisma = new PrismaClient();

  const jobs = await prisma.job.findMany({
  
  })
  
  return NextResponse.json(jobs);
}
