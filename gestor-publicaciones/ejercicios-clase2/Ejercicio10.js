import Publicacion from "../public/js/publicacion.js";
import Usuario from "../public/js/usuario.js";
import RepositorioPublicaciones from "../public/js/RepositorioPublicaciones.js";

const usuario1 = new Usuario("Juan Pérez", "juan.perez@example.com");

const usuario2 = new Usuario("María López", "maria.lopez@example.com");

const publicacion1 = new Publicacion(
  "Busco compañero Proyecto",
  "Busco compañero para proyecto",
  usuario1,
);

const publicacion2 = new Publicacion(
  "Se ofrece ayuda con Node.js",
  "Puedo ayudarte con Node.js",
  usuario2,
);

const publicacion3 = new Publicacion(
  "Resumen examen LDAW",
  "Resumen del examen",
  usuario1,
);

const repositorio = new RepositorioPublicaciones();

repositorio.agregar(publicacion1);
repositorio.agregar(publicacion2);
repositorio.agregar(publicacion3);

console.log("Publicación más reciente:");
console.log(repositorio.publicacionMasReciente());

console.log("--------------------");

console.log("Publicaciones de Juan:");
console.log(repositorio.cantidadPorUsuario("Juan Pérez"));

console.log("--------------------");

console.log("¿Existe la publicación?");
console.log(repositorio.existePublicacionActiva("Busco compañero Proyecto"));

console.log("--------------------");

console.log("Resumen general:");
repositorio.resumenGeneral();
