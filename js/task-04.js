const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
let velue = 0;
decrementButton.addEventListener("click", () => {
  velue -= 1;
  console.log(velue);

  counterValue.textContent = velue;
});

incrementButton.addEventListener("click", () => {
  velue += 1;
  console.log(velue);

  counterValue.textContent = velue;
});
