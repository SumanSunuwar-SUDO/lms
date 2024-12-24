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

export const getCurriculumController = async (req, res, next) => {
  const { course } = req.query;
  try {
    const result = await Curriculum.find({ course });
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getContentController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await Curriculum.findOne(
      { "content._id": id },
      { "content.$": 1 }
    );

    if (!result || !result.content || result.content.length === 0) {
      return res.status(404).json({ message: "Content not found" });
    }

    res.status(200).json(result.content[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
