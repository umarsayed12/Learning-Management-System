import { Course } from "../models/course.model.js";
import { uploadMedia } from "../utils/cloudinary.js";

export const createCourse = async (req, res) => {
  try {
    const {
      courseTitle,
      subTitle,
      description,
      category,
      courseLevel,
      coursePrice,
      courseThumbnail,
      isPublished,
    } = req.body;
    if (
      !courseTitle ||
      !category ||
      !description ||
      !coursePrice ||
      !courseThumbnail
    ) {
      return res.status(400).json({
        message:
          "Course Title, Description, Category, Price and Thumbnail is Required.",
      });
    }
    const course = await Course.create({
      courseTitle,
      subTitle,
      description,
      category,
      courseLevel,
      coursePrice,
      courseThumbnail,
      instructor: req.id,
      isPublished,
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

export const getInstructorCourses = async (req, res) => {
  try {
    const userId = req.id;
    const courses = await Course.find({ instructor: userId });
    if (!courses) {
      return res.status(404).json({
        courses: [],
        message: "Course not found.",
      });
    }
    return res.status(200).json({
      courses,
      message: "Courses Fetched Successfully.",
    });
  } catch (error) {
    console.log("Course Fetch Error : ", error);
    return res.status(500).json({
      message: "Failed to fetch courses",
    });
  }
};

export const UploadImage = async (req, res) => {
  try {
    const file = req.file;

    const cloudResponse = await uploadMedia(file ? file.path : "");
    const photoUrl = cloudResponse ? cloudResponse.secure_url : "";
    return res.status(201).json({
      photoUrl,
      message: "Photo Uploaded Successfully.",
    });
  } catch (error) {
    console.log("Upload Image Error : ", error);
    return res.status(500).json({
      message: "Failed to Upload Image to Cloudinary",
    });
  }
};
