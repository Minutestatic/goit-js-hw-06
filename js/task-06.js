const validationInput = document.querySelector("#validation-input");
console.log(typeof validationInput.getAttribute("data-length"));

const dataLength = Number(validationInput.getAttribute("data-length"));
console.log(dataLength);

validationInput.addEventListener("blur", handleValidationBlur);

function handleValidationBlur() {
  if (validationInput.value === "") {
    validationInput.classList.remove("valid");
    validationInput.classList.remove("invalid");
  } else if (validationInput.value.length === dataLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}
