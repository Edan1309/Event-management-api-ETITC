import type { Request, Response } from "express";
import { NotificationsService } from "./noti.service.js";

export class NotificationsController {

    private service = new NotificationsService();

    create = async (req: Request, res: Response) => {
        const result = await this.service.create(req.body);
        res.status(201).json(result);
    }

    findByUser = async (
        req: Request<{ userId: string }>,
        res: Response
    ) => {
        const result = await this.service.findByUser(req.params.userId);
        res.json(result);
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
        message: 'Notificación actualizada',
        data: result
    });
    }

    delete = async (
    req: Request<{ id: string }>,
    res: Response
) => {

    await this.service.delete(req.params.id);

    res.status(200).json({
        message: 'Notificación eliminada'
    });
    }

    
}