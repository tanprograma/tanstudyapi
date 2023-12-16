import Thought from "../schemas/thought.mjs";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const thoughts = await Thought.find();
  res.send(thoughts);
});
router.post("/create", async (req, res) => {
  if (req.body.length) {
    const thoughts = await Thought.create(req.body);

    res.send(thoughts);
    return;
  }
  const thought = await Thought.create(req.body);
  res.send(thought);
});
export default router;
