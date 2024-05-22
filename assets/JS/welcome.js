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

// const label = document.querySelector("lablel");
// label.addEventListener("click", function () {
//   document.getElementById("divCheckbox").style.backgroundColor = "white";
// });
