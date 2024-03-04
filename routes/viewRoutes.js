import { Router } from "express";
import {
  getDashboard,
  getSignupPage,
  getFinances,
  getFarmGuide,
  getFarmProfile,
  getLoginPage,
} from "../controllers/viewsController.js";
import { getHarvestData } from "../controllers/yieldController.js";

const router = Router();

router.get("/", getHarvestData, getDashboard);
router.get("/signup", getSignupPage);
router.get("/login", getLoginPage);

router.get("/finances", getFinances);
router.get("/farm-guide", getFarmGuide);
router.get("/farm-profile", getFarmProfile);

export default router;
