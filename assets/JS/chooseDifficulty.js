//********************************************************************************************************************************************************************************** */

const checkboxEasy = document.querySelector("#checkboxEasy");
const checkboxMedium = document.querySelector("#checkboxMedium");
const checkboxHard = document.querySelector("#checkboxHard");
const divCheckboxEasy = document.querySelector(".divCheckboxEasy");
const divCheckboxMedium = document.querySelector(".divCheckboxMedium");
const divCheckboxHard = document.querySelector(".divCheckboxHard");
const divButton = document.getElementById("buttonJs");
const button = document.createElement("button");
button.textContent = "PROCEED";
button.disabled = true; // al inizio il bottone è disabilitato
button.classList.add("styleButtonUnchecked");
divButton.appendChild(button);

let difRisposte;
function check() {
  button.classList.remove("styleButton", "styleButtonUnchecked");

  if (checkboxEasy.checked) {
    button.classList.add("styleButton");
    button.disabled = false; //se il check box è spuntato, abilito il bottone
    difRisposte = "Easy";
    divCheckboxEasy.style.backgroundColor = "#00ffff";
    console.log(difRisposte);
  } else if (checkboxMedium.checked) {
    button.classList.add("styleButton");
    button.disabled = false; //se il check box è spuntato, abilito il bottone
    difRisposte = "Medium";
    console.log(difRisposte);
    divCheckboxMedium.style.backgroundColor = "#00ffff";
  } else if (checkboxHard.checked) {
    button.classList.add("styleButton");
    button.disabled = false; //se il check box è spuntato, abilito il bottone
    difRisposte = "Hard";
    divCheckboxHard.style.backgroundColor = "#00ffff";

    console.log(difRisposte);
  } else {
    button.classList.add("styleButtonUnchecked");
    button.disabled = true; // se il check box non è abilitato / disabilito button
    difRisposte = undefined;
    divCheckboxEasy.style.backgroundColor = "transparent";
    divCheckboxMedium.style.backgroundColor = "transparent";
    divCheckboxHard.style.backgroundColor = "transparent";
  }
  localStorage.setItem("difRisposte", difRisposte);
}

checkboxEasy.addEventListener("click", check);
checkboxMedium.addEventListener("click", check);
checkboxHard.addEventListener("click", check);

button.addEventListener("click", function () {
  if (button.disabled === false) {
    checkboxEasy.checked = false;
    checkboxMedium.checked = false;
    checkboxHard.checked = false;
    window.location.href = "Question.html";
  }
});
