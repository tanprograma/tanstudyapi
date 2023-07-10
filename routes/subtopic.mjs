import Subtopic from "../schemas/topic.mjs";
import express from "express";
const router = express.Router();

// router.get("/", async (req, res) => {
//   const subtopics = await Subtopic.find();
//   res.send(subtopics);
// });
router.post("/create/:topic_id", async (req, res) => {
  if (req.body.length) {
    const topic = await Subtopic.findOne({ topic: req.params.topic_id });
    const len = topic.subtopics.length;
    for (let i = 0; i < req.body.length; i++) {
      topic.subtopics.push(req.body[i]);
    }
    await topic.save();
    res.send(topic.subtopics.slice(len));
    return;
  }
  const topic = await Subtopic.findOne({ topic: req.params.topic_id });
  const len = topic.subtopics.length;
  topic.subtopics.push(req.body);
  await topic.save();
  res.send(topic.subtopics[len]);
});
export default router;
