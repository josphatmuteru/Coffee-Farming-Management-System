import { Router } from "express";
import {
  createFarmInput,
  deleteFarmInput,
  getAllFarmInputs,
  updateFarmInput,
} from "../controllers/farmInputsController.js";
import { protect } from "../api/authController.js";

const router = Router();

router.get("/", protect, getAllFarmInputs);
router.post("/", protect, createFarmInput);
router.post("/:id", updateFarmInput);
router.delete("/:id", deleteFarmInput);

export default router;
