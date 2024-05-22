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

lable.addEventListener("click", function () {
  const faCheck = document.getElementById("fa-check");
  faCheck.style.display = "block";
});
