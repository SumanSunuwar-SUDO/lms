import { Course } from "../models/courseSchema.js";

export const createCourseController = async (req, res, next) => {
  try {
    const result = await Course.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAllCourseController = async (req, res, next) => {
  try {
    const result = await Course.find();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};


export const addCourseCurriculumController = async (req, res, next) => {
  const { id, title, content } = req.body;

  try {
    const result = await Course.findByIdAndUpdate(
      id,
      { $push: { curriculum: { title, content } } },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.status(200).json({
      message: "Curriculum added successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error adding curriculum:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
