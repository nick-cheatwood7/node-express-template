import { Request, Response } from "express";

export default class HealthcheckController {
  static async getStatus(_req: Request, res: Response) {
    res.status(200).json({ message: "API service is healthy." });
  }
}
