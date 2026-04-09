import type { Request, Response } from "express";
import { RegistrationsService } from "./regis.service.js";

export class RegistrationsController {
    private service = new RegistrationsService();

    register = async (req: Request, res: Response) => {
        const result = await this.service.register(req.body);
        res.status(201).json(result);
    };

    getByEvent = async (req: Request<{ eventId: string }>, res: Response) => {
    const result = await this.service.findByEvent(req.params.eventId);
    res.json(result);
    };
}