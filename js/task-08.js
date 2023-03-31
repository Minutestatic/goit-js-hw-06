const form = document.querySelector(".login-form");
// console.log(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const emailInput = form.elements.email.value;
  // console.dir(emailInput);
  const passwordInput = form.elements.password.value;

  if (!emailInput || !passwordInput) {
    alert("Всі поля повинні бути заповнені!");

    return;
  } else {
    const formData = {
      email: emailInput,
      password: passwordInput,
    };
    console.log(formData);
    form.reset();
  }
}
