const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + p.error');
const firstName = document.getElementById('name');
const nameError = document.querySelector('#name + p.error');
const lastName = document.getElementById('last');
const lastError = document.querySelector('#last + p.error');
const password = document.getElementById('password');
const passwordError = document.querySelector('#password + p.error');
const cardError = document.getElementById('tarjeta');
const formError = document.getElementById('formulario');
const buttonError = document.getElementById('boton')

form.addEventListener('submit', function(event){
  
  if(firstName.validity.valueMissing) {
    nameError.textContent = 'First Name cannot be empty';
    firstName.classList.add('field-error');
    cardError.classList.add('cardError');
    formError.classList.add('formError');
    buttonError.classList.add('buttonError');
    event.preventDefault();
 }else {
    nameError.textContent = '';
    firstName.classList.remove('field-error');
    cardError.classList.remove('cardError');
    formError.classList.remove('formError');
 }

  if(lastName.validity.valueMissing) {
    lastError.textContent = 'Last Name cannot be empty';
    lastName.classList.add('field-error');
    cardError.classList.add('cardError');
    formError.classList.add('formError');
    event.preventDefault();
  }else {
    lastError.textContent = '';
    lastName.classList.remove('field-error')
    cardError.classList.remove('cardError');
    formError.classList.remove('formError');
  }

  if(password.validity.valueMissing) {
    passwordError.textContent = 'Password cannot be empty';
    password.classList.add('field-error');
    cardError.classList.add('cardError');
    formError.classList.add('formError');
    event.preventDefault();
  }else {
    passwordError.textContent = '';
    password.classList.remove('field-error');
  }

  if(!email.validity.valid) {
    showError();
    email.classList.add('field-error');
    event.preventDefault();
  }else {
    emailError.textContent = ''
    email.classList.remove('field-error');
  }
});

function showError() {
  if(email.validity.valueMissing) {
    emailError.textContent = 'Looks like this is field is empty';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Looks like this is not an email';
  }
};


