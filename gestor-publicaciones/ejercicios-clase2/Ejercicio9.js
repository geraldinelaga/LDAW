import Publicacion from "../publicacion.js";   
import Usuario from "../usuario.js";   
import Resenia from "../resenia.js";
import ServicioDeEmail from "../ServicioDeEmail.js";

const usuario1 = new Usuario (
    "Juan Pérez",
    "juan.perez@example.com"
);

const usuario2 = new Usuario(
    "María López",
    "maria.lopez@example.com"
);

const publicacion = new Publicacion(
    "Busco compañero Proyecto",
    "Busco compañero para proyecto de LDAW",
    usuario1
);

const resenia1 = new Resenia(
    "Muy buena publicación",
    5,
    usuario2
);

const resenia2 = new Resenia(
    "Me resultó muy útil",
    4,
    usuario1
);

const resenia3 = new Resenia(
    "Está bastante bien explicada",
    3,
    usuario2
);

publicacion.agregarResenia(resenia1);
publicacion.agregarResenia(resenia2);
publicacion.agregarResenia(resenia3);

console.log(publicacion.resenias);

console.log("Promedio:", publicacion.promedioPuntaje());

const servicioDeEmail = new ServicioDeEmail();
publicacion.enviarResumenPorEmail(servicioDeEmail);