function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}: FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i}: Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}: Buzz`);
    } else {
      console.log(i);
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function returnEvens(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  console.log(sum);
}

const strArr = ["one", "two", "three", "four"];
function capitalized(strArr) {
  let capStr = [];
  for (let i = 0; i < strArr.length; i++) {
        // capitalize first letter
        
  }
  put item in capStr
}
