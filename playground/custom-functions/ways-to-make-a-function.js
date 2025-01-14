//Anonymous function
// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

//function Express
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

const inchToCM = (inches) => inches * 2.54;

const add = (a, b = 3) => a + b;

// returning an object

const makeABaby = (first, last) => ({
  name: `${first} ${last}`,
  age: 0,
});
