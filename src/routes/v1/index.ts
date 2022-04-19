import { Router } from "express";
import healthcheckRouter from "./healthcheck.route";
import sessionRouter from "./session.route";

const routes = Router();

routes.use("/healthcheck", healthcheckRouter);

routes.use("/sessions", sessionRouter);
export default routes;
