import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const { name } = await request.json();
  const newUser = await prisma.user.create({
    data: { name },
  });
  return NextResponse.json(newUser, { status: 201 });
}
