import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  const userID = req.headers.get("x-user-id")

  if (!userID) {
    return NextResponse.json(
      { error: "unauthorized" },
      { status: 401 }
    )
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(userID) },
    select: {
      id: true,
      name: true,
      email: true,
      business_name: true,
      business_address: true,
      business_email: true,
      phone: true,
      logo: true,
    }
  })

  return NextResponse.json({ user })
}