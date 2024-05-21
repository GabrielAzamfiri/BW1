const checkbox = document.getElementById("checkboxWP");
const divButton = document.getElementById("buttonJs");
const button = document.createElement("button");
button.textContent = "PROCEED";
button.classList.add("styleButtonUnchecked");
divButton.appendChild(button);

function check() {
  button.classList.remove("styleButton", "styleButtonUnchecked");

  if (checkbox.checked) {
    button.classList.add("styleButton");
  } else {
    button.classList.add("styleButtonUnchecked");
  }
}

checkbox.addEventListener("click", check);

button.addEventListener(click, function () {
  window.location.href = "Question.html";
});

const questionButton = document.getElementById("buttonQP");
