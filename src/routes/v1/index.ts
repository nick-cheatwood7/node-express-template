import { Request, Response, Router } from "express";
import healthcheckRouter from "./healthcheck.route";
import sessionRouter from "./session.route";

const routes = Router();

routes.use("/healthcheck", healthcheckRouter);

routes.use("/home", (_req: Request, res: Response) => {
  res.status(200).json({ message: "OK" });
});

routes.use("/sessions", sessionRouter);
export default routes;
