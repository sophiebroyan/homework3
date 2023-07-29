//1. Given an array. Determine whether it consists only from uniques or not.

function compare(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        return ('not unique');
      }
    }
  }
  return ('unique');
}
console.log(compare());