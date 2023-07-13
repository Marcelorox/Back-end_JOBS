import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET({ params }: { params: { userId: string } }) {
  const prisma = new PrismaClient();

  const { userId } = params;

  const userWithTechs = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      techs: true,
    },
  });

  return NextResponse.json(userWithTechs?.techs);
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

  const tech = await prisma.tech.create({
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