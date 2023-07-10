import Question from "../schemas/question.mjs";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const questions = await Question.find();
  res.send(questions);
});
router.post("/create", async (req, res) => {
  if (req.body.length) {
    const questions = [];
    for (let i = 0; i < req.body.length; i++) {
      const question = await Question.create(req.body[i]);
      questions.push(question);
    }

    res.send(questions);
    return;
  }
  const question = await Question.create(req.body);
  res.send(question);
});

export default router;
