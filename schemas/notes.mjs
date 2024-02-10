import mongoose from "mongoose";
const schema = new mongoose.Schema({
  topic: String,
  note: String,
  created_at: {
    type: Number,
    default: () => {
      return Date.now();
    },
  },
});
export default mongoose.model("Note", schema);
