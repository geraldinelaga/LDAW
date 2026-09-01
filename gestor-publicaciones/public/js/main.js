import Publicacion from "./publicacion.js";
import Usuario from "./usuario.js";
import RepositorioPublicaciones from "./RepositorioPublicaciones.js";
import PublicacionVenta from "./PublicacionVenta.js";
import PublicacionServicio from "./PublicacionServicio.js";
import { validarPublicacion } from "./validarPublicacion.js";

//PRACTICA 8

const titulo = document.querySelector("#titulo");
const descripcion = document.querySelector("#descripcion");
const tipo = document.querySelector("#tipo");
const autor = document.querySelector("#autor");
const email = document.querySelector("#email");
const vistaPrevia = document.querySelector("#vista-previa");
const camposEspecificos = document.querySelector("#campos-especificos");
const ayudaEmail = document.querySelector("#ayuda-email");
const listaPublicaciones = document.querySelector("#lista-publicaciones");
const publicaciones = [];
const formulario = document.querySelector("#form-publicacion");

function observarEvento(evento) {
  console.table({
    type: evento.type,
    target: evento.target.id,
    currentTarget: evento.currentTarget.id,
    timeStamp: Math.round(evento.timeStamp),
  });
}

function actualizarVistaPrevia() {
  const nombre = autor.value || "Autor";
  const texto = titulo.value || "Sin título";
  vistaPrevia.textContent = `${texto} — ${nombre} (${tipo.value})`;
}

function actualizarCamposEspecificos() {
  if (tipo.value === "venta") {
    camposEspecificos.innerHTML = `
  <input id="precio" type="number" placeholder="Precio">
  <input id="stock" type="number" value="1">`;
  } else {
    camposEspecificos.innerHTML = `
  <select id="modalidad">
    <option>Presencial</option>
    <option>Virtual</option>
    </select>
    <input id="duracion" type="number" placeholder="Minutos">`;
  }
}

function mostrarAyudaEmail() {
  ayudaEmail.textContent = "Usá un email válido del autor";
}
function ocultarAyudaEmail() {
  ayudaEmail.textContent = "";
}

function crearPublicacionDesdeFormulario() {
  const usuario = new Usuario(autor.value, email.value);

  if (tipo.value === "venta") {
    return new PublicacionVenta(
      titulo.value,
      descripcion.value,
      usuario,
      Number(document.querySelector("#precio").value),
    );
  }

  const modalidad = document.querySelector("#modalidad")?.value || "Presencial";
  const duracion = Number(document.querySelector("#duracion").value);

  return new PublicacionServicio(
    titulo.value,
    descripcion.value,
    usuario,
    modalidad,
    duracion,
  );
}

function agregarTarjeta(publicacion) {
  // 1. Crear el contenedor de la tarjeta
  const tarjeta = document.createElement("article");
  tarjeta.classList.add("tarjeta-publicacion");

  // 2. Crear el elemento de texto usando mostrarResumen() (Polimorfismo)
  const info = document.createElement("p");
  info.textContent = publicacion.mostrarResumen();

  // 3. Crear el estado de la publicación
  const estado = document.createElement("span");
  estado.textContent = publicacion.activa ? "Activa" : "Inactiva";

  // 4. Crear el botón de dar de baja
  const boton = document.createElement("button");
  boton.textContent = "Dar de baja";
  boton.disabled = !publicacion.activa;

  // 5. Registrar el evento click sobre el botón (Parte 7)
  function manejarBaja(evento) {
    console.log(evento.type, evento.target);
    publicacion.darDeBaja(); // Llama al método del dominio
    estado.textContent = "Inactiva";
    boton.disabled = true;
  }

  boton.addEventListener("click", manejarBaja);

  // 6. Enmendar (append) los elementos a la tarjeta y luego a la lista
  tarjeta.appendChild(info);
  tarjeta.appendChild(estado);
  tarjeta.appendChild(boton);

  listaPublicaciones.appendChild(tarjeta);
}

function renderizar() {
  listaPublicaciones.replaceChildren();
  publicaciones.forEach((publicacion) => agregarTarjeta(publicacion));
}

function manejarEnvio(evento) {
  evento.preventDefault();
  const publicacion = crearPublicacionDesdeFormulario();
  publicaciones.push(publicacion);
  agregarTarjeta(publicacion);
  formulario.reset();
  actualizarCamposEspecificos();
  actualizarVistaPrevia();
  renderizar();
}

//Listeners
titulo.addEventListener("input", observarEvento);
tipo.addEventListener("change", observarEvento);
titulo.addEventListener("input", actualizarVistaPrevia);
autor.addEventListener("input", actualizarVistaPrevia);
tipo.addEventListener("change", actualizarVistaPrevia);
tipo.addEventListener("change", actualizarCamposEspecificos);
actualizarCamposEspecificos();
email.addEventListener("focus", mostrarAyudaEmail);
email.addEventListener("blur", ocultarAyudaEmail);
formulario.addEventListener("submit", manejarEnvio);
