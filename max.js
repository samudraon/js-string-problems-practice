/* function maxNum(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
const maxNumber = maxNum(67, 96, 99);
console.log(maxNumber); */


function maxNum(num1, num2, num3) {
    if (num1 > num2 && num1 > num2) {
        console.log('Number 1 is a max number');
    }
    else if (num2 > num1 && num2 > num3) {
        console.log('Number 2 is a max number');
    }
    else {
        console.log('Number 3 is a max number');
    }
}
maxNum(108, 103, 99);

function add(a,b) {
    return a + b;
}
console.log(add("adam" + "eve"));
