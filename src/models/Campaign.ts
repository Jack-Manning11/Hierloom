import mongoose, { Schema, model, models } from "mongoose";

const CampaignSchema = new Schema({
  name: { type: String, required: true },
  gm: { type: Schema.Types.ObjectId, ref: "User", required: true },
  players: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

export default models.Campaign || model("Campaign", CampaignSchema);
