import { Request, Response } from "express";

export const loginController = async (
    req: Request<
        { id: string },
        {},
        { email: string; password: string },
        { prueba: string; log: string }
    >,
    res: Response
) => {
    const { email, password } = req.body;

    res.status(200).json({
        message: "Login exitoso",
        data: {
            email,
            password,
        },
    });
};
