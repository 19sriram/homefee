import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const apartments = await prisma.apartment.findMany();
  return NextResponse.json(apartments);
}

export async function POST(request: NextRequest) {
  const { name } = await request.json();
  const newUser = await prisma.apartment.create({
    data: { name },
  });
  return NextResponse.json(newUser, { status: 201 });

}
