import { Router } from "express";
import {
  createBudget,
  createExpense,
  deleteLabourExpense,
  getAllExpenses,
  getBudget,
} from "../controllers/expensesController.js";
import { protect } from "../api/authController.js";

const router = Router();

router.post("/", protect, createExpense);
router.get("/", protect, getAllExpenses);
router.post("/budget", protect, createBudget);
router.get("/budget", protect, getBudget);
router.delete("/labour/:activityId", protect, deleteLabourExpense);

// router.get("/", getAllExpenses);

export default router;
