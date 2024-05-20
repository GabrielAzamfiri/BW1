/* timer countdown da 60 secondi  */
let tempoRimanente = 60;
const countdownElement = document.getElementById("countdown");
/* funzione per aggiornare il countdown */
function aggCountdown() {
  /* decrementa il tempo rimanente */
  tempoRimanente--;
  /* aggiorna il tempo */
  countdownElement.textContent = tempoRimanente;
  /* se scade il tempo  */
  if (tempoRimanente <= 0) {
    clearInterval(intervalloCountdown);
    countdownElement.textContent = "tempo scaduto";
  }
}

/* impostiamo l'intervallo di aggiornamento del timer */
const intervalloCountdown = setInterval(aggCountdown, 1000);
