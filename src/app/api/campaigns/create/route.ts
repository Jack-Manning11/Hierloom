import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Campaign from "@/models/Campaign";

export async function POST(req: Request) {
  await connectDB();
  const { name } = await req.json();
  
  // Create new campaign
  const campaign = await Campaign.create({ name });

  return NextResponse.json(campaign);
}
