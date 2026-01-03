import express from "express";
import { loginRoutes } from "./routes/loginRoutes.js";

const app = express();

app.use(express.json());

app.use(express.static("./src/public"));

app.use("/api", loginRoutes);

// Middleware para manejar rutas no encontradas (404)
app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada",
        message: `La ruta ${req.method} ${req.path} no existe en el servidor`,
        path: req.path,
    });
});

export { app };
