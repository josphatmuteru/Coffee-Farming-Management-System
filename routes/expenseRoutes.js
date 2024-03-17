import { Router } from "express";
import {
  createBudget,
  createExpense,
  deleteLabourExpense,
  getAllExpenses,
} from "../controllers/expensesController.js";

const router = Router();

router.post("/", createExpense);
router.post("/budget", createBudget);
router.delete("/labour/:activityId", deleteLabourExpense);

// router.get("/", getAllExpenses);

export default router;
