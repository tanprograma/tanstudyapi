import mongoose from "mongoose";
const schema = new mongoose.Schema({
  topic: { type: String, lowercase: true },
  subtopics: [{ subtopic: String, headings: [String] }],
});
export default mongoose.model("Topics", schema);
