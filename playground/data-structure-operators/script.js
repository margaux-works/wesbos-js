'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section

// const openingHours =  {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced objects literals
  // openingHours,
  openingHour: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// destructuring object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// if we want to change the name of the variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// defining default value with "= []"
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// spread operator
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr]; // if we wanted to add '1, 2' into the arr
console.log(newArr);
console.log(...newArr); // if we need the elements of an array individually

// to add Gnocci to the existing values in the mainMenu
const newMenu = [...restaurant.mainMenu, 'Gnocci']; // creates a new array
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// joins 2 arrays together
const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu2);

// iterables: arrays, strings, maps, sets. NOT objects
const str = 'Margo';
const letters = [...str, '', 'M.'];
console.log(letters);
console.log(...str); // expends string in individual elements

// SPREAD, because on RIGHT side of =
const arr2 = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 4];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// && and || operators
console.log('---OR---');
// can use any data type, return any type, short-circuiting
console.log(3 || 'Margo'); // 3
console.log('' || 'Margo'); // 'Margo'
console.log(true || 0); // true
console.log(undefined || null); // null - happens even though null is also a falsy value
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'Hello' - first truthy value

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 10

const guests2 = restaurant.numGuests || 10; // easier method than using ternary statement
console.log(guests2); // 10

console.log('---AND---');
console.log(0 && 'Jonas'); // 0 - short-circuiting when first value if false and returns the first value without evaluating second operator
console.log(7 && 'Jonas'); // Jonas - when first value is truthy, the evaluation continues and return the last true operator

console.log('Hello' && 23 && null && 'jonas'); // null - evaluation no longers continue after null because it is falsy, and then this value is returned

// if (restaurant.orderPizza) {
//   // if this function exists, then we execute it
//   restaurant.orderPizza('mushrooms', 'eggs');
// }

// // similar to with AND statement
// restaurant.orderPizza && restaurant, orderPizza('mushrooms', 'eggs');

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);

// // whithout destructuring
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // with destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr); // original array not affected

// // const [first, , second] = restaurant.categories;
// // console.log(first, second); // Italian Vegetarian (second element is skipped)

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); // Italian Vegetarian (second element is skipped)

// // to switch the order of categories between 1st and 3rd with destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values if we do not know the length of the array
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // output: 8 9 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
