import express from "express";
import dotenv from "dotenv";
import dbConnect from "./database/db.js";
import userRoute from "./routes/user.route.js";
dotenv.config({});
const app = express();
dbConnect();
app.get("/", (req, res) => {
  res.send("Hello Bach!!!");
});
const port = process.env.PORT || 5000;

app.use("/api/v1/user", userRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
