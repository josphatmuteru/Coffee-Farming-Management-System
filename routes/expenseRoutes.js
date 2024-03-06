import { Router } from "express";
import {
  createBudget,
  createExpense,
  getAllExpenses,
} from "../controllers/expensesController.js";

const router = Router();

router.post("/", createExpense);
router.post("/budget", createBudget);
// router.get("/", getAllExpenses);

export default router;
