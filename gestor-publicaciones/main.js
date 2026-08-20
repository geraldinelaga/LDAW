import Publicacion from "./publicacion.js";
import Usuario from "./usuario.js";
import RepositorioPublicaciones from "./RepositorioPublicaciones.js";

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

console.log("Publicaciones:");
console.log("================================");

publicaciones.forEach(publicacion => {
    console.log(publicacion.mostrarResumen());
});

publicaciones[1].activa = false;

console.log("================================");

const publicacionesActivas = publicaciones.filter(publicacion => publicacion.estaActiva());

console.log("Publicaciones activas:" + publicacionesActivas.length);

console.log("================================");

const primeraPublicacion = publicaciones.find(publicacion => publicacion.usuario.nombre === "Juan Pérez");
if (primeraPublicacion) {
    console.log("Primera publicación de Juan Pérez: " + primeraPublicacion.mostrarResumen());
}

const repositorio = new RepositorioPublicaciones();

repositorio.agregar(publicaciones[0]);
repositorio.agregar(publicaciones[1]);
repositorio.agregar(publicaciones[2]);
repositorio.agregar(publicaciones[3]);

console.log("================================");

const publicacionesDeJuan = repositorio.buscarPorUsuario("Juan Pérez");
console.log("Publicaciones de Juan Pérez:" + publicacionesDeJuan.length);


const publicacionesDeMaria = repositorio.buscarPorUsuario("Maria López");
console.log("Publicaciones de Maria López:" + publicacionesDeMaria.length);

const publicacionesDeCarlos = repositorio.buscarPorUsuario("Carlos García");
console.log("Publicaciones de Carlos García:" + publicacionesDeCarlos.length);

console.log("================================");

const publicacionesActivasRepositorio = repositorio.filtrarActivas();
console.log("Total de publicaciones activas en el repositorio:" + publicacionesActivasRepositorio.length);

console.log("================================");

const totalPublicacionesRepositorio = repositorio.cantidadTotal();
console.log("Total de publicaciones en el repositorio:" + totalPublicacionesRepositorio);

