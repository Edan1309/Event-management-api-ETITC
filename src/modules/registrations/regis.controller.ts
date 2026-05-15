import type { Request, Response } from "express";
import { RegistrationsService } from "./regis.service.js";

export class RegistrationsController {

    private service = new RegistrationsService();

    register = async (
        req: Request,
        res: Response
    ) => {

        const result = await this.service.register(req.body);

        res.status(201).json({
            message: 'Registro creado correctamente',
            data: result
        });
    };

    findAll = async (
        req: Request,
        res: Response
    ) => {

        const result = await this.service.findAll();

        res.status(200).json({
            data: result
        });
    };

    getByEvent = async (
        req: Request<{ eventId: string }>,
        res: Response
    ) => {

        const result = await this.service.findByEvent(
            req.params.eventId
        );

        res.json(result);
    };

    update = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {

        const result = await this.service.update(
            req.params.id,
            req.body
        );

        res.status(200).json({
            message: 'Registro actualizado',
            data: result
        });
    };

    delete = async (
        req: Request<{ id: string }>,
        res: Response
    ) => {

        await this.service.delete(req.params.id);

        res.status(200).json({
            message: 'Registro eliminado'
        });
    };
}