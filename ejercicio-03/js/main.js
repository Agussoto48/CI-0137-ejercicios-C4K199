/*
   CURRÍCULUM - INTERACTIVIDAD
   Se carga con <script defer>, así que el DOM ya está listo al ejecutarse.
*/

"use strict";

/* ---------- Contenedores del HTML ---------- */
const contenedores = {
    experiencia: document.getElementById("experiencia"),
    formacion: document.getElementById("formacion"),
    certificaciones: document.getElementById("certificaciones"),
    habilidadesTecnicas: document.getElementById("habilidades-tecnicas"),
    habilidadesBlandas: document.getElementById("habilidades-blandas"),
    idiomas: document.getElementById("idiomas"),
};

/* ---------- Datos del CV ---------- */
const habilidadesTecnicas = [
    { nombre: "Python" },
    { nombre: "C++" },
    { nombre: "Java" },
    { nombre: "JavaScript" },
    { nombre: "HTML" },
    { nombre: "CSS" },
    { nombre: "SQL" },
    { nombre: "MySQL" },
    { nombre: "Git y GitHub" },
    { nombre: "Linux" },
    { nombre: "Docker" },
    { nombre: "Figma" },
    { nombre: "Modelado de bases de datos" },
];

const habilidadesBlandas = [
    { nombre: "Trabajo en equipo" },
    { nombre: "Comunicación" },
    { nombre: "Resolución de problemas" },
    { nombre: "Aprendizaje continuo" },
];

const idiomas = [
    { idioma: "Español", nivel: "Nativo" },
    { idioma: "Inglés", nivel: "C1" },
];

/* ---------- Funciones de renderizado ---------- */

/* Crea un elemento con su texto. */
function crearElemento(etiqueta, texto) {
    const elemento = document.createElement(etiqueta);
    elemento.textContent = texto;
    return elemento;
}

/* Recorre un arreglo, crea un elemento por cada objeto
   y los agrega al contenedor de una sola vez. */
function renderizarLista(contenedor, datos, crearItem) {
    const fragmento = document.createDocumentFragment();

    for (const dato of datos) {
        fragmento.appendChild(crearItem(dato));
    }

    contenedor.appendChild(fragmento);
}

function crearChip(habilidad) {
    return crearElemento("li", habilidad.nombre);
}

function crearFilaIdioma(registro) {
    const fila = document.createElement("tr");
    fila.appendChild(crearElemento("td", registro.idioma));
    fila.appendChild(crearElemento("td", registro.nivel));
    return fila;
}

/* ---------- Inicio ---------- */
renderizarLista(contenedores.habilidadesTecnicas, habilidadesTecnicas, crearChip);
renderizarLista(contenedores.habilidadesBlandas, habilidadesBlandas, crearChip);
renderizarLista(contenedores.idiomas, idiomas, crearFilaIdioma);
