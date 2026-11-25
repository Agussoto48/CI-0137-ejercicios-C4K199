import { Router } from "express";
import { mostrarCurriculum } from "../controllers/curriculum.controller.js";

const router = Router();

router.get("/", mostrarCurriculum);

export default router;
