/* timer countdown da 60 secondi  */
let tempoRimanente = 60;
const countdownElement = document.getElementById("countdown");
/* funzione per aggiornare il countdown */
function aggiornamentoCountdown() {
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
const intervalloCountdown = setInterval(aggiornamentoCountdown, 1000);

/* aggiunta la classe al mainConteiner per aggiungere animate */
window.addEventListener("load", function () {
  document.querySelector(".mainContainer").classList.add("animate");
});
