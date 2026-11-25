import curriculum from "../data/curriculum.js";

/* GET / : renderiza el currículum con los datos del módulo. */
export function mostrarCurriculum(req, res) {
    res.render("index", { cv: curriculum });
}
