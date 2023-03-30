const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", handleNameInput);

function handleNameInput() {
  if (!nameInput.value) {
    nameOutput.textContent = "Anonymou";
  } else {
    nameOutput.textContent = nameInput.value;
  }
}
