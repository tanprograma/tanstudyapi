import Todo from "../schemas/todo.mjs";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const plans = await Todo.find();
  res.send(plans);
});
router.post("/create", async (req, res) => {
  if (req.body.length) {
    const plans = await Todo.create(req.body);

    res.send(plans);
    return;
  }
  const plan = await Todo.create(req.body);
  res.send(plan);
});
export default router;
