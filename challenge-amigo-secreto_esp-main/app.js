// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const nombres = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre) {
    nombres.push(nombre);
    actualizarLista();
    input.value = "";
  } else {
    alert("Por favor, ingresá un nombre.");
  }
}

function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  nombres.forEach(nombre => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (nombres.length < 2) {
    alert("Agregá al menos 2 amigos para hacer el sorteo.");
    return;
  }

  const copia = [...nombres];
  const remitente = copia[Math.floor(Math.random() * copia.length)];

  let destinatario;
  do {
    destinatario = copia[Math.floor(Math.random() * copia.length)];
  } while (destinatario === remitente);

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = ""; // Limpiar antes de mostrar

  const li = document.createElement("li");
  li.textContent = `${remitente} le regala a ${destinatario} 🎁`;
  resultado.appendChild(li);
}
