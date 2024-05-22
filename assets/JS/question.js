const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
let i = 0; //per cambiare index array questions al click
let risultato = 0;
const questionResults = () => {
  const domanda = document.getElementById("domanda");
  if (i < questions.length) {
    const risposte = questions[i].correct_answer
      .concat("," + questions[i].incorrect_answers)
      .split(","); // array di risposte

    //creazione bottoni
    //
    //console.log(questions[i])
    const questionNumber = document.getElementById("questionNumber");
    questionNumber.innerText = `QUESTION ${i + 1}/10`; //aggiorno il conteggio delle domande
    domanda.innerText = questions[i].question; //cambio il testo della domanda
    const numeriRandom = []; // array di numeri random da 0 al numero di risposte ( serve per mettere le riposte in ordine casuale)

    for (let index = 0; index < risposte.length; index++) {
      //per ogni numero dentro l'array (stessa quantità di risposte)
      let randomNumber = 0;
      do {
        randomNumber = Math.floor(Math.random() * risposte.length);
      } while (numeriRandom.includes(randomNumber));
      numeriRandom.push(randomNumber);

      const contenitoreRisposte = document.getElementById(
        "contenitoreRisposte"
      );
      const risposta = document.createElement("button");
      risposta.classList.add("btnRisposta");
      risposta.innerText = risposte[numeriRandom[index]]; //come index un numero casuale cosi le riposte sono in ordine casuale
      contenitoreRisposte.appendChild(risposta);

      risposta.addEventListener("click", () => {
        // al click della risposta, se corretta aggiungi 1 al risultato altrimenti niente
        if (risposta.innerText === questions[i].correct_answer) {
          console.log("risposta giusta");
          risultato += 1;
          console.log("il risultato è:", risultato);
        } else {
          console.log("risposta sbagliata");
        }
        i += 1;
        tempoRimanente = 60;
        contenitoreRisposte.innerHTML = "";
        // aggiornamentoCountdown(); // al click fai rimaritre il timmer
        questionResults(); //al click fai ripartire la funzione con i incrementato di 1
        aggiornamentoCountdown();
      });
    }
  } else {
    console.log("provaaaaaaaaaaaa");
    localStorage.setItem("risultato", risultato);

    window.location.href = "../../Results.html";
  }
};

window.onload = function () {
  if (window.location.href.endsWith("Question.html")) {
    questionResults(); //chiamo la funzione cosi quando carica la pagina la prima domanda è gia pronta
  }
};
//**********************************************************************TIMER************************************************************/

let progressCircle = document.getElementById("progress");
let secDot = document.querySelector(".secDot");

/* Funzione per il timer */
let tempoRimanente = 60;
const countdownElement = document.getElementById("timerSeconds");

/* Imposto lo strokeDasharray per il cerchio */
const lunghezzaCirconferenza = 282.74; // Circonferenza del cerchio
progressCircle.style.strokeDasharray = lunghezzaCirconferenza;
progressCircle.style.strokeDashoffset = lunghezzaCirconferenza;

function aggiornamentoCountdown() {
  /* Decrementa il tempo rimanente */
  tempoRimanente--;

  /* Aggiorna il tempo */
  countdownElement.textContent = tempoRimanente;

  /* Calcolo lo strokeDashoffset in base al tempo rimanente */
  let percentualeCompletamento = tempoRimanente / 60;
  let strokeDashoffset = lunghezzaCirconferenza * percentualeCompletamento;
  progressCircle.style.strokeDashoffset = strokeDashoffset;

  /* Calcola l'angolo di rotazione per il puntino */ /* DA FARE SE AVANZA TEMPO */
  /*  let angoloRotazione = (60 - tempoRimanente) * 6;
  secDot.style.transform = `rotate(${angoloRotazione}deg)`; */

  /* Se scade il tempo */
  if (tempoRimanente <= 0) {
    tempoRimanente = 60;
    i += 1;
    const contenitoreRisposte = document.getElementById("contenitoreRisposte");
    contenitoreRisposte.innerHTML = "";
    // aggiornamentoCountdown(); // al click fai rimaritre il timmer
    questionResults(); //al click fai ripartire la funzione con i incrementato di 1
    aggiornamentoCountdown();
  }
}

/* Impostiamo l'intervallo di aggiornamento del timer */
const intervalloCountdown = setInterval(aggiornamentoCountdown, 1000);

/* La funzione questionResults() è già stata stabilita da un collega */

/*if (window.location.href.endsWith("Results.html")) {
    console.log("File reults");
    console.log(risultato);

    const chartData = {
      labels: ["Correct", "Wrong"],
      data:[risultato*10, 100-(risultato*10)]
      //data: [60, 40],
    };

    const myChart = document.querySelector(".my-chart");

    new Chart(myChart, {
      type: "doughnut",
      data: {
        labels: chartData.labels,
        datasets: [
          {
            label: "Percentuale",
            data: chartData.data,
          },
        ],
      },
      options: {
        borderWidth: 10,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }*/
