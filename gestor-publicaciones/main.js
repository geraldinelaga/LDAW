import Publicacion from "./publicacion.js";
import Usuario from "./usuario.js";

const usuarios = [
    new Usuario(
        "Juan Pérez",
        "juan.perez@example.com"
    ),
     new Usuario(
        "Maria López",
        "maria.lopez@example.com"
     ),
     new Usuario(
        "Carlos García",
        "carlos.garcia@example.com"
     )
]

const publicaciones = [
    new Publicacion(
        "Busco compañero Proyecto",
        "Busco compañero para proyecto de LDAW",
        new Usuario("Juan Pérez", "juan.perez@example.com") // el autor ahora es un objeto Usuario
    ),

    new Publicacion(
        "Se ofrece ayuda con Node.js",
        "Si necesitas ayuda con Node.js, puedo ayudarte",
        new Usuario("María López", "maria.lopez@example.com")
    ),

    new Publicacion(
        "Resumen examen final LDAW",
        "Resumen del examen final de LDAW",
        new Usuario("Carlos García", "carlos.garcia@example.com")
    ),

    new Publicacion(
        "Rifa recaudar fondos",
        "Se realiza una rifa para recaudar fondos para el proyecto final",
        new Usuario("Juan Pérez", "juan.perez@example.com")
    ),
];

publicaciones.forEach(publicacion => {
    console.log(publicacion.mostrarResumen());
});

const publicacionesActivas = publicaciones.filter(publicacion => publicacion.estaActiva());

console.log("Publicaciones activas:" + publicacionesActivas.length);

const primeraPublicacion = publicaciones.find(publicacion => publicacion.usuario.nombre === "Juan Pérez");
if (primeraPublicacion) {
    console.log("Primera publicación de Juan Pérez: " + primeraPublicacion.mostrarResumen());
}


