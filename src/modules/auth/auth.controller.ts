import { type Request, type Response , type NextFunction } from "express";
import { authService } from "./auth.service.js";


export class authController {
    private authService = new  authService;


    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.authService.register(req.body);
            res.status(201).json(result);
        } catch (error) {
            next(error)
        }
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.authService.login(req.body);
            res.status(200).json(result);
        } catch (error) {
            next(error)
}
    }
profile = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
) => {

    try {

        const result = await this.authService.profile(
            req.params.id
        );

        res.status(200).json({
            message: 'Perfil obtenido',
            data: result
        });

    } catch (error) {
        next(error);
    }
}

update = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
) => {

    try {

        const result = await this.authService.update(
            req.params.id,
            req.body
        );

        res.status(200).json({
            message: 'Usuario actualizado',
            data: result
        });

    } catch (error) {
        next(error);
    }
}

delete = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
) => {

    try {

        await this.authService.delete(req.params.id);

        res.status(200).json({
            message: 'Usuario eliminado'
        });

    } catch (error) {
        next(error);
    }
}

}
