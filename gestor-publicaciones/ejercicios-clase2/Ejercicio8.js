import Publicacion from "../public/js/publicacion.js";
import Usuario from "../public/js/usuario.js";

const publicaciones = [
  new Publicacion(
    "Busco compañero Proyecto",
    "Busco compañero para proyecto de LDAW",
    new Usuario("Juan Pérez", "juan.perez@example.com"),
  ),

  new Publicacion(
    "Se ofrece ayuda con Node.js",
    "Si necesitas ayuda con Node.js, puedo ayudarte",
    new Usuario("María López", "maria.lopez@example.com"),
  ),

  new Publicacion(
    "Resumen examen final LDAW",
    "Resumen del examen final de LDAW",
    new Usuario("Carlos García", "carlos.garcia@example.com"),
  ),
];

function buscarPublicacionPorTitulo(publicaciones, tituloBuscado) {
  return publicaciones.find((publicacion) => {
    return publicacion.titulo.toLowerCase() === tituloBuscado.toLowerCase();
  });
}

const resultado = buscarPublicacionPorTitulo(
  publicaciones,
  "BUSCO COMPAÑERO PROYECTO",
);

console.log(resultado);

const resultado2 = buscarPublicacionPorTitulo(
  publicaciones,
  "No existe este titulo",
);

if (resultado2) {
  console.log(resultado2);
} else {
  console.log("No se encontró ninguna publicación con ese título");
}
