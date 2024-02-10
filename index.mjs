import questions from "./routes/question.mjs";
import topics from "./routes/topic.mjs";
import subtopics from "./routes/subtopic.mjs";
import formats from "./routes/format.mjs";
import users from "./routes/user.mjs";
import quotes from "./routes/quote.mjs";
import plans from "./routes/plan.mjs";
import reviews from "./routes/review.mjs";
import thoughts from "./routes/thought.mjs";
import diaries from "./routes/diary.mjs";
import fields from "./routes/field.mjs";
import todos from "./routes/todo.mjs";
import notes from "./routes/notes.mjs";
import * as dotenv from "dotenv";
import { dbConnect } from "./utilities/dbconnect.mjs";
dotenv.config();
import express from "express";

const app = express();
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Headers", ["*"]);
  res.append("Access-Control-Allow-Methods", [
    "PUT",
    "GET",
    "HEAD",
    "POST",
    "DELETE",
    "OPTIONS",
  ]);

  next();
});
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/questions", questions);
app.use("/api/topics", topics);
app.use("/api/subtopics", subtopics);
app.use("/api/formats", formats);
app.use("/api/users", users);
app.use("/api/quotes", quotes);
app.use("/api/diaries", diaries);
app.use("/api/reviews", reviews);
app.use("/api/plans", plans);
app.use("/api/thoughts", thoughts);
app.use("/api/fields", fields);
app.use("/api/todos", todos);
app.use("/api/notes", notes);

const conURI = process.env.DB_URI;
dbConnect(conURI);
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log(`app listening on port ${PORT}`);
});
