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
    window.location.href = "Question.html";
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
