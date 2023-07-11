import mongoose from "mongoose";
const schema = new mongoose.Schema({
  quote: String,
  author: String,
  year: Number,
});

export default mongoose.model("Qoutes", schema);
