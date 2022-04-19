import { Router } from "express";

// Link controller
import HealthcheckController from "../../controllers/healtcheck.controller";

const router = Router();

// @route GET /healthcheck
// @desc Used to check health of overall API
// @access PUBLIC
router.route("/").get(HealthcheckController.getStatus);
export default router;
