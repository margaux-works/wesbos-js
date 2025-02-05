const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');
// Interpolated
console.log('Hello I am a %s string!', '💩');

// Styled
console.log('%c I am some great text', 'font-size: 30px; background:red');

// warning!
console.warn('oh noo');
// Error :|
console.error('bippp!');

// Info
console.info('here is some info');

// Testing - you can text for something, and if wrong it will thrown an error message. if true nothing will happen
console.assert(1 === 2, 'That is wrong');

// clearing
// console.clear();

// Viewing DOM Elements
// console.log(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting

console.count('Wes');
console.count('Wes');
console.count('Margo');
console.count('Margo');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching data');
    console.log(data);
  });

//table
console.table(dogs);
