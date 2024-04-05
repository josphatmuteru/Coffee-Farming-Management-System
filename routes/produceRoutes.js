import { Router } from "express";

import {
  createHarvestData,
  getFarmProfile,
  getFinancesOverviewData,
  getIncomeData,
  updateFarmProfile,
} from "../controllers/produceController.js";
import { protect } from "../api/authController.js";

const router = Router();

router.get("/finances-overview", protect, getFinancesOverviewData);
router.get("/income", protect, getIncomeData);
router.get("/farm-profile", protect, getFarmProfile);
router.post("/farm-profile/:farmId", updateFarmProfile);
router.post("/coffee-yield", protect, createHarvestData);

export default router;
