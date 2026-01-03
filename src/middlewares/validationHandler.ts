import { Request, Response, NextFunction } from "express";
import { validationResult, Result, ValidationError } from "express-validator";

export const validationHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // 🔍 validationResult(req) busca TODOS los errores acumulados en req
    const errors: Result<ValidationError> = validationResult(req);
    
    // Si hay errores (de cualquier validador anterior), responde y DETIENE
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array(),
        });
    }
    
    // Solo llega aquí si NO hubo errores en ningún validador
    next();
};

