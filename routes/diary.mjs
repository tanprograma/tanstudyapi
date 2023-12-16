import Diary from "../schemas/diary.mjs";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const diaries = await Diary.find();
  res.send(diaries);
});
router.post("/create", async (req, res) => {
  if (req.body.length) {
    const diaries = await Diary.create(req.body);

    res.send(diaries);
    return;
  }
  const diary = await Diary.create(req.body);
  res.send(diary);
});
export default router;
