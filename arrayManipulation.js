function processArray(numbers) {
  return numbers.map(number => {
      if (number % 2 === 0) {
          return number * number;
      } else {
          
          return number * number * number;
      }
  });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = processArray(inputArray);
console.log(resultArray); 
