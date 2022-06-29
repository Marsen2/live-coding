// function 1
function getNum() {
  return 42;
}

// test data
// option 1
const res = getNum();
console.log(res);
// option 2
console.log(getNum());

// function 2
function getSquared(num = 10) {
  return num * num;
}
// test data
console.log(getSquared());
// function 3
function sum(num1, num2) {
  return num1 + num2;
}
// test data
console.log(sum(10, 10));

// function 4
function printMessage(num) {
  return 'I am ' + num + ' years old';
}

// test data
console.log(printMessage(34));

// function 5
function sumFunc(from, to) {
  let result = 0;
  for (let index = from; index <= to; index += 1) {
    result += index;
  }
  return result;
}
// test data
console.log(sumFunc(5, 7));
console.log(sumFunc(-5, 5));

// function 6
function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sumFunc(firstFrom, firstTo) > (secondFrom, secondTo);
}
// test data
console.log(compareSums(1, 2, 3, 4));
console.log(compareSums(1, 2, 1, 1));

const mult = (firstNum, secondNum) => firstNum * secondNum;
console.log(mult(2, 2));
console.log(mult(-10, 2));
console.log(mult(2, -6));

const getSquaredArrow = num => num * num;
// function 7
function getMagicNumber() {
  return 17;
}
// test data
console.log(getMagicNumber());
