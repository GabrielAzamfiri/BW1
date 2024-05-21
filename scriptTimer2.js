const countdownNumberEl = document.getElementById("countdown-number");
const progressCircle = document.querySelector(".progress-circle");
const radius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

let countdown = 60;

countdownNumberEl.textContent = countdown;
progressCircle.style.strokeDasharray = `${circumference}px`;
progressCircle.style.strokeDashoffset = `${circumference}px`;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
}

/* timer countdown da 60 secondi */
let tempoRimanente = 60;
const countdownElement = document.getElementById("countdown");

/* funzione per aggiornare il countdown */
function aggiornamentoCountdown() {
  /* decrementa il tempo rimanente */
  tempoRimanente--;

  /* aggiorna il tempo */
  countdownNumberEl.textContent = tempoRimanente;
  setProgress((tempoRimanente / 60) * 100);

  /* se scade il tempo  */
  if (tempoRimanente <= 0) {
    clearInterval(intervalloCountdown);
    questionResults();
  }
}

/* inizializza l'intervallo del countdown */
const intervalloCountdown = setInterval(aggiornamentoCountdown, 1000);

/* funzione da chiamare quando il tempo scade */
function questionResults() {
  alert("Tempo scaduto!");
  // Aggiungi qui il codice per gestire lo scadere del tempo
}
