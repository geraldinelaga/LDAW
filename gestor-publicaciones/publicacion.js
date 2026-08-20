import Usuario from './usuario.js';
class Publicacion {
    constructor(titulo, descripcion, Usuario){
        this.titulo = titulo;
        this.descripcion = descripcion;
        // this.autor = autor;
        this.usuario = Usuario; // pasa de autor (string) a Usuario (objeto)

        // Se guarda automáticamente la fecha y hora de creación
        this.fechaPublicacion = new Date();
        // Toda publicación comienza activa
        this.activa = true;
    }

    mostrarResumen(){
        return `${this.titulo} - ${this.usuario.mostrarPerfil()}`;
    }

    estaActiva(){
        return this.activa;
    }
}

export default Publicacion;