import { Router } from "express";
import {
  createActivity,
  deleteActivity,
  getCurrentMonthsRecommendedActivities,
  getScheduleActivities,
  updateActivity,
} from "../controllers/activitiesController.js";

const router = Router();

router.post("/", createActivity);
router.get("/", getScheduleActivities);
router.post("/:activityId", updateActivity);
router.delete("/:activityId", deleteActivity);
router.get("/recommended-this-month", getCurrentMonthsRecommendedActivities);

export default router;
