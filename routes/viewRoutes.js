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
import { getHarvestData } from "../controllers/yieldController.js";
import {
  getAllExpenses,
  getBudget,
} from "../controllers/expensesController.js";
import { getFarmingActivityData } from "../controllers/farmGuideController.js";

const router = Router();

router.get("/", getHarvestData, getDashboard);
router.get("/signup", getSignupPage);
router.get("/login", getLoginPage);

router.get("/finances", getAllExpenses, getBudget, getFinances);
router.get("/farm-guide", getFarmGuideMenu);
router.get("/farm-guide/fertilizer-application", getFertilizerApplicationGuide);
router.get("/farm-guide/pest-management", getPestManagementGuide);
router.get("/farm-guide/:activity", getFarmingActivityDetailsPage);
router.get("/farm-profile", getFarmProfile);

export default router;
