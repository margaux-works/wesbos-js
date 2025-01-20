console.log('it works!');

// create a function printForecast
// print each temperature with their index
// print the day (index + 1)

let printForecast = function (arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += `...${arr[i]}°C in ${[i + 1]} days`;
  }
  console.log(result + '...');
};

printForecast([17, 21, 23]);
