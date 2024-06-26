const questionsEasy = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
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
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
const questionsMedium = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: ".at is the top-level domain for what country?",
    correct_answer: "Austria",
    incorrect_answers: ["Argentina", "Australia", "Angola"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    correct_answer: "FM-7",
    incorrect_answers: ["PC-9801", "Xmillennium ", "MSX"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "On which day did the World Wide Web go online?",
    correct_answer: "December 20, 1990",
    incorrect_answers: ["December 17, 1996", "November 12, 1990", "November 24, 1995"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "Generally, which component of a computer draws the most power?",
    correct_answer: "Video Card",
    incorrect_answers: ["Hard Drive", "Processor", "Power Supply"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "In CSS, which of these values CANNOT be used with the &quot;position&quot; property?",
    correct_answer: "center",
    incorrect_answers: ["static", "absolute", "relative"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "All program codes have to be compiled into an executable file in order to be run. This file can then be executed on any machine.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "It&#039;s not possible to format a write-protected DVD-R Hard Disk.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "boolean",
    difficulty: "medium",
    category: "Science: Computers",
    question: "The first computer bug was formed by faulty wires.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "What does &quot;LCD&quot; stand for?",
    correct_answer: "Liquid Crystal Display",
    incorrect_answers: ["Language Control Design", "Last Common Difference", "Long Continuous Design"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Science: Computers",
    question: "All of the following programs are classified as raster graphics editors EXCEPT:",
    correct_answer: "Inkscape",
    incorrect_answers: ["Paint.NET", "GIMP", "Adobe Photoshop"],
  },
];
const questionsHard = [
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What vulnerability ranked #1 on the OWASP Top 10 in 2013?",
    correct_answer: "Injection ",
    incorrect_answers: ["Broken Authentication", "Cross-Site Scripting", "Insecure Direct Object References"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which kind of algorithm is Ron Rivest not famous for creating?",
    correct_answer: "Secret sharing scheme",
    incorrect_answers: ["Hashing algorithm", "Asymmetric encryption", "Stream cipher"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What major programming language does Unreal Engine 4 use?",
    correct_answer: "C++",
    incorrect_answers: ["Assembly", "C#", "ECMAScript"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which of the following computer components can be built using only NAND gates?",
    correct_answer: "ALU",
    incorrect_answers: ["CPU", "RAM", "Register"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What does the International System of Quantities refer 1024 bytes as?",
    correct_answer: "Kibibyte",
    incorrect_answers: ["Kylobyte", "Kilobyte", "Kelobyte"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What was the name of the first Bulgarian personal computer?",
    correct_answer: "IMKO-1",
    incorrect_answers: ["Pravetz 82", "Pravetz 8D", "IZOT 1030"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?",
    correct_answer: "Transport",
    incorrect_answers: ["Session", "Data link", "Network"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "The Harvard architecture for micro-controllers added which additional bus?",
    correct_answer: "Instruction",
    incorrect_answers: ["Address", "Data", "Control"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Science: Computers",
    question: "Which of the following is the oldest of these computers by release date?",
    correct_answer: "TRS-80",
    incorrect_answers: ["Commodore 64", "ZX Spectrum", "Apple 3"],
  },
  {
    type: "boolean",
    difficulty: "hard",
    category: "Science: Computers",
    question: "DHCP stands for Dynamic Host Configuration Port.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
];
//*******************************************************************FUNZIONE DOMANDE*************************************************************************** */
let tempoTotale; // del timmer che viene scelto dallo switch case

let i = 0; //per cambiare index array questions al click
let risultato = 0;
let questionsChoose;
let questionsChooseStr = localStorage.getItem("difRisposte");
if (questionsChooseStr === "Easy") {
  questionsChoose = questionsEasy;
} else if (questionsChooseStr === "Medium") {
  questionsChoose = questionsMedium;
} else if (questionsChooseStr === "Hard") {
  questionsChoose = questionsHard;
}
const questionResults = () => {
  const domanda = document.getElementById("domanda");
  if (i < questionsChoose.length) {
    const risposte = questionsChoose[i].correct_answer.concat("," + questionsChoose[i].incorrect_answers).split(","); // array di risposte

    const questionNumber = document.getElementById("questionNumber");
    questionNumber.innerHTML = `QUESTION ${
      //aggiorno il conteggio delle domande
      i + 1
    }<span class="differentColor"> / 10</span>`; // aggiungo uno span in js per il cambio colore del numero domanda

    domanda.innerText = questionsChoose[i].question; //cambio il testo della domanda
    const numeriRandom = []; // array di numeri random da 0 al numero di risposte ( serve per mettere le riposte in ordine casuale)

    for (let index = 0; index < risposte.length; index++) {
      //per ogni numero dentro l'array (stessa quantità di risposte)
      let randomNumber = 0;
      do {
        randomNumber = Math.floor(Math.random() * risposte.length);
      } while (numeriRandom.includes(randomNumber));
      numeriRandom.push(randomNumber);

      const contenitoreRisposte = document.getElementById("contenitoreRisposte");
      const risposta = document.createElement("button");
      risposta.classList.add("btnRisposta");
      risposta.innerText = risposte[numeriRandom[index]]; //come index un numero casuale cosi le riposte sono in ordine casuale
      contenitoreRisposte.appendChild(risposta);
      risposta.classList.add("btnColoreViola");

      risposta.addEventListener("click", () => {
        // al click della risposta, se corretta aggiungi 1 al risultato altrimenti niente

        if (risposta.innerText === questionsChoose[i].correct_answer) {
          risposta.id = "btnVerde";
          // al click della risposta, se corretta aggiungi 1 al risultato altrimenti niente
          risultato += 1;
          console.log("il risultato è:", risultato);
        } else {
          console.log("risposta sbagliata");
          risposta.id = "btnRosso";
        }

        // Disabilito tutti i pulsanti di risposta così dopo aver selezionato una risposta, non posso selezionarne altre
        const allButtons = contenitoreRisposte.querySelectorAll("button");
        allButtons.forEach((button) => (button.disabled = true));

        i += 1;

        setTimeout(() => {
          // imposto il ritardo 0.3 secondi prima di passare alla domanda successiva
          contenitoreRisposte.innerHTML = ""; // Pulisco il contenitore delle risposte
          questionResults(); //al click faccio ripartire la funzione con i incrementato di 1
          tempoRimanente = tempoTotale;
          aggiornamentoCountdown(); // al click faccio ripartire il timmer
        }, 600);
      });
    }
  } else {
    localStorage.setItem("risultato", risultato); // PER PRENDERE IL VALORE DEL RISULTATO NELLA PAGINA SUCCESSIVA
    window.location.href = "../../Results.html";
  }
};

window.onload = function () {
  //FAI PARTIRE LA FUNZIONE QUANDO LA PAGINA è CARICATA
  if (window.location.href.endsWith("Question.html")) {
    questionResults(); //chiamo la funzione cosi quando carica la pagina la prima domanda è gia pronta
    aggiornamentoCountdown();
  }
};
//**********************************************************************TIMER************************************************************/

let progressCircle = document.getElementById("progress");
let secDot = document.querySelector(".secDot");

/* Funzione per il timer */
switch (questionsChoose) {
  case questionsEasy:
    tempoTotale = 41;
    break;
  case questionsMedium:
    tempoTotale = 61;
    break;
  case questionsHard:
    tempoTotale = 121;
    break;
  default:
    tempoTotale = 61;
    break;
}
let tempoRimanente = tempoTotale;
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

  /* Calcolo lo strokeDasharray in base al tempo rimanente */
  let percentualeCompletamento = (tempoTotale - tempoRimanente) / tempoTotale;
  let lunghezzaVisibile = lunghezzaCirconferenza * percentualeCompletamento;
  let lunghezzaInvisibile = lunghezzaCirconferenza - lunghezzaVisibile;
  progressCircle.style.strokeDasharray = `${lunghezzaVisibile} ${lunghezzaInvisibile}`;
  /* Calcolo lo strokeDashoffset in base al tempo rimanente */ /* questo poteva essere una potenziale opzione ma al cambio del tempo rimamanente dava un effetto di riempimento del timer, percio scartata. resta comunque un alternativa da tenere a mente! */
  /*   let percentualeCompletamento = tempoRimanente / 60;
  let strokeDashoffset = lunghezzaCirconferenza * percentualeCompletamento;
  progressCircle.style.strokeDashoffset = strokeDashoffset; */

  /* Calcola l'angolo di rotazione per il puntino */
  let angoloRotazione = (tempoTotale - tempoRimanente) * (360 / tempoTotale);
  secDot.style.transform = `rotate(${angoloRotazione}deg)`;

  /* Se scade il tempo */
  if (tempoRimanente <= 0) {
    tempoRimanente = tempoTotale;
    i += 1;
    const contenitoreRisposte = document.getElementById("contenitoreRisposte");
    contenitoreRisposte.innerHTML = "";
    // aggiornamentoCountdown(); // al click fai rimaritre il timmer
    questionResults(); //al click fai ripartire la funzione con i incrementato di 1
    aggiornamentoCountdown();
  }
}

/* Impostiamo l'intervallo di aggiornamento del timer */
setInterval(aggiornamentoCountdown, 1000);
