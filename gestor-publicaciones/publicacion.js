import Usuario from "./usuario.js";
class Publicacion {
  constructor(titulo, descripcion, Usuario) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    // this.autor = autor;
    this.usuario = Usuario; // pasa de autor (string) a Usuario (objeto)

    // Se guarda automáticamente la fecha y hora de creación
    this.fechaPublicacion = new Date();
    // Toda publicación comienza activa
    this.activa = true;

    //Las publicaciones empiezan sin reseña
    this.resenias = [];
  }

  mostrarResumen() {
    return `${this.titulo} - ${this.usuario.mostrarPerfil()}`;
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

    servicioDeEmail.enviar(
        this.usuario.email,
        resumen
    );
    
    //no guardo this.servicioDeEmail = servicioDeEmail, lo uso => servicioDeEmail.enviar(...). Por eso es una dependencia
  }
}



export default Publicacion;
