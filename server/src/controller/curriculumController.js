import { Curriculum } from "../models/curriculumSchema.js";

export const createCurriculumController = async (req, res, next) => {
  try {
    const data = req.body;
    const curriculum = await Curriculum.create(data);
    res.status(201).json({
      success: true,
      message: "Curriculum created successfully",
      data: curriculum,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const addContentController = async (req, res, next) => {
  try {
    const { id, content } = req.body;
    const curriculum = await Curriculum.findByIdAndUpdate(
      id,
      { $push: { content } },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Content added successfully",
      data: curriculum,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
