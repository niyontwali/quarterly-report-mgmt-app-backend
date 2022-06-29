import Activity from "../models/activity.js";
import mongoose from "mongoose";

// Create Activity
const createActivity = async (req, res) => {
  const { title, quarter, body, startDate, endDate } = req.body;
  try {
    const newActivity = await Activity.create({
      title,
      quarter,
      body,
      startDate,
      endDate,
    });
    res.status(200).json({
      status: 200,
      message: "Activity create successfully",
      data: newActivity,
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      message: error.message,
    });
  }
};

// Get all activities
const allActivities = async (req, res) => {
  const data = await Activity.find().sort({ createdAt: -1 });
  res.status(200).json(data);
};

// Get all activities for Quarter 1
const allQuarterOneActivities = async (req, res) => {
  const data = await Activity.find({ quarter: "Quarter 1" }).sort({
    createdAt: -1,
  });
  res.status(200).json(data);
};

// Get all activities for Quarter 2
const allQuarterTwoActivities = async (req, res) => {
  const data = await Activity.find({ quarter: "Quarter 2" }).sort({
    createdAt: -1,
  });
  res.status(200).json(data);
};

// Get all activities for Quarter 3
const allQuarterThreeActivities = async (req, res) => {
  const data = await Activity.find({ quarter: "Quarter 3" }).sort({
    createdAt: -1,
  });
  res.status(200).json(data);
};

// Get all activities for Quarter 4
const allQuarterFourActivities = async (req, res) => {
  const data = await Activity.find({ quarter: "Quarter 4" }).sort({
    createdAt: -1,
  });
  res.status(200).json(data);
};

// Get a single activity
const getActivity = async (req, res) => {
  const { id } = req.params;
  // check if its a mongoose id type
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      status: 404,
      error: `Activity of id ${id} is invalid`,
    });
  }
  const data = await Activity.findById(id);

  if (!data) {
    return res.status(404).json({
      status: 404,
      error: "The activity can't be found",
    });
  }
  res.status(200).json(data);
};

// Delete activity
const deleteActivity = async (req, res) => {
  const { id } = req.params;
  // check if its a mongoose id type
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      status: 404,
      error: `Activity of id ${id} is invalid`,
    });
  }
  const data = await Activity.findOneAndDelete({ _id: id });

  if (!data) {
    return res.status(404).json({
      status: 404,
      error: "The activity can't be found",
    });
  }
  res.status(200).json({
    status: 200,
    message: "Activity deleted successfully",
  });
};

// Update activity
const updateActivity = async (req, res) => {
  const { id } = req.params;
  // check if its a mongoose id type
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      status: 404,
      error: `Activity of id ${id} is invalid`,
    });
  }
  const data = await Activity.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!data) {
    return res.status(404).json({
      status: 404,
      error: "The activity can't be found",
    });
  }
  res.status(200).json({
    status: 200,
    message: "The Activity was updated successfully",
  });
};

export {
  createActivity,
  allActivities,
  allQuarterOneActivities,
  allQuarterTwoActivities,
  allQuarterThreeActivities,
  allQuarterFourActivities,
  getActivity,
  deleteActivity,
  updateActivity,
};
