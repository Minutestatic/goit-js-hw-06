const fontSizeControl = document.querySelector("#font-size-control");
console.dir(fontSizeControl.value);

const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", handleFontSizeControlImput);
function handleFontSizeControlImput() {
  console.log(fontSizeControl.value);
  textSpan.style.fontSize = `${fontSizeControl.value}px`;
  console.dir(textSpan.style.fontSize);
}
