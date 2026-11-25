import express from "express";
import path from "node:path";
import curriculumRoutes from "./routes/curriculum.routes.js";

const app = express();
const PUERTO = process.env.PORT || 3000;

/* Motor de plantillas */
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

/* Archivos estáticos: CSS, JS e imágenes */
app.use(express.static(path.join(import.meta.dirname, "public")));

/* Rutas */
app.use("/", curriculumRoutes);

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});
