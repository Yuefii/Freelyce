import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const userID = req.headers.get("x-user-id")
    const body = await req.json()
    const {
      name,
      email,
      business_name,
      business_address,
      business_email,
      phone
    } = body

    if (!userID) {
      return NextResponse.json(
        { error: 'unauthorized' },
        { status: 401 }
      )
    }

    const updateData: any = {}
    if (name) updateData.name = name
    if (email) updateData.email = email;
    if (business_name) updateData.business_name = business_name;
    if (business_address) updateData.business_address = business_address;
    if (business_email) updateData.business_email = business_email;
    if (phone) updateData.phone = phone;

    const user = await prisma.user.update({
      where: { id: parseInt(userID) },
      data: {
        name,
        email,
        phone,
        business_name,
        business_email,
        business_address,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        business_name: true,
        business_email: true,
        business_address: true,
      },
    })

    return NextResponse.json(
      { message: "user update successfully", user },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 }
    )
  }
}