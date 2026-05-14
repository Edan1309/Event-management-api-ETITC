import type { Request, Response } from "express";
import { FeedbackService } from "./feed.service.js";

export class FeedbackController {

    private service = new FeedbackService();

    create = async (req: Request, res: Response) => {

        const result = await this.service.create(req.body);

        res.status(201).json({
            message: 'Feedback creado',
            data: result
        });
    }

    findAll = async (req: Request, res: Response) => {

        const result = await this.service.findAll();

        res.status(200).json({
            data: result
        });
    }

    update = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {

        const result = await this.service.update(
            req.params.id,
            req.body
        );

        res.status(200).json({
            message: 'Feedback actualizado',
            data: result
        });
    }

    delete = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {

        await this.service.delete(req.params.id);

        res.status(200).json({
            message: 'Feedback eliminado'
        });
    }
}