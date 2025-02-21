// select the check button
// select the input field
// select the result div

const btn = document.querySelector('#check-btn');
const field = document.querySelector('#text-input');
const result = document.querySelector('#result');

// when button is clicked
btn.addEventListener('click', check);

function check() {
  let originalValue = field.value;
  let userInput = sanitise();
  // else, reverse the input
  let reversed = userInput.split('').reverse().join('');

  // check if the field is empty
  if (userInput === '') {
    // if empty, send an alert
    alert('Please enter a value ');
    // if the field has one charact
    // compare reserved input with original input
  } else if (userInput.length === 1 || userInput === reversed) {
    // send this is a palindrom
    // if equal update UI with "this is a palindrom"
    result.innerHTML = `${originalValue} is a palindrome`;
  } else {
    // if not, update ui with "this is not a palindrom"
    result.innerHTML = `${originalValue} is NOT a palindrome`;
  }
}

// keep only regexp and put to lower case
function sanitise() {
  const userInput = field.value.toLowerCase();
  let sanitised = userInput.replace(/[^A-Za-z0-9]/g, '');
  return sanitised;
}
