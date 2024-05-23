const checkbox = document.getElementById("checkboxWP");
const divButton = document.getElementById("buttonJs");
const button = document.createElement("button");
button.textContent = "PROCEED";
button.disabled = true; // al inizio il bottone è disabilitato
button.classList.add("styleButtonUnchecked");
divButton.appendChild(button);

function check() {
  button.classList.remove("styleButton", "styleButtonUnchecked");

  if (checkbox.checked) {
    button.classList.add("styleButton");
    button.disabled = false; //se il check box è spuntato, abilito il bottone
  } else {
    button.classList.add("styleButtonUnchecked");
    button.disabled = true; // se il check box non è abilitato / disabilito button
  }
}

checkbox.addEventListener("click", check);

button.addEventListener("click", function () {
  if (button.disabled === false) {
    checkbox.checked = false;
    // window.location.href = "Question.html";
    const main = document.querySelector("main");
    main.innerHTML = ""; //pulisco il main per inserire la scelta della difficolta esame

    // creo tutti i nuovi tag a cui assegno le classi gia presenti nella pagina prima
    const selezionaDifficolta = document.createElement("h1");
    selezionaDifficolta.classList.add("titoloWP");
    selezionaDifficolta.innerText = "Choose your examt difficulty:";
    const sectionCheckboxWP = document.createElement("div");
    sectionCheckboxWP.id = "sectionCheckboxWP";
    const label = document.createElement("label");
    label.setAttribute("for", "checkboxWP");
    label.id = "labelWP";
    const divCheckbox = document.createElement("div");
    divCheckbox.id = "divCheckbox";
    const faCheck = document.createElement("i");
    faCheck.id = "checkIcon";
    faCheck.classList.add("fa-check");
    const checkWP = document.createElement("span");
    checkWP.id = "checkWP";
    checkWP.innerText = "Easy";
    const checkboxWP = document.createElement("input");
    checkboxWP.type = "checkbox";
    checkboxWP.id = "checkboxWP";
    checkboxWP.setAttribute("required", "");
    const divNewButton = document.createElement("div");
    divNewButton.id = "buttonJs";
    const button2WP = document.createElement("button");
    button2WP.textContent = "PROCEED";
    button2WP.disabled = true; // al inizio il bottone è disabilitato
    button2WP.classList.add("styleButtonUnchecked");

    /* aggiungiamo alla main gli elementi */
    divNewButton.appendChild(button2WP);
    divCheckbox.appendChild(faCheck);
    label.append(divCheckbox, checkWP);
    sectionCheckboxWP.append(label, checkboxWP);
    main.append(selezionaDifficolta, sectionCheckboxWP, divNewButton);
    /* funzione per aggiornare lo stato del bottone */
    function newCheck() {
      button2WP.classList.remove("styleButton", "styleButtonUnchecked");

      if (checkboxWP.checked) {
        button2WP.classList.add("styleButton");
        button2WP.disabled = false; //se il check box è spuntato, abilito il bottone
      } else {
        button2WP.classList.add("styleButtonUnchecked");
        button2WP.disabled = true; // se il check box non è abilitato / disabilito button
      }
    }
    label.addEventListener("click", newCheck);
  }
});

// COLORE CHECKBOX AL CLICK

document.addEventListener("DOMContentLoaded", function () {
  const label = document.getElementById("labelWP");
  const checkbox = document.getElementById("divCheckbox");
  const checkIcon = document.getElementById("checkIcon");

  label.addEventListener("click", function () {
    // controlla se il #divCheckbox ha la classe ".clicked" (background colorato)
    if (checkbox.classList.contains("clicked")) {
      checkbox.classList.remove("clicked"); // se la classe .clicked è presente viene rimossa e la icon non si vedrà
      checkIcon.style.display = "none";
    } else {
      checkbox.classList.add("clicked"); // se la classe .clicked non è presente viene aggiunta e compare la icon
      checkIcon.style.display = "block";
    }
  });
});
