const form = document.forms[0];

function validateForm(event) {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  if (email.toLowerCase() !== email) {
    const errorMsg = document.querySelector('#errorMsg');
    errorMsg.textContent = 'Email must be in lower case!';
    return;
  }
  form.submit();
}

form.addEventListener('submit', validateForm);
