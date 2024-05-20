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

checkbox.addEventListener("click", check);
