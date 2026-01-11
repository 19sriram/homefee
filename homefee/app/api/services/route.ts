import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const serviceWithApartment = await prisma.service.findMany({
});
  return NextResponse.json(serviceWithApartment);
}

export async function POST(request: NextRequest) {
  const body = await request.json(); 
  const newService = await prisma.service.create({
data:body  });
  return NextResponse.json(newService, { status: 201 });

}

export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const modifiedService = await prisma.service.update({
    where : {
      id: Number(body.id)
    },
    data: body
  });
return NextResponse.json(modifiedService, { status: 202 });
}
