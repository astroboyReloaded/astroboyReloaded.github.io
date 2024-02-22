const [Name, Email, Message] = document.querySelectorAll('.formInput'),
  [nameErr, emailErr, messageErr] = document.querySelectorAll('.errMsgContainer'),
  SubmitBtn = document.getElementById('submit');
const AllInputs = [Name, Email, Message],
  Errors = [nameErr, emailErr, messageErr],
  show = 'showErr';
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
    !ClassList.contains(show) && ClassList.add(show);
    nameErr.textContent = 'Name must be at least one Alphabetic character (a-zA-Z).';
  } else {
    ClassList.contains(show) && ClassList.remove(show);
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
    ClassList.contains(show) && ClassList.remove(show);
    emailErr.textContent = '';
  } else {
    !ClassList.contains(show) && ClassList.add(show);
    if (!isLower) {
      emailErr.textContent = msg + ' lower case';
    }
    else if (!isFormat) {
      emailErr.textContent = msg + ' "user.name@email-provider.tld" valid format';
    }
  }
  ValidEmail = Valid;
  helpValidate(Email, Valid);
};

export function isMessageValid(msg) {
    const Valid = msg.length >= 4 && msg.length <= 500,
      ClassList = messageErr.classList;

  if (!Valid) {
    !ClassList.contains(show) && ClassList.add(show);
    messageErr.textContent = 'Message must be between 4 and 500 characters.';
  } else {
    ClassList.contains(show) && ClassList.remove(show);
    messageErr.textContent = '';
  }
  ValidMsg = Valid;
  helpValidate(Message, Valid);
};

function helpValidate(input, valid) {
  const Class = input.classList;
  !Class.contains('red') && Class.add('red');
  Class.contains('green') && Class.remove('green');
  if (valid) {
    Class.remove('red');
    Class.add('green');
  }
  validateForm();
};

function validateForm() {
  const ValidForm = ValidName && ValidEmail && ValidMsg;
  SubmitBtn.disabled = !ValidForm;
}

// Allow interaction
AllInputs.forEach(input => {
  input.addEventListener('focus', () => hideOtherErrors(input));
  input.addEventListener('blur', () => showAllErrors(input));
});

function hideOtherErrors(input) {
  Errors.forEach(error => {
    error.classList.remove(show);
    if (error.id === `${input.id}Err` && error.textContent) {
      error.classList.add(show)
    }
  });

  const verified = () => input.classList.add('green');
  switch (input.id) {
    case 'name':
      ValidName && verified()
      break;
    case 'email':
      ValidEmail && verified();
      break;
    case 'msg':
      ValidMsg && verified();
      break;
    default:
      break;
  }
};

function showAllErrors(input) {
  input.classList.remove('green');
  Errors.forEach(error => {
    error.classList.remove(show);
    error.textContent && error.classList.add(show);
  })
  const allEmpty = AllInputs.map(input => input.value === '');
  if (allEmpty.every(value => value === true)) {
    AllInputs.forEach(input => {
      input.classList.remove('green', 'red');
      Errors.forEach(err => {
        err.classList.remove(show);
      })
    })
    Errors.forEach(error => {
      error.classList.remove(show)
      error.textContent = '';
    })
  }
};

