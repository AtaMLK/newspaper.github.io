"use strict";

const subscribeButton = document.querySelector(".subscribe-btn");
const closeButton = document.querySelector(".close-btn");
const modalBackground = document.querySelector(".modal-background");
const successMessage = document.querySelector(".success-message");
const notValidMessage = document.querySelector(".not-valid-message");
const form = document.querySelector(".subscribe-form-main");
const email = document.querySelector("#email");
const thankEmail = document.querySelector('.email-adress')

const validateEmail = (emailValue) => {
  return String(emailValue)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function submitForm() {
  subscribeButton.addEventListener("click", function (e) {
    e.preventDefault()
    const emailValue = email.value.trim();
    if (validateEmail(emailValue)) {
      form.classList.add("hidden");
      modalBackground.style.zIndex = "1";
      successMessage.style.zIndex = "2";
      successMessage.classList.remove("hidden");
      thankEmail.textContent = `${email.value}`
    } else {
      // Handle invalid email address here if needed
      email.value = 'Invalid Email address'
      email.style.backgroundColor=' hsl(4, 100%, 67%,0.4)'
      email.style.border=' solid 1px hsl(4, 100%, 67%)'
     notValidMessage.classList.remove('hidden')
    }
    
  });
}


function closeMessage() {
  closeButton.addEventListener("click", function () {
    successMessage.classList.add("hidden");
    modalBackground.style.zIndex = "-1";
    successMessage.style.zIndex = "-1";
    form.classList.remove("hidden");
    email.value = ''
      email.style.backgroundColor=' white'
      email.style.border=' solid 1px black'
    notValidMessage.classList.add('hidden')
  });
}

submitForm();
closeMessage();
