const form = document.getElementById('form');
const email = document.getElementById('email');
const validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const emailValue = email.value;

  if (emailValue === '') {
    error(email, 'Email is required');
  } else if (!validation.test(emailValue)) {
    error(email, 'Check your email please');
  } else {
    success(email);
    form.reset();
  }
});

function error(field, message) {
  const formControl = field.parentNode;
  const errorMessage = formControl.querySelector('span');

  formControl.classList.add('error');
  errorMessage.innerText = message;
  errorMessage.style.opacity = 1;
}

function success(field) {
  const formControl = field.parentNode;
  const errorMessage = formControl.querySelector('span');

  formControl.classList.remove('error');
  errorMessage.style.opacity = 0;
}
