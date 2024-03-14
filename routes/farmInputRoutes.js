import { Router } from "express";
import {
  createFarmInput,
  deleteFarmInput,
  getAllFarmInputs,
  updateFarmInput,
} from "../controllers/farmInputsController.js";

const router = Router();

router.get("/", getAllFarmInputs);
router.post("/", createFarmInput);
router.post("/:id", updateFarmInput);
router.delete("/:id", deleteFarmInput);

export default router;
