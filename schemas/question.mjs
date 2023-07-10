import mongoose from "mongoose";
const schema = new mongoose.Schema({
  question: String,
  choices: [{ choice: String, isAnswer: Boolean }],
  format: { type: mongoose.Types.ObjectId, ref: "Formats" },
  topic: { type: mongoose.Types.ObjectId, ref: "Topics" },
  subtopic: String,
  created_at: {
    type: Date,
    default: () => {
      return Date.now();
    },
  },
});
export default mongoose.model("Questions", schema);
