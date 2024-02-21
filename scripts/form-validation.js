const [Name, Email, Message] = document.querySelectorAll('.formInput'),
  [nameErr, emailErr, messageErr] = document.querySelectorAll('.errMsgContainer'),
  SubmitBtn = document.getElementById('submit');
Name.addEventListener('input', function() {isNameValid(this.value)});
Email.addEventListener('input', function() {isEmailValid(this.value)});
Message.addEventListener('input', function() {isMessageValid(this.value)});

let ValidName = false,
  ValidEmail = false,
  ValidMsg = false;

export function isNameValid(name) {
  const Valid = /[a-zA-z]+/.test(name),
    ClassList = nameErr.classList;

  if (!Valid) {
    !ClassList.contains('showErr') && ClassList.add('showErr');
    nameErr.textContent = 'Name must be at least one Alphabetic character (a-zA-Z).';
  } else {
    ClassList.contains('showErr') && ClassList.remove('showErr');
    nameErr.textContent = '';
  }
  ValidName = Valid;
  helpValidate(Name, Valid);
};

export function isEmailValid(email) {
  const isLower = email.toLowerCase() === email,
    isFormat = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/.test(email),
    Valid = isLower && isFormat,
    ClassList = emailErr.classList;

  const msg = 'Email must be in';
  if (Valid) {
    ClassList.contains('showErr') && ClassList.remove('showErr');
    emailErr.textContent = '';
  } else {
    !ClassList.contains('showErr') && ClassList.add('showErr');
    if (!isLower) {
      emailErr.textContent = msg + ' lower case';
    }
    else if (!isFormat) {
      emailErr.textContent = msg + ' "user.name@email-provider.tld" valid format';
    }
  }
  ValidEmail = Valid;
  helpValidate(Email, Valid);
}

export function isMessageValid(msg) {
    const Valid = msg.length >= 4 && msg.length <= 500,
      ClassList = messageErr.classList;

  if (!Valid) {
    !ClassList.contains('showErr') && ClassList.add('showErr');
    messageErr.textContent = 'Message must be between 4 and 500 characters.';
  } else {
    ClassList.contains('showErr') && ClassList.remove('showErr');
    messageErr.textContent = '';
  }
  ValidMsg = Valid;
  helpValidate(Message, Valid);
}

function helpValidate(input, valid) {
  const Class = input.classList;
  !Class.contains('red') && Class.add('red');
  Class.contains('green') && Class.remove('green');
  if (valid) {
    Class.remove('red');
    Class.add('green');
  }
  validateForm();
}
function validateForm() {
  const ValidForm = ValidName && ValidEmail && ValidMsg;
  SubmitBtn.disabled = !ValidForm;
}

// Allow interaction
const AllInputs = [Name, Email, Message],
  Errors = [nameErr, emailErr, messageErr],
  hide = 'hideError';
AllInputs.forEach(input => {
  input.addEventListener('blur', () => showAllErrors(input));
  input.addEventListener('focus', () => hideOtherErrors(input));
});

function showAllErrors(input) {
  input.classList.remove('green');
  const allEmpty = AllInputs.map(input => input.value === '');
  if (allEmpty.every(value => value === true)) {
    AllInputs.forEach(input => {
      input.classList.remove('green');
      input.classList.remove('red');
    })
    Errors.forEach(error => {
      error.classList.add(hide)
      error.textContent = '';
    })
  } else {
    Errors.forEach(error => {
    error.classList.remove(hide);
  })
  }
}
function hideOtherErrors(input) {
  Errors.forEach(error => {
    !error.classList.contains(hide) && error.classList.add(hide);
  });
  const verified = () => input.classList.add('green');
  switch (input.id) {
    case 'name':
      nameErr.classList.remove(hide);
      ValidName && verified()
      break;
    case 'email':
      emailErr.classList.remove(hide);
      ValidEmail && verified();
      break;
    case 'msg':
      messageErr.classList.remove(hide);
      ValidMsg && verified();
      break;
    default:
      break;
  }
}

document.addEventListener('keypress', () => console.log(document.activeElement))