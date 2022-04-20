import express, { Express, Request, Response } from "express";
import cors from "cors";

// Import routes
import v1 from "./routes/v1";

const app: Express = express();

// Apply middleware
app.set("proxy", 1);
app.use(cors());
app.use(express.json());

// Enable routes
app.use("/api/v1/", v1);
app.use("/api/vLatest", v1);
app.use("/api/", v1); // Set the default version to latest

// Default route
app.use("*", (_req: Request, res: Response) =>
  res.status(404).json({ message: "Not found" })
);

export default app;
