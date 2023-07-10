import mongoose from "mongoose";
const schema = new mongoose.Schema({
  format: String,
});

export default mongoose.model("Formats", schema);
