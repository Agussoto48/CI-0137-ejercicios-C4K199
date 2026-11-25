/*
   TEMA CLARO / OSCURO
   El contenido del CV ahora lo arma el servidor con EJS;
   en el navegador solo queda el botón de tema.
*/

"use strict";

const raiz = document.documentElement;
const botonTema = document.getElementById("boton-tema");
const sistemaOscuro = window.matchMedia("(prefers-color-scheme: dark)");
const CLAVE_TEMA = "tema";
const TEMAS_VALIDOS = ["claro", "oscuro"];

function leerTemaGuardado() {
    try {
        const tema = localStorage.getItem(CLAVE_TEMA);
        return TEMAS_VALIDOS.includes(tema) ? tema : null;
    } catch {
        return null;
    }
}

function guardarTema(tema) {
    try {
        localStorage.setItem(CLAVE_TEMA, tema);
    } catch {
        /* Sin almacenamiento disponible: el tema solo dura esta visita. */
    }
}

function obtenerTemaActual() {
    if (raiz.dataset.tema) {
        return raiz.dataset.tema;
    }
    return sistemaOscuro.matches ? "oscuro" : "claro";
}

function actualizarBoton() {
    if (botonTema) {
        botonTema.setAttribute("aria-pressed", String(obtenerTemaActual() === "oscuro"));
    }
}

function aplicarTema(tema) {
    raiz.dataset.tema = tema;
    actualizarBoton();
}

function alternarTema() {
    const siguiente = obtenerTemaActual() === "oscuro" ? "claro" : "oscuro";
    aplicarTema(siguiente);
    guardarTema(siguiente);
}

const temaGuardado = leerTemaGuardado();
if (temaGuardado) {
    aplicarTema(temaGuardado);
} else {
    actualizarBoton();
}

if (botonTema) {
    botonTema.addEventListener("click", alternarTema);
}
sistemaOscuro.addEventListener("change", actualizarBoton);
