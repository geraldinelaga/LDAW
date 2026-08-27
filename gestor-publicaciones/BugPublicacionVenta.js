import Publicacion from "./publicacion.js";

class BugPublicacionVenta extends Publicacion {
    constructor(titulo, descripcion, autor, precio) {
        this.precio = precio; // <-- algo esta mal acá
        super(titulo, descripcion, autor);
    }

    mostrarResumen() {
        return `${this.titulo} - $${this.precio}`; // <-- y acá
    }
}

//El super debería ir antes del this.precio
//en mostrarResumen() falta llamar a la base. Debería declararse la constante base antes del return, llamando al padre con super.mostrarResumen()
//si Publicacion cambia como arma resúmen algún día no se actualizaría en la clase PublicacionVenta