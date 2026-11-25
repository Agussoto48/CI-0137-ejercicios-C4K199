/*
   DATOS DEL CURRÍCULUM
   Los mismos arreglos del ejercicio de JavaScript, ahora del lado del servidor.
   La vista EJS los recibe y los recorre para armar el HTML.
*/

const curriculum = {
    nombre: "Agustín Soto",
    subtitulo: "Estudiante de Computación con varios Énfasis",
    foto: "/img/FotoCurriculum.jpg",

    perfil:
        "Soy estudiante de Computación con varios Énfasis en la Universidad de Costa Rica " +
        "con interés en el desarrollo de software, las bases de datos y las nuevas tecnologías. " +
        "Me gusta aprender constantemente y participar en proyectos que me permitan aplicar " +
        "y fortalecer mis conocimientos técnicos.",

    /* "etiqueta" es opcional; "externo" abre el enlace en otra pestaña. */
    contacto: [
        { etiqueta: "Correo", texto: "agustinsc0903@gmail.com", href: "mailto:agustinsc0903@gmail.com" },
        { etiqueta: "Teléfono", texto: "+506 6196-7784", href: "tel:+50661967784" },
        { texto: "GitHub", href: "https://github.com/agussoto48", externo: true },
        { texto: "LinkedIn", href: "https://www.linkedin.com/in/agust%C3%ADn-soto-chaves-561786418/", externo: true },
    ],

    /* Experiencia, formación y certificaciones comparten la forma
       { titulo, subtitulo?, fecha?, descripcion?, logros? } */
    experiencia: [
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
    ],

    formacion: [
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
    ],

    certificaciones: [
        {
            titulo: "Cambridge English: C1 Advanced (CAE)",
            subtitulo: "Cambridge English",
            fecha: "Emitido en enero de 2024",
        },
    ],

    habilidadesTecnicas: [
        "Python", "C++", "Java", "JavaScript", "HTML", "CSS", "SQL", "MySQL",
        "Git y GitHub", "Linux", "Docker", "Figma", "Modelado de bases de datos",
    ],

    habilidadesBlandas: [
        "Trabajo en equipo", "Comunicación", "Resolución de problemas", "Aprendizaje continuo",
    ],

    idiomas: [
        { idioma: "Español", nivel: "Nativo" },
        { idioma: "Inglés", nivel: "C1" },
    ],
};

export default curriculum;
