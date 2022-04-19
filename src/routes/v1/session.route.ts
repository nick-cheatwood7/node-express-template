import { Request, Response, Router } from "express";

// Link controller
import SessionController from "../../controllers/session.controller";

const router = Router();

// @route GET /sessions
// @desc Return a 200 status code
// @access PUBLIC
router.route("/").get((_req: Request, res: Response) => {
  res.status(200).json({ message: "OK" });
});

// @route POST /sessions
// @desc Create a new user session
// @access PUBLIC
router.route("/").post(SessionController.createSession);
export default router;
