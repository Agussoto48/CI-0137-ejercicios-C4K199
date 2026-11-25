import curriculum from "../data/curriculum.js";

/* GET / : renderiza el currículum con los datos del módulo. */
export function mostrarCurriculum(req, res) {
    res.render("index", { cv: curriculum });
}

/* POST /contacto : lee el formulario desde req.body y responde con un agradecimiento. */
export function recibirContacto(req, res) {
    const { nombre = "", correo = "", mensaje = "" } = req.body ?? {};

    if (!nombre.trim() || !correo.trim() || !mensaje.trim()) {
        return res.status(400).send("Faltan datos del formulario. <a href=\"/\">Volver</a>");
    }

    console.log("Nuevo mensaje de contacto:", { nombre, correo, mensaje });

    res.render("gracias", { nombre, correo, mensaje });
}
