// 1
const country = 'France';
const continent = 'Europe';
let population = '60';

console.log(country);
console.log(continent);
console.log(population);

// 2
isIsland = false;

// 3
let language = 'hindi';

console.log(isIsland);
console.log(language);

console.log(population / 2);
console.log(population + 1);
console.log(population > 6);
console.log(population < 33);
console.log(
  `${country} is in ${continent}, and its ${population} million people speak ${language}`
);

if (population > 33) {
  console.log(
    `${country}'s population is ${population - 33} million below average`
  );
}

//4
// let numNeighbours = prompt(
//   'How many neighbour countries does your country have?'
// );

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else console.log('no border');

if (language == 'english' && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else console.log(`${country} does not meet your criteria`);

// switch

switch (language) {
  case 'chinese':
    console.log('Most number of native speakers');
    break;
  case 'spanish':
    console.log('2nd place');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('4th place');
    break;
  case 'arabic':
    console.log('5th place');
  default:
    console.log('great language too');
}

// ternary

console.log(
  `${country}'s population is ${population > 33 ? 'above' : 'below'} average`
);

// 2.1
function describeCountry(country, population, capitalCity) {
  console.log(
    `${country} has ${population} million people ans its capital city is ${capitalCity}`
  );
}

describeCountry('Spain', 50, 'Madrid');

//

percentageOfWorld1 = (population) => (population / 7900) * 100;

const FrancePerc = percentageOfWorld1(60);
const SpainPerc = percentageOfWorld1(40);

console.log(FrancePerc, SpainPerc);
