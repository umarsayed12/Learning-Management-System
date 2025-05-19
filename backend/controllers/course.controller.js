import { Course } from "../models/course.model.js";

export const createCourse = async (req, res) => {
  try {
    const { courseTitle, description, category, coursePrice, courseThumbnail } =
      req.body;
    if (
      !courseTitle ||
      !category ||
      !description ||
      !coursePrice ||
      courseThumbnail
    ) {
      return res.status(400).json({
        message:
          "Course Title, Description, Category, Price and Thumbnail is Required.",
      });
    }
    const course = await Course.create({
      courseTitle,
      description,
      category,
      coursePrice,
      courseThumbnail,
      instructor: req.id,
    });
    return res.status(201).json({
      course,
      message: "Course Created Successfully.",
    });
  } catch (error) {
    console.log("Course Creation Error : ", error);
    return res.status(500).json({
      message: "Failed to create course",
    });
  }
};
