import Publicacion from "./publicacion.js";

//PublicacionVenta hereda de Publicacion => extends
export default class PublicacionVenta extends Publicacion {
    constructor(titulo, descripcion, autor, precio) {
        super(titulo, descripcion, autor);
        this.precio = precio;
    }

    mostrarResumen() {
        const base = super.mostrarResumen();
        return `${base} - $${this.precio}`;

}
}
