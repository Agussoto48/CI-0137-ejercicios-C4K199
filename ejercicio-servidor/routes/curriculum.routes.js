import { Router } from "express";
import { mostrarCurriculum, recibirContacto } from "../controllers/curriculum.controller.js";

const router = Router();

router.get("/", mostrarCurriculum);
router.post("/contacto", recibirContacto);

export default router;
