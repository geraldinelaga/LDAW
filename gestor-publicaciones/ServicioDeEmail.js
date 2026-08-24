class ServicioDeEmail {
    enviar(destinatario, mensaje) {
        console.log(`Enviando email a ${destinatario}:${mensaje}`)
    }
}

export default ServicioDeEmail;

// Publicacion tiene una dependencia con ServicioDeEmail porque recibe el servicio como parámetro y lo utiliza para enviar el resumen, pero no lo guarda como atributo.