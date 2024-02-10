import Note from "../schemas/notes.mjs";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const notes = await Note.find();
  res.send(notes);
});
router.post("/create", async (req, res) => {
  const notes = await Note.create(req.body);

  res.send(notes);
});
export default router;
