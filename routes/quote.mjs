import Quote from "../schemas/quote.mjs";
import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  const quotes = await Quote.find();
  res.send(quotes);
});
router.post("/create", async (req, res) => {
  if (req.body.length) {
    const quotes = await Quote.create(req.body);

    res.send(quotes);
    return;
  }
  const quote = await Quote.create(req.body);
  res.send(quote);
});
export default router;
