import mongoose from "mongoose";
const schema = new mongoose.Schema({
  created: { type: Date, default: () => Date.now() },
  content: String,
});

export default mongoose.model("diary", schema);
