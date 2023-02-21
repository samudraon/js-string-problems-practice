let first = 5;
let second = 7;
// console.log(first, second);

//approach one--
// const temp = first;
// first = second;
// second = temp;

//approach two-- Destructuring
[first, second] = [second, first];
console.log(first, second);