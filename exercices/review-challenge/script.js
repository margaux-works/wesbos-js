function processData(input) {
  let lines = input.split('\n'); // split input into array of lines
  let numTestCases = parseInt(lines[0]); // extract number of test cases
  let results = []; // store results to print later

  for (let i = 1; i <= numTestCases; i++) {
    // iterate through test cases
    let even = [];
    let odd = [];
    let str = lines[i]; // get current string from input

    for (let j = 0; j < str.length; j++) {
      if (j % 2 === 0) {
        even.push(str[j]); // even-indexed characters
      } else {
        odd.push(str[j]); // odd-indexed characters
      }
    }
    results.push(even.join('') + ' ' + odd.join(''));
  }
  console.log(results.join('\n'));
}

processData('hacker');
