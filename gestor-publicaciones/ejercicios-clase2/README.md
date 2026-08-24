# Ejercicios Clase 2

## Ejercicio 3
Dependencia: Pedido y Cupón, porque el cupón se recibe como parámetro en aplicarCupon() y no se guarda como atributo del Pedido.

## Ejercicio 4
Asociación: LocalDeHelados y Pedido, porque el local guarda los pedidos en un array interno.
Asociación: Pedido y Cliente, porque cada Pedido mantiene una referencia al objeto Cliente asociado.

## Ejercicio 5
Asociación: Reserva y Restaurante, porque Reserva mantiene una referencia al objeto Restaurante asociado. Al usar un objeto se conserva más información que guardando solamente el nombre como string.

## Ejercicio 9
Asociación: Publicacion y Resenia, porque cada publicación guarda varias reseñas en su array interno.
Dependencia: Publicacion y ServicioDeEmail, porque el servicio se recibe como parámetro, se utiliza para enviar el resumen y no se guarda.

## Ejercicio 10
Asociación: RepositorioPublicaciones y Publicacion, porque el repositorio mantiene las publicaciones en un array interno.