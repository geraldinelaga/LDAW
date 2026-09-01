class Usuario {
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
        this.fechaRegistro = new Date();
        this.contactos = [];
    }

    mostrarPerfil(){
        return `${this.nombre} - ${this.email}`;
    }

    agregarContacto(otroUsuario) {
        this.contactos.push(otroUsuario);
    }
}

export default Usuario;