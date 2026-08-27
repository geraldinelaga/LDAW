import Publicacion from "./publicacion.js";
import Usuario from "./usuario.js";
import RepositorioPublicaciones from "./RepositorioPublicaciones.js";
import PublicacionVenta from "./PublicacionVenta.js";
import PublicacionServicio from "./PublicacionServicio.js";
import { publicarConDemora } from "./publicarConDemora.js";

const usuarios = [
  new Usuario("Juan Pérez", "juan.perez@example.com"),
  new Usuario("Maria López", "maria.lopez@example.com"),
  new Usuario("Carlos García", "carlos.garcia@example.com"),
];

const publicaciones = [
  new PublicacionVenta(
    "Apuntes de LDAW",
    "Apuntes completos para preparar el examen de LDAW",
    new Usuario("Juan Pérez", "juan.perez@example.com"),
    5000,
  ),

  new PublicacionServicio(
    "Clases de Node.js",
    "Clases particulares de Node.js",
    new Usuario("María López", "maria.lopez@example.com"),
    3000,
  ),

  new PublicacionVenta(
    "Resumen examen final LDAW",
    "Resumen del examen final de LDAW",
    new Usuario("Carlos García", "carlos.garcia@example.com"),
    4000,
  ),

  new PublicacionServicio(
    "Ayuda con proyecto de LDAW",
    "Ayuda para realizar el proyecto final",
    new Usuario("Juan Pérez", "juan.perez@example.com"),
    "Presencial",
  ),
];
console.log("Publicaciones:");
console.log("================================");

publicaciones.forEach((publicacion) => {
  console.log(publicacion.mostrarResumen());
});

publicaciones[1].activa = false;

console.log("================================");

const publicacionesActivas = publicaciones.filter((publicacion) =>
  publicacion.estaActiva(),
);

console.log("Publicaciones activas:" + publicacionesActivas.length);

console.log("================================");

const primeraPublicacion = publicaciones.find(
  (publicacion) => publicacion.usuario.nombre === "Juan Pérez",
);
if (primeraPublicacion) {
  console.log(
    "Primera publicación de Juan Pérez: " + primeraPublicacion.mostrarResumen(),
  );
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
console.log(
  "Total de publicaciones activas en el repositorio:" +
    publicacionesActivasRepositorio.length,
);

console.log("================================");

const totalPublicacionesRepositorio = repositorio.cantidadTotal();
console.log(
  "Total de publicaciones en el repositorio:" + totalPublicacionesRepositorio,
);

publicaciones.forEach((p) => {
  console.log(p instanceof Publicacion);
});

console.log("================================");

const publicacionesVenta = repositorio.listarPorTipo(PublicacionVenta);

console.log("Publicaciones de venta:", publicacionesVenta);

const publicacionesServicio = repositorio.listarPorTipo(PublicacionServicio);

console.log("Publicaciones de servicio:", publicacionesServicio);

console.log("================================");

publicaciones.forEach((publicacion) => {
  console.log(publicacion instanceof Publicacion);
});

publicaciones.forEach((p) => {
  console.log(p.mostrarResumen()); // polimorfismo : cada p responde distinto
});

// Le pasás la clase en sí (ej: PublicacionVenta), NO un string ("PublicacionVenta")
const soloVentas = repositorio.filtrarPorTipo(PublicacionVenta);
const soloServicios = repositorio.filtrarPorTipo(PublicacionServicio);

console.log("Ventas:", soloVentas);
console.log("Servicios:", soloServicios);

//Listeners

const repositorioListener = new RepositorioPublicaciones();

repositorioListener.on("publicacionAgregada", (publicacion) => {
  console.log(`[Listener 1] ¡Nueva Publicacion!: ${publicacion.titulo}`);
});

repositorioListener.on("publicacionAgregada", () => {
  const fecha = new Date().toLocaleTimeString();
  console.log(`[Listener 2] ¡Publicación agregada al sistema el ${fecha}`);
});

repositorioListener.agregar({ titulo: "Mi primera publicación" });

console.log("Publicando...");

publicarConDemora({ titulo: "Post asincrónico" }, () => {
  console.log("Callback se ejecutó, publicación lista!");
});

console.log("Fin. (no esperó el Timeout");

function publicacionConDemoraAsync(publicacion) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(publicacion);
    }, 2000);
  });
}

async function main() {
  const publicacion = await publicacionConDemoraAsync(publicaciones[3]);
  repositorio.agregar(publicacion);
  console.log("Esto se imprime después de la demora")
}

main();
