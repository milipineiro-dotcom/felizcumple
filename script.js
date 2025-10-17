// --- Selección de elementos
const btnSiNo = document.getElementById("btn-si-no");
const btnGenerador = document.getElementById("btn-generador");
const siNoSection = document.getElementById("si-no-section");
const generadorSection = document.getElementById("generador-section");
const mainButtons = document.getElementById("main-buttons");
const decidirBtn = document.getElementById("decidir-btn");
const resultado = document.getElementById("resultado");
const tarjetaContainer = document.getElementById("tarjeta-container");
const botonesVolver = document.querySelectorAll(".volver");
const mainTitle = document.getElementById("main-title");

// --- Datos del generador
const decisiones = [
  {
    texto: "Estás por salir, hace calor pero a la noche refresca. Sin embargo, nunca le pegan al pronóstico, así que corres el riesgo de llevar abrigo al pedo.",
    opciones: [
      "No llevo, hace calor (spoiler: espero el tren cagado de frío)",
      "Lo llevo por las dudas (después digo '¿Para qué traje abrigo?')",
      "Le pregunto a Mili"
    ]
  },
  {
    texto: "¿Voy a correr al poli?",
    opciones: [
      "Sí, cuando llego me pregunto por qué.",
      "No, pero me felicito por la intención.",
      "Le pregunto a Mili"
    ]
  },
  {
    texto: "Tus alumnos de 1° de Biología te ofrecen un sanguche de milanesa y evidentemente está envenenado.",
    opciones: [
      "Lo como igual.",
      "Lo como mientras escribo mi carta de despedida.",
      "Le pregunto a Mili"
    ]
  }
];

let indiceActual = 0;

// --- Función para mostrar secciones
function mostrarSeccion(seccion) {
  mainButtons.classList.add("hidden");
  seccion.classList.remove("hidden");

  // Cambiar título principal según la sección
  if (seccion === siNoSection) {
    mainTitle.textContent = "🧠 Dejá de pensar";
  } else {
    mainTitle.textContent = "🎉 ¡Feliz cumpleaños! 🎉";
  }
}

function volverInicio() {
  siNoSection.classList.add("hidden");
  generadorSection.classList.add("hidden");
  mainButtons.classList.remove("hidden");
  mainTitle.textContent = "🎉 ¡Feliz cumpleaños! 🎉";
  resultado.textContent = "";
  tarjetaContainer.innerHTML = "";
  indiceActual = 0;
}

// --- Botones principales
btnSiNo.addEventListener("click", () => mostrarSeccion(siNoSection));
btnGenerador.addEventListener("click", () => mostrarSeccion(generadorSection));
botonesVolver.forEach(btn => btn.addEventListener("click", volverInicio));

// --- Tomar decisiones (Sí/No)
decidirBtn.addEventListener("click", () => {
  const opciones = ["Sí", "No"];
  const eleccion = opciones[Math.floor(Math.random() * opciones.length)];
  resultado.textContent = eleccion;
});

// --- Generador de decisiones
function mostrarTarjeta() {
  const decision = decisiones[indiceActual];
  tarjetaContainer.innerHTML = `
    <div class="tarjeta">
      <p>${decision.texto}</p>
      <div class="opciones">
        ${decision.opciones.map((op, i) => `<button data-op="${i}">${op}</button>`).join("")}
      </div>
    </div>
  `;

  const botonesOpciones = tarjetaContainer.querySelectorAll(".opciones button");
  botonesOpciones.forEach(btn => {
    btn.addEventListener("click", () => {
      mostrarBotonGenerarOtra();
    });
  });
}

function mostrarBotonGenerarOtra() {
  const boton = document.createElement("button");
  boton.textContent = "Generar otra";
  boton.classList.add("btn");
  boton.addEventListener("click", () => {
    indiceActual++;
    if (indiceActual < decisiones.length) {
      mostrarTarjeta();
    } else {
      tarjetaContainer.innerHTML = "<p>🎉 ¡No hay más decisiones por hoy! 🎉</p>";
    }
  });
  tarjetaContainer.appendChild(boton);
}

// Mostrar primera tarjeta automáticamente
mostrarTarjeta();
