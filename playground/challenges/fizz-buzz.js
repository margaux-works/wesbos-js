// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

// when a user inputes a number
// loop from 1 to the entered number
// if the current number is divisible by 3 then print "fizz"
// if the current number is divisible by 5 then print "buzz"
// if the current number is divisible by 3 and 5 then print "FizzBuzz"
// otherwise print the current number

// let userPrompt = parseInt(
//   prompt('Enter the number you would like to fizzbuzz up to')
// );
// // for of loop
// for (let i = 1; i <= prompt; i++) {
//     console.log({is.isInteger(i / 3) ? 'fizz' : is.Interger(i/5) ? } );
//   if (i.isInteger(i / 3)) {
//     let i = 'fizz';
//     console.log(i);
//   } else if (i.isInteger(i / 5)) {
//     let i = 'buzz';
//     console.log(i);
//   } else if (i.isInteger(i / 3) && i.isInteger(i / 5)) {
//     let i = 'fizzBuzz';
//     console.log(i);
//   } else {
//     console.log(i);
//   }
// }

let answer = parseInt(
  prompt('Enter the number you would like to fizzbuzz up to')
);

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzBuzz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(i);
  }
}
