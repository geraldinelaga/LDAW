import Publicacion from "./publicacion.js";
import Usuario from "./usuario.js";
import RepositorioPublicaciones from "./RepositorioPublicaciones.js";
import PublicacionVenta from "./PublicacionVenta.js";
import PublicacionServicio from "./PublicacionServicio.js";
import { validarPublicacion } from "./validarPublicacion.js";

console.log("=== 1. CREACIÓN DE USUARIOS Y AUTO-ASOCIACIÓN ===");
const usuarios = [
  new Usuario("Juan Pérez", "juan.perez@example.com"),
  new Usuario("Maria López", "maria.lopez@example.com"),
  new Usuario("Carlos García", "carlos.garcia@example.com"),
];

// Juan agrega a María y a Carlos a su lista de contactos
usuarios[0].agregarContacto(usuarios[1]);
usuarios[0].agregarContacto(usuarios[2]);
console.log(`Contactos de ${usuarios[0].nombre}:`, usuarios[0].contactos.map(c => c.nombre));


console.log("\n=== 2. CREACIÓN DE PUBLICACIONES (ROLES) ===");
// Usamos las instancias del array 'usuarios' para mantener la asociación correcta
const publicaciones = [
  new PublicacionVenta(
    "Apuntes de LDAW",
    "Apuntes completos",
    usuarios[0], // Autor
    5000
  ),
  new PublicacionServicio(
    "Clases de Node.js",
    "Clases particulares",
    usuarios[1], // Autor
    "Virtual",
    120,
    usuarios[2]  // Cliente (Parte 2.5)
  )
];


console.log("\n=== 3. VALIDACIÓN Y DEPENDENCIA ===");
const repositorio = new RepositorioPublicaciones();


const reglasDeValidacion = {
  minTitulo: 5,
  ventasMinimas: 1 
};

publicaciones.forEach(pub => {
  // Simulamos el atributo ventas para que pase tu validación
  pub.ventas = 5; 

  // Usamos la dependencia (reglasDeValidacion)
  if (validarPublicacion(pub, reglasDeValidacion)) {
    repositorio.agregar(pub);
    console.log(`✅ Publicación agregada con éxito: ${pub.titulo}`);
  } else {
    console.log(`❌ La publicación no cumple las reglas: ${pub.titulo}`);
  }
});


console.log("\n=== 4. MÉTODOS POLIMÓRFICOS EN REPOSITORIO ===");

// Probamos listarResumenes() (Debería usar .map internamente)
console.log("Resúmenes en el repositorio:");
console.log(repositorio.listarResumenes());

// Probamos filtrarPorTipo() pasándole la clase constructora
const soloVentas = repositorio.filtrarPorTipo(PublicacionVenta);
const soloServicios = repositorio.filtrarPorTipo(PublicacionServicio);

console.log(`Cantidad de ventas: ${soloVentas.length}`);
console.log(`Cantidad de servicios: ${soloServicios.length}`);