import type { Request, Response } from "express";
import { EventsService } from "./events.service.js";

export class EventsController {
    private service = new EventsService();

    create = async (req: Request, res: Response) => {
        const result = await this.service.create(req.body);
        res.status(201).json(result);
    };

    findAll = async (req: Request, res: Response) => {
        const result = await this.service.findAll();
        res.json(result);
    };
}