import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const prisma = new PrismaClient();
    const { id } = params;
  
    const existingJob = await prisma.job.findUnique({
      where: { id: id as string },
    });
  
    if (!existingJob) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }
  
    const deleteJob = await prisma.job.delete({
      where: { id: id as string },
    });
    
    return NextResponse.json(deleteJob)
  }