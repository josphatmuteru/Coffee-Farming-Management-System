import { Router } from "express";
import {
  getFarmingActivityData,
  getFertilizerApplicationGuideData,
  getPestManagementGuideData,
} from "../controllers/farmGuideController.js";

const router = Router();

router.get("/fertilizer-application", getFertilizerApplicationGuideData);
router.get("/pest-management", getPestManagementGuideData);
router.get("/:activity", getFarmingActivityData);

export default router;
