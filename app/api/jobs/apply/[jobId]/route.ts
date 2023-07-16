import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST(

    request: NextRequest,
    {
      params,
    }: {
      params: { jobId: string };
    }
  ) {
    const prisma = new PrismaClient()
  
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