import { Router } from "express";
import {
  createFarmInput,
  getAllFarmInputs,
  updateFarmInput,
} from "../controllers/farmInputsController.js";

const router = Router();

router.get("/", getAllFarmInputs);
router.post("/", createFarmInput);
router.post("/:id", updateFarmInput);

export default router;
