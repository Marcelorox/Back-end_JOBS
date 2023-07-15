import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    const { id } = params;
  
    const { name, description } = await request.json();
  
    const existingJob = await prisma.job.findUnique({
      where: { id: id as string },
    });
  
    if (!existingJob) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }
  
    const updatedJob = await prisma.job.update({
      where: { id: id as string },
      data: { name, description },
    });
    
    return NextResponse.json(updatedJob)
  }