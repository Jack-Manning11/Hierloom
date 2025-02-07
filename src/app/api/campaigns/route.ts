import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Campaign from "@/models/Campaign";

export async function GET() {
  await connectDB();
  const campaigns = await Campaign.find({});
  return NextResponse.json(campaigns);
}
