class Publicacion {
    constructor(titulo, descripcion, autor){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.autor = autor;

        // Se guarda automáticamente la fecha y hora de creación
        this.fechaPublicacion = new Date();
        // Toda publicación comienza activa
        this.activa = true;
    }

    mostrarResumen(){
        return `${this.titulo} - ${this.autor}`;
    }

    estaActiva(){
        return this.activa;
    }
}

export default Publicacion;