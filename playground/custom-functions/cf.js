//function definition
function calculateBill(billAmount, taxRate) {
  console.log(billAmount, taxRate);
  //this is the function body
  console.log('Running calculate bill!');
  const total = billAmount * 1 + taxRate;
  return total;
}

// function call or run
const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.log(myTotal, myTotal2);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo('Margaux');
console.log(greeting);
