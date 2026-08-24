class Resenia {
    constructor(texto, puntaje, autor) {
        this.texto = texto;
        this.puntaje = puntaje;
        this.autor = autor; // objeto usuario
    }
}

export default Resenia;

// Publicacion tiene una asociación con Resenia porque una publicación puede tener muchas reseñas y estas quedan guardadas en el array interno resenias de la publicación.