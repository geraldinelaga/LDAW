import Usuario from "./usuario.js";
class Publicacion {
  constructor(titulo, descripcion, autor) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.autor = autor;

    // Se guarda automáticamente la fecha y hora de creación
    this.fechaPublicacion = new Date();
    // Toda publicación comienza activa
    this.activa = true;

    //Las publicaciones empiezan sin reseña
    this.resenias = [];
  }

  mostrarResumen() {
    return `${this.titulo} - ${this.autor.mostrarPerfil()}`;
  }

  estaActiva() {
    return this.activa;
  }

  agregarResenia(resenia) {
    this.resenias.push(resenia);
  }

  promedioPuntaje() {
    if (this.resenias.length === 0) {
      return 0;
    }

    let suma = 0;

    this.resenias.forEach((resenia) => {
      suma += resenia.puntaje;
    });

    return suma / this.resenias.length;
  }

  enviarResumenPorEmail(servicioDeEmail) {
    const resumen = this.mostrarResumen();

    servicioDeEmail.enviar(this.autor.email, resumen);
  }

  diasPublicada() {
    const ms = new Date() - this.fechaPublicacion;
    return Math.floor(ms / (1000 * 60 * 60 * 24)); //la operación lo pasa a días y el floor redondea para abajo.
  }

  darDeBaja() {
    this.activa =false;
  }
}

export default Publicacion;
