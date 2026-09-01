class RepositorioPublicaciones extends EventTarget {
  constructor() {
    super();
    this.publicaciones = [];
  }

  agregar(publicacion) {
    this.publicaciones.push(publicacion);
    this.dispatchEvent(
      new CustomEvent("publicacionAgregada", { detail: publicacion }),
    );
  }

  buscarPorUsuario(nombre) {
    return this.publicaciones.filter((p) => p.autor?.nombre === nombre);
  }

  filtrarActivas() {
    return this.publicaciones.filter((p) => p.estaActiva());
  }

  cantidadTotal() {
    return this.publicaciones.length;
  }

  listarPorTipo(claseConstructor) {
    return this.publicaciones.filter(
      (publicacion) => publicacion instanceof claseConstructor,
    );
  }

  //publicacionMasReciente → forEach porque hay que comparar fechas.
  publicacionMasReciente() {
    let masReciente = this.publicaciones[0];

    this.publicaciones.forEach((publicacion) => {
      if (publicacion.fechaPublicacion > masReciente.fechaPublicacion) {
        masReciente = publicacion;
      }
    });
    return masReciente;
  }

  //cantidadPorUsuario → filter porque quiero contar varios.
  cantidadPorUsuario(nombre) {
    const publicacionesUsuario = this.publicaciones.filter(
      (publicacion) => publicacion.autor?.nombre === nombre,
    );

    return publicacionesUsuario.length;
  }

  //existePublicacionActiva → find porque con encontrar uno alcanza.

  existePublicacionActiva(titulo) {
    const resultado = this.publicaciones.find((publicacion) => {
      return (
        publicacion.estaActiva() &&
        publicacion.titulo.toLowerCase() === titulo.toLowerCase()
      );
    });

    return resultado !== undefined;
  }

  //resumenGeneral → forEach porque quiero recorrer e imprimir los activos.
  resumenGeneral() {
    this.publicaciones.forEach((publicacion) => {
      if (publicacion.estaActiva()) {
        console.log(publicacion.mostrarResumen());
      }
    });
  }

  //Devuelve un array conel mostrarResumen()de cada publicación, usando .map().
  listarResumen() {
    return this.publicaciones.map((publicacion) =>
      publicacion.mostrarResumen(),
    );
  }

  //Devuelve solo las publicaciones que son instancia de una clase recibida.

  filtrarPorTipo(claseConstructor) {
    return this.publicaciones.filter(
      (publicaciones) => publicaciones instanceof claseConstructor,
    );
  }
}

export default RepositorioPublicaciones;
