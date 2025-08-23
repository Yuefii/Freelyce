import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(req: NextRequest) {
  try {
    const userID = req.headers.get("x-user-id")
    const body = await req.json()
    const { old_password, new_password } = body

    if (!old_password || !new_password) {
      return NextResponse.json(
        { error: "field are required" },
        { status: 400 }
      )
    }

    if (!userID) {
      return NextResponse.json(
        { error: 'unauthorized' },
        { status: 401 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { id: parseInt(userID) }
    });

    if (!user) {
      return NextResponse.json(
        { error: "data not found" },
        { status: 404 }
      );
    }

    const isMatch = await bcrypt.compare(old_password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "old password is incorrect" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(new_password, 10);

    await prisma.user.update({
      where: { id: parseInt(userID) },
      data: { password: hashedPassword }
    })

    return NextResponse.json(
      { message: "password updated successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "internal server erro" },
      { status: 500 }
    )
  }
}