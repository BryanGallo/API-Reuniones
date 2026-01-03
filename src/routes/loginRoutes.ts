import { Router } from "express";
import { loginController } from "../controllers/loginController.js";
import { validationHandler } from "../middlewares/validationHandler.js";
import { loginBodyValidator } from "../validators/loginValidator.js";

const loginRoutes = Router();

// Aplicar validaciones antes del controlador
// express-validator valida en RUNTIME, pero NO tipa automáticamente
loginRoutes.post(
    "/login",
    loginBodyValidator,
    validationHandler,     // Maneja errores de validación
    loginController        // Controlador (aún necesita tipos explícitos)
);

export { loginRoutes };
