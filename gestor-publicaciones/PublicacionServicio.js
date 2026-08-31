import Publicacion from "./publicacion.js";

export default class PublicacionServicio extends Publicacion {
  constructor(titulo, descripcion, autor, modalidad, duracionMinutos, cliente = null) {
    super(titulo, descripcion, autor);
    this.modalidad = modalidad;
    this.duracionMinutos = duracionMinutos;
    this.cliente = cliente;
  }

  mostrarResumen() {
    const base = super.mostrarResumen();
    return `${base} (${this.modalidad}, ${this.duracionMinutos}min)`;
  }
}

// El orden de los parámetros en super() debe coincidir con el constructor de Publicacion porque super() llama al constructor de la clase padre y los argumentos se asignan según su posición. Si cambiamos el orden, los valores se guardarían en atributos incorrectos, aunque JavaScript no necesariamente mostraría un error.
