class RepositorioPublicaciones {
    constructor (){
        this.publicaciones = [];
    }

    agregar(publicacion){
        this.publicaciones.push(publicacion);
    }

    buscarPorUsuario(nombre){
        return this.publicaciones.filter(p => p.usuario.nombre === nombre);
    }

    filtrarActivas(){
        return this.publicaciones.filter(p => p.estaActiva());
    }

    cantidadTotal(){ 
        return this.publicaciones.length;
    }

    //publicacionMasReciente → forEach porque hay que comparar fechas. 
    publicacionMasReciente() {
        let masReciente = this.publicaciones[0];

        this.publicaciones.forEach( publicacion => {
            if (publicacion.fechaPublicacion > masReciente.fechaPublicacion){
                masReciente = publicacion;
            }
        });
        return masReciente;
    }

    //cantidadPorUsuario → filter porque quiero contar varios. 
    cantidadPorUsuario(nombre) {
        const publicacionesUsuario = this.publicaciones.filter(
            publicacion => publicacion.usuario?.nombre === nombre
        );

        return publicacionesUsuario.length;
    }

    //existePublicacionActiva → find porque con encontrar uno alcanza.

    existePublicacionActiva(titulo) {
        const resultado = this.publicaciones.find(publicacion => {
            return publicacion.estaActiva() && 
            publicacion.titulo.toLowerCase() === titulo.toLowerCase();
        });

        return resultado !== undefined;
    }

    //resumenGeneral → forEach porque quiero recorrer e imprimir los activos.
    resumenGeneral() {
        this.publicaciones.forEach(publicacion => {
            if (publicacion.estaActiva()) {
                console.log(publicacion.mostrarResumen());
            }
        });
    }
}

export default RepositorioPublicaciones;

