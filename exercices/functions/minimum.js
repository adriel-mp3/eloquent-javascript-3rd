// Write a function min that takes two arguments and returns their minimum.

const min = (x, y) => x > y ? y : x;

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10