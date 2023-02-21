function lowestInArray(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < lowest) {
            lowest = element;
        }
    }
    return lowest;
}
const numbers = [4, 156, 45, 71, 34, 150];
const smallest = lowestInArray(numbers);
console.log('Lowest number is:',smallest);