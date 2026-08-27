export function publicarConDemora(publicacion, callback) {
  console.log("Procesando publicacion..");
  setTimeout(() => {
    callback(publicacion);
  }, 3000);
}
