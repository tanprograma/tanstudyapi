import Format from "../schemas/format.mjs";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const formats = await Format.find();
  res.send(formats);
});
router.post("/create", async (req, res) => {
  if (req.body.length) {
    const formats = [];
    for (let i = 0; i < req.body.length; i++) {
      const format = await Format.create(req.body[i]);
      formats.push(format);
    }

    res.send(formats);
    return;
  }
  const format = await Format.create(req.body);
  res.send(format);
});
export default router;
