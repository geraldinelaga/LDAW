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
}

export default RepositorioPublicaciones;

