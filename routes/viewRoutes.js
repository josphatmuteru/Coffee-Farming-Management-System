import { Router } from "express";
import {
  getDashboard,
  getSignupPage,
  getFinances,
  getFarmProfile,
  getLoginPage,
  getFertilizerApplicationGuide,
  getPestManagementGuide,
  getFarmingActivityDetailsPage,
  getFarmGuideMenu,
} from "../controllers/viewsController.js";
import { getHarvestData } from "../controllers/produceController.js";
import {
  getAllExpenses,
  getBudget,
} from "../controllers/expensesController.js";
import { getFarmingActivityData } from "../controllers/farmGuideController.js";
import { protect } from "../api/authController.js";

const router = Router();

router.get("/signup", getSignupPage);
router.get("/login", getLoginPage);

router.get("/", protect, getHarvestData, getDashboard);
router.get("/finances", protect, getAllExpenses, getFinances);
router.get("/farm-guide", protect, getFarmGuideMenu);
router.get(
  "/farm-guide/fertilizer-application",
  protect,
  getFertilizerApplicationGuide
);
router.get("/farm-guide/pest-management", protect, getPestManagementGuide);
router.get("/farm-guide/:activity", protect, getFarmingActivityDetailsPage);
router.get("/farm-profile", protect, getFarmProfile);

export default router;
