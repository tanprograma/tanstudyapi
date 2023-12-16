import Review from "../schemas/review.mjs";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const reviews = await Review.find();
  res.send(reviews);
});
router.post("/create", async (req, res) => {
  if (req.body.length) {
    const reviews = await Review.create(req.body);

    res.send(reviews);
    return;
  }
  const review = await Review.create(req.body);
  res.send(review);
});
export default router;
