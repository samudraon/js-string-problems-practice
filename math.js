const result = Math.pow(2, 8);
console.log(result);


const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);

// console.log(gap);

if (gap < 5) {
    console.log('You guys can be friend');
}
else {
    console.log('You guys stay apart');
}


const number = 2.6523;
const fullNumber = Math.round(number);
// console.log(fullNumber);

const result2 = Math.ceil(2.0001);
const result3 = Math.floor(45.259);
console.log(result3);

//Output for random numbers 
for (let i = 0; i<20; i++) {
    const random = Math.round(Math.random()*6);
    console.log(random);
}

