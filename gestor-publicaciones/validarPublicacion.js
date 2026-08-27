export function validarPublicacion(publicacion, reglas){
    if (publicacion.titulo || publicacion.titulo.length !== reglas.minTitulo) {
        return false;
    }

    if (publicacion.ventas <= 0) {
        return false;
    }

return true;
}