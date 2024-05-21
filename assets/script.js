// WELCOME PAGE

const checkbox = document.getElementById("checkboxWP");
const divButton = document.getElementById("buttonJs");

function check() {
  if (checkbox.checked) {
    const button = document.createElement("button");
    button.textContent = "PROCEED";
    button.classList.add("styleButton");

    divButton.appendChild(button);
  } else {
    divButton.innerHTML = "";
  }
}



// FEEDBACK PAGE 

document.addEventListener('DOMContentLoaded', function () {

    //DOMContentLoaded fa in modo che l'evento venga innescato quando il file html è "pronto"
    const ratingElement = document.getElementById("ratingStars");

    for (let index = 0; index < 10; index++) {
    // creo 10 elementi con il cilo for utilizzando svg con il path fornito
    const starElement = document.createElementNS
            ('http://www.w3.org/2000/svg', 'svg');
        
        // definisco delle costanti che rappresentano gli attributi degli elementi svg. 
    const viewbox = "0 0 47 46"; // viewbox è il valore che definisce le coordinate minime e massime della "box"
    const height = 46;
    const width = 47;
    const defaultColor = "rgb(15, 23, 81)"; //colore di riempimento
    
    starElement.setAttribute('height', height);
    starElement.setAttribute('width', width);
    starElement.setAttribute('viewBox', viewbox);
    starElement.setAttribute('fill', "none");
    starElement.classList.add("stella"); //aggiuno una classe all'elemento svg

    // creo l'elemento path e lo aggiungo all'elemento svg
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        pathElement.setAttribute("d", "M22.2044 1.55551C22.6143 0.569963 24.0104 0.569964 24.4203 1.55552L29.9874 14.9402C30.1602 15.3557 30.5509 15.6396 30.9994 15.6756L45.4494 16.834C46.5134 16.9193 46.9448 18.2471 46.1341 18.9415L35.1248 28.3722C34.7831 28.6649 34.6338 29.1242 34.7382 29.5619L38.1018 43.6626C38.3494 44.7009 37.2199 45.5215 36.309 44.9651L23.9379 37.4089C23.5538 37.1743 23.0709 37.1743 22.6868 37.4089L10.3157 44.9651C9.40478 45.5215 8.27528 44.7009 8.52295 43.6626L11.8865 29.5619C11.9909 29.1242 11.8416 28.6649 11.4999 28.3722L0.490575 18.9415C-0.320069 18.2471 0.111362 16.9193 1.17535 16.834L15.6253 15.6756C16.0738 15.6396 16.4645 15.3557 16.6374 14.9402L22.2044 1.55551Z");
        
    pathElement.setAttribute("fill", defaultColor);

    starElement.appendChild(pathElement);

    ratingElement.appendChild(starElement);
    }
    
    //seleziono i path creati all'interno della section #ratingStars
    const starsElements = document.querySelectorAll('#ratingStars path');


    // quando passo sopra una stella il valore di selectedRating viene aggiornato con l'indice della stella selezionata + 1.
    starsElements.forEach(function(star, index) {
        star.addEventListener('mouseover', function() {
            handleMouseOver(starsElements, index);
        }); // questa funzione viene chiamata quando il mouse passa sopra una stella si colorano tutte le stelle fino a quella selezionata
        
        star.addEventListener('mouseout', handleMouseOut(starsElements));// questa funzione viene chiamata quando il mouse esce da una stella e ripristina il colore delle stelle di default
        star.addEventListener('click', function() {
            handleClick(starsElements, index);
        }); // questa funzione viene chiamata quando una stella viene cliccata e si aggiorna lo stat
    });


    
});

function updateStars(stelle, index, className) { // dichiaro la funzione. stelle, index e className sono gli argomenti della funzione
    stelle.forEach(function(stella, i) {
        if (i <= index) {
            stella.classList.add(className);
        } else {
            stella.classList.remove(className);
        }
    });

    if (className === 'selected') {
        stelle.forEach(function(stella, i) {
            if (i > index) {
                stella.classList.remove('selected');
            }
        });
    }
}

let selectedRating = 0; //0 perchè inizialmente nessuna stella è selezionata. è fuori dal DOM perchè viene utilizzato in handleClick e handleMouseOut
    
// Funzioni eventi che dichiaro. 
function handleMouseOver(starsElements, index) {
    updateStars(starsElements, index, 'hover');
}

function handleMouseOut(starsElements) {
    updateStars(starsElements, selectedRating - 1, 'hover');
}

function handleClick(starsElements, index) {
    selectedRating = index + 1;
    updateStars(starsElements, index, 'selected'); //starsElements, index e selected sono i parametri
}





