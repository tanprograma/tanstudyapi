import Field from "../schemas/field.mjs";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const fields = await Field.find();
  res.send(fields);
});
router.post("/create", async (req, res) => {
  if (req.body.length) {
    const fields = [];
    for (let i = 0; i < req.body.length; i++) {
      const field = await Field.create(req.body[i]);
      fields.push(field);
    }

    res.send(fields);
    return;
  }
  const field = await Field.create(req.body);
  res.send(field);
});
export default router;
