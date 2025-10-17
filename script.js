const mainTitle = document.getElementById("main-title");
const mainButtons = document.getElementById("main-buttons");
const siNoSection = document.getElementById("si-no-section");
const generadorSection = document.getElementById("generador-section");
const decidirBtn = document.getElementById("decidir-btn");
const resultado = document.getElementById("resultado");
const tarjetaContainer = document.getElementById("tarjeta-container");
const botonesVolver = document.querySelectorAll(".volver");
const btnSiNo = document.getElementById("btn-si-no");
const btnGenerador = document.getElementById("btn-generador");

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
    texto: "Tus alumnos de 1° de Bio te ofrecen un sanguche de milanesa y evidentemente está envenenado.",
    opciones: [
      "Lo como igual.",
      "Lo como mientras escribo mi carta de despedida.",
      "Le pregunto a Mili"
    ]
  }
];


let indiceActual = 0;

// --- Mostrar secciones ---
function mostrarSeccion(seccion) {
  mainButtons.classList.add("hidden");
  seccion.classList.remove("hidden");
  if (seccion === siNoSection) mainTitle.textContent = "";
}

function volverInicio() {
  [siNoSection, generadorSection].forEach(sec => sec.classList.add("hidden"));
  mainButtons.classList.remove("hidden");
  mainTitle.textContent = "🎉 ¡Feliz cumpleaños! 🎉";
  resultado.textContent = "";
  tarjetaContainer.innerHTML = "";
  indiceActual = 0;
}

// --- Botones principales ---
btnSiNo.onclick = () => mostrarSeccion(siNoSection);
btnGenerador.onclick = () => {
  mostrarSeccion(generadorSection);
  mostrarTarjeta();
};
botonesVolver.forEach(btn => (btn.onclick = volverInicio));

// --- Sí / No ---
decidirBtn.onclick = () => {
  resultado.textContent = Math.random() < 0.5 ? "Sí" : "No";
  resultado.style.opacity = 0;
  setTimeout(() => (resultado.style.opacity = 1), 50);
};

// --- Simulador ---
function mostrarTarjeta() {
  const decision = decisiones[indiceActual];
  tarjetaContainer.innerHTML = `
    <div class="tarjeta fade">
      <h2>🎯 Simulador de decisiones importantes</h2>
      <p>${decision.texto}</p>
      <div class="opciones">
        ${decision.opciones.map(op => `<button>${op}</button>`).join("")}
      </div>
    </div>
  `;
  tarjetaContainer.querySelectorAll(".opciones button").forEach(btn => {
    btn.onclick = mostrarBotonGenerarOtra;
  });
}

function mostrarBotonGenerarOtra() {
  const boton = document.createElement("button");
  boton.textContent = "Generar otra";
  boton.classList.add("btn");
  boton.style.margin = "1rem auto";
  boton.onclick = () => {
    indiceActual++;
    indiceActual < decisiones.length
      ? mostrarTarjeta()
      : (tarjetaContainer.innerHTML = `
          <div class="tarjeta">
            <p>🎉 ¡No hay más decisiones por hoy! 🎉</p>
          </div>
        `);
  };
  tarjetaContainer.appendChild(boton);
}
