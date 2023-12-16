import mongoose from "mongoose";
const schema = new mongoose.Schema({
  created: { type: Date, default: () => Date.now() },
  topic: String,
  points: [String],
});

export default mongoose.model("review", schema);
