import { body, ValidationChain } from "express-validator";

// Validaciones para el body del login
export const loginBodyValidator: ValidationChain[] = [
    body("email")
        .notEmpty()
        .withMessage("El email es requerido")
        .isEmail()
        .withMessage("El email debe ser válido")
        .normalizeEmail(), // Normaliza el email (minúsculas, etc.)

    body("password")
        .notEmpty()
        .withMessage("La contraseña es requerida")
        .isLength({ min: 6 })
        .withMessage("La contraseña debe tener al menos 6 caracteres"),
];
