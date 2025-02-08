import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  image: { type: String },
  password: { type: String, select: false },
  campaigns: [{ type: Schema.Types.ObjectId, ref: "Campaign" }], // User is linked to multiple campaigns
});

export default models.User || model("User", UserSchema);
