import express from "express";
import {
  allActivities,
  allQuarterFourActivities,
  allQuarterOneActivities,
  allQuarterThreeActivities,
  allQuarterTwoActivities,
  createActivity,
  deleteActivity,
  getActivity,
  updateActivity,
} from "../controllers/activity.js";

const router = express.Router();

router.get("/", allActivities);
router.get("/:id", getActivity);

router.get("/quarters/q1", allQuarterOneActivities);
router.get("/:id", getActivity);
router.get("/quarters/q2", allQuarterTwoActivities);
router.get("/quarters/q3", allQuarterThreeActivities);
router.get("/quarters/q4", allQuarterFourActivities);
router.post("/", createActivity);
router.patch("/:id", updateActivity);
router.delete("/:id", deleteActivity);

export default router;
