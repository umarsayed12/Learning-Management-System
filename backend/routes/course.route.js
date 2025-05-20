import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  createCourse,
  getInstructorCourses,
  updateCourse,
  UploadImage,
} from "../controllers/course.controller.js";
import upload from "../utils/multer.js";

const router = express.Router();

router.route("/").post(isAuthenticated, createCourse);
router.route("/").get(isAuthenticated, getInstructorCourses);
router.route("/:id").patch(isAuthenticated, updateCourse);
router
  .route("/upload-image")
  .post(isAuthenticated, upload.single("thumbnailImage"), UploadImage);
export default router;
