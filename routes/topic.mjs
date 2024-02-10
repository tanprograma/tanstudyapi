import topic from "../schemas/topic.mjs";
import Topic from "../schemas/topic.mjs";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const topics = await Topic.find();
  res.send(topics);
});
router.post("/create", async (req, res) => {
  if (req.body.length) {
    const topics = [];
    for (let i = 0; i < req.body.length; i++) {
      const topic = await Topic.create(req.body[i]);
      topics.push(topic);
    }

    res.send(topics);
    return;
  }
  const topic = await Topic.create(req.body);
  res.send(topic);
});

export default router;
