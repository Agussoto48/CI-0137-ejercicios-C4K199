/*
   CURRÍCULUM - INTERACTIVIDAD
   Se carga con <script defer>, así que el DOM ya está listo al ejecutarse.
*/

"use strict";

/* ---------- Contenedores del HTML ---------- */
const contenedores = {
    contacto: document.getElementById("lista-contacto"),
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

/* Enlaces de contacto. "etiqueta" es opcional y se muestra antes del enlace;
   "externo" abre el enlace en otra pestaña. */
const contacto = [
    { etiqueta: "Correo", texto: "agustinsc0903@gmail.com", href: "mailto:agustinsc0903@gmail.com" },
    { etiqueta: "Teléfono", texto: "+506 6196-7784", href: "tel:+50661967784" },
    { texto: "GitHub", href: "https://github.com/agussoto48", externo: true },
    { texto: "LinkedIn", href: "https://www.linkedin.com/in/agust%C3%ADn-soto-chaves-561786418/", externo: true },
];

/* Experiencia, formación y certificaciones comparten la misma forma:
   { titulo, subtitulo?, fecha?, descripcion?, logros? }
   Los campos opcionales que no estén se omiten al pintar. */
const experiencia = [
    {
        titulo: "ARCoSLab",
        descripcion: "Proyecto de investigación en robótica enfocado en el control intuitivo de robots utilizando Apple Vision Pro, ROS 2, MQTT, MuJoCo y manipuladores robóticos.",
        logros: [
            "Trabajo con sistemas de teleoperación y seguimiento de manos.",
            "Integración de entradas de Vision Pro con control robótico simulado.",
            "Uso de Jetson AGX Orin y entornos de desarrollo para robótica.",
        ],
    },
    {
        titulo: "Digivice.io",
        descripcion: "Juego multijugador basado en navegador, enfocado en tecnologías web, diseño de software, prototipado de interfaces y trabajo colaborativo con Git.",
    },
    {
        titulo: "POS Coffee Shop Kiosk",
        descripcion: "Sistema de punto de venta desarrollado en Python para un curso de diseño de software, aplicando programación orientada a objetos y principios de diseño de software.",
    },
    {
        titulo: "Proyecto Integrador: Ingeniería de Software y Bases de Datos",
        descripcion: "Proyecto académico que combina prácticas de ingeniería de software con modelado de bases de datos relacionales y diseño de sistemas.",
    },
    {
        titulo: "Proyecto Integrador: Sistemas Operativos y Redes",
        descripcion: "Proyecto enfocado en conceptos de sistemas operativos, comunicación por redes y desarrollo de software a bajo nivel.",
    },
    {
        titulo: "Proyecto Integrador: Arquitectura de Computadores y Ensamblador",
        descripcion: "Aplicación de bajo nivel desarrollada utilizando lenguaje ensamblador y fundamentos de arquitectura de computadores.",
    },
];

const formacion = [
    {
        titulo: "Universidad de Costa Rica",
        subtitulo: "Bachillerato en Computación e Informática",
        fecha: "Marzo 2024 - Actualidad",
        descripcion: "Formación enfocada en programación, estructuras de datos, algoritmos, arquitectura de computadores, sistemas operativos, redes y desarrollo de software.",
    },
    {
        titulo: "Bachillerato Internacional",
        subtitulo: "Diploma Bilingüe del Bachillerato Internacional (IB)",
        fecha: "Febrero 2022 - Noviembre 2023",
        descripcion: "Programa académico bilingüe con formación avanzada en inglés y español, siguiendo estándares internacionales.",
    },
];

const certificaciones = [
    {
        titulo: "Cambridge English: C1 Advanced (CAE)",
        subtitulo: "Cambridge English",
        fecha: "Emitido en enero de 2024",
    },
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

function crearContacto(medio) {
    const item = document.createElement("li");

    if (medio.etiqueta) {
        item.appendChild(document.createTextNode(`${medio.etiqueta}: `));
    }

    const enlace = crearElemento("a", medio.texto);
    enlace.href = medio.href;

    if (medio.externo) {
        enlace.target = "_blank";
        enlace.rel = "noopener";
    }

    item.appendChild(enlace);
    return item;
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

/* Arma un <article> con los campos que tenga el objeto,
   en el mismo orden y con las mismas clases que usa el CSS. */
function crearArticulo(item) {
    const articulo = document.createElement("article");
    articulo.appendChild(crearElemento("h3", item.titulo));

    if (item.subtitulo) {
        articulo.appendChild(crearElemento("p", item.subtitulo));
    }

    if (item.fecha) {
        const fecha = crearElemento("p", item.fecha);
        fecha.className = "fecha";
        articulo.appendChild(fecha);
    }

    if (item.descripcion) {
        articulo.appendChild(crearElemento("p", item.descripcion));
    }

    if (item.logros) {
        const lista = document.createElement("ul");
        renderizarLista(lista, item.logros, (logro) => crearElemento("li", logro));
        articulo.appendChild(lista);
    }

    return articulo;
}

/* ---------- Tema claro / oscuro ---------- */
const raiz = document.documentElement;
const botonTema = document.getElementById("boton-tema");
const sistemaOscuro = window.matchMedia("(prefers-color-scheme: dark)");
const CLAVE_TEMA = "tema";
const TEMAS_VALIDOS = ["claro", "oscuro"];

/* localStorage puede lanzar errores si el navegador bloquea el almacenamiento;
   en ese caso la página sigue funcionando, solo que sin recordar el tema. */
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

/* Tema visible: el elegido con el botón (data-tema) o, si no hay,
   el del sistema operativo. */
function obtenerTemaActual() {
    if (raiz.dataset.tema) {
        return raiz.dataset.tema;
    }
    return sistemaOscuro.matches ? "oscuro" : "claro";
}

/* El botón indica con aria-pressed si el modo oscuro está activo. */
function actualizarBoton() {
    const oscuro = obtenerTemaActual() === "oscuro";
    botonTema.setAttribute("aria-pressed", String(oscuro));
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

/* ---------- Inicio ---------- */
/* Si hay un tema guardado de una visita anterior, se aplica. */
const temaGuardado = leerTemaGuardado();
if (temaGuardado) {
    aplicarTema(temaGuardado);
} else {
    actualizarBoton();
}

renderizarLista(contenedores.contacto, contacto, crearContacto);
renderizarLista(contenedores.experiencia, experiencia, crearArticulo);
renderizarLista(contenedores.formacion, formacion, crearArticulo);
renderizarLista(contenedores.certificaciones, certificaciones, crearArticulo);
renderizarLista(contenedores.habilidadesTecnicas, habilidadesTecnicas, crearChip);
renderizarLista(contenedores.habilidadesBlandas, habilidadesBlandas, crearChip);
renderizarLista(contenedores.idiomas, idiomas, crearFilaIdioma);

botonTema.addEventListener("click", alternarTema);
/* Si el sistema cambia de tema mientras no hay uno elegido, el botón se sincroniza. */
sistemaOscuro.addEventListener("change", actualizarBoton);
