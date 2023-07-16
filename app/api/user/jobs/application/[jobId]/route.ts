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


export async function DELETE(req: NextRequest, { params }: { params: { applicationId: string } }) {
    try {
      const { applicationId } = params;
  
      const deleteJob = await prisma.application.delete({
        where: { id: applicationId as string },
      });
      return NextResponse.json(deleteJob);
    } catch (error) {
      console.error(error);
      return NextResponse.json("applicationId required.", { status: 500 });
    }
  }
  