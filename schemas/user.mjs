import mongoose from "mongoose";
const schema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,
  alias: String,
});
export default mongoose.model("Users", schema);
