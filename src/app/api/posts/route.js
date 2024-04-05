import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const prisma = new PrismaClient();
    const result = await prisma.posts.create({ data: body });
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", message: e });
  }
}

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.posts.findMany();
    return NextResponse.json({ status: "success", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", message: e });
  }
}
