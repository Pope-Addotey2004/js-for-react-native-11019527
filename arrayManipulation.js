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
const inputArray = [11,12,13,14,15];
const resultArray = processArray(inputArray);
console.log(resultArray); 

function formatArrayStrings(strings, processedNumbers) {
  return strings.map((str, index) => {
      if (processedNumbers[index] % 2 === 0) {
          return str.toUpperCase();
      } else {
          return str.toLowerCase();
      }
  });
}

// Example usage:
const numbers = [11, 12, 13, 14, 15];
const processedNumbers = processArray(numbers);
const strings = ["Paul", "Mark Atta", "Michael soli", "Reuben", "Armah"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log(formattedStrings);
