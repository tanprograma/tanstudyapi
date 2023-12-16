import Plan from "../schemas/plan.mjs";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const plans = await Plan.find();
  res.send(plans);
});
router.post("/create", async (req, res) => {
  if (req.body.length) {
    const plans = await Plan.create(req.body);

    res.send(plans);
    return;
  }
  const plan = await Plan.create(req.body);
  res.send(plan);
});
export default router;
