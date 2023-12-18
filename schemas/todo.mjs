import mongoose from "mongoose";
const schema = new mongoose.Schema({
  created: { type: Date, default: () => Date.now() },
  topic: String,
  points: [{ item: String, completed: { type: Boolean, default: false } }],
});

export default mongoose.model("todo", schema);
