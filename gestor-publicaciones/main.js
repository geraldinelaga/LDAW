import Publicacion from "./publicacion.js";

const publicaciones = [
    new Publicacion(
        "Busco compañero Proyecto",
        "Busco compañero para proyecto de LDAW",
        "Juan Pérez"
    ),

    new Publicacion(
        "Se ofrece ayuda con Node.js",
        "Si necesitas ayuda con Node.js, puedo ayudarte",
        "María López"
    ),

    new Publicacion(
        "Resumen examen final LDAW",
        "Resumen del examen final de LDAW",
        "Carlos García"
    ),

    new Publicacion(
        "Rifa recaudar fondos",
        "Se realiza una rifa para recaudar fondos para el proyecto final",
        "Ana Fernández"
    ),
];

publicaciones[2].activa = false;

//recorrer e imprimir cada publicación

console.log("PUBLICACIONES");
console.log("=====================");

for (const publicacion of publicaciones) {
    console.log(publicacion.mostrarResumen());
    console.log(`Activa: ${publicacion.estaActiva()}`);
}

const p = new Publicacion(
    "Musica para estudiar",
    "Una selección de música para estudiar y concentrarse",
    "Laura Martínez"
);

p.activa = false;

publicaciones.push(p);

// Contar publicaciones activas

console.log("=====================");
const activas = publicaciones.filter((p) => p.estaActiva());

console.log("Publicaciones activas:", activas.length);

//Imprimir titulos de publicaciones activas

console.log("=====================");

console.log("Títulos de publicaciones activas:");

for (const p of activas) {
  console.log(p.titulo);
}

// Verificación: modificar solo una publicación.
console.log("=====================");
console.log("VERIFICACIÓN");
console.log("=====================");
publicaciones[0].titulo = "NUEVO TITULO";

console.log(publicaciones[0].mostrarResumen());
console.log(publicaciones[1].mostrarResumen());


const publicacionesJSON = JSON.stringify(publicaciones, null, 2);
console.log(publicacionesJSON);
// JSON.stringify convierte los objetos a texto JSON.
// Los métodos no se guardan porque JSON representa datos, no funciones.