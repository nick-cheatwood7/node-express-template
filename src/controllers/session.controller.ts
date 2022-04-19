import { Request, Response } from "express";

export default class SessionController {
  static async createSession(_req: Request, res: Response) {
    res.status(201).json({ message: "Created Session." });
  }
}
