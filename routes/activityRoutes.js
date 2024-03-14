import { Router } from "express";
import {
  createActivity,
  getCurrentMonthsRecommendedActivities,
  getScheduleActivities,
} from "../controllers/activitiesController.js";

const router = Router();

router.post("/", createActivity);
router.get("/", getScheduleActivities);
router.get("/recommended-this-month", getCurrentMonthsRecommendedActivities);

export default router;
