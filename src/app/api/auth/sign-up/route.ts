import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prismaDb } from "@/lib/prismadb/prismadb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name) return new NextResponse("name is required", { status: 401 });
    if (!email) return new NextResponse("email is required", { status: 401 });
    if (!password)
      return new NextResponse("password is required", { status: 401 });
    console.log(name, email, password);

    const existingUser = await prismaDb.user.findFirst({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new NextResponse("user already exist in Database", {
        status: 201,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prismaDb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return new NextResponse("user created", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("something went wrong", { status: 500 });
  }
}
