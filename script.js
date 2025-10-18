const decisionBtn = document.getElementById("decisionBtn");
const notConvincedBtn = document.getElementById("notConvincedBtn");
const card = document.getElementById("card");
const cardTitle = document.getElementById("cardTitle");
const cardText = document.getElementById("cardText");
const cardButton = document.getElementById("cardButton");
const backBtn = document.getElementById("backBtn");

const phrases = [
  "Dormí una siesta, capaz se resuelve solo",
  "Esperá a que se solucione mágicamente",
  "Consultale al Luqui del futuro (no contesta)",
  "Probá apagarte y volver a prender",
  "Comé algo, nunca falla",
  "Si te da paja no lo hagas"
];

// --- BOTÓN 1: Tomar decisiones ---
decisionBtn.addEventListener("click", () => {
  card.classList.remove("hidden");
  cardTitle.textContent = "Dejá de pensar";
  cardText.textContent = "";
  cardButton.textContent = "Apretá y listo";
  cardButton.classList.remove("hidden");
  backBtn.classList.remove("hidden");

  cardButton.onclick = () => {
    const result = Math.random() < 0.5 ? "Sí ✅" : "No ❌";
    cardTitle.textContent = result;
    cardButton.classList.add("hidden");
  };
});

// --- BOTÓN 2: Clic acá si no te convenció ---
notConvincedBtn.addEventListener("click", () => {
  card.classList.remove("hidden");
  cardButton.classList.add("hidden");
  backBtn.classList.remove("hidden");
  cardTitle.textContent = "Consejos inútiles";

  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  cardText.textContent = randomPhrase;
});

// --- BOTÓN VOLVER ---
backBtn.addEventListener("click", () => {
  card.classList.add("hidden");
  cardButton.classList.remove("hidden");
  cardTitle.textContent = "";
  cardText.textContent = "";
});
