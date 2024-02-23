const express = require("express");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.get("/", viewsController.getDashboard);

router.get("/finances", viewsController.getFinances);
router.get("/farm-guide", viewsController.getFarmGuide);
router.get("/farm-profile", viewsController.getFarmProfile);

module.exports = router;
