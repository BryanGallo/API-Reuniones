import { Router } from "express";
import { loginController } from "../controllers/loginController.js";
import { loginBodyValidator, loginParamValidator, loginQueryValidator } from "../validators/loginValidator.js";
import { validationHandler } from "../middlewares/validationHandler.js";

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