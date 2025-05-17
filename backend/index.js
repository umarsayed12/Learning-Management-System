import express from "express";
import dotenv from "dotenv";
import dbConnect from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config({});
const app = express();
dbConnect();
app.get("/", (req, res) => {
  res.send("Server Running...");
});
const port = process.env.PORT || 5000;

//default Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
//apis
app.use("/api/v1/user/", userRoute);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
