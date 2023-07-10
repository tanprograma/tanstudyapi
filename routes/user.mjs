import User from "../schemas/user.mjs";
import express from "express";
import bcrypt from "bcrypt";
const router = express.Router();
const saltrounds = 10;
router.get("/", async (req, res) => {
  const users = await User.find();
  const modUsers = users.map((i) => {
    return {
      username: i.username,
      alias: i.alias,
    };
  });
  res.send(modUsers);
});
router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) {
    res.status(400).send("invalid username or password");
    return;
  }
  const found = bcrypt.compare(req.body.password, user.password);
  if (!found) {
    res.status(400).send("invalid username or password");
    return;
  }
  res.status(200).send({ username: user.username, alias: user.alias });
});
router.post("/create", async (req, res) => {
  if (req.body.length) {
    const u = [];
    for (let i = 0; i < req.body.length; i++) {
      const hash = await bcrypt.hash(req.body[i].password, saltrounds);
      const user = {
        username: req.body[i].username,
        password: hash,
        alias: req.body[i].alias,
      };
      u.push(user);
    }
    try {
      const users = await User.create(u);
      res.send(
        users.map((u) => {
          return {
            username: u.username,
            alias: u.alias,
          };
        })
      );
      return;
    } catch (error) {
      res.status(400).send("user already exists");
    }
  }
  const hash = await bcrypt.hash(req.body.password, saltrounds);
  try {
    const user = await User.create({
      username: req.body.username,
      password: hash,
      alias: req.body.alias,
    });
    res.send(user);
  } catch (error) {
    res.status(400).send("user already exists");
  }
});
export default router;
