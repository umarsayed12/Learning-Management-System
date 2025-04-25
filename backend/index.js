import express from "express";
import dotenv from "dotenv";

dotenv.config({});
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Bachhon!!!");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
