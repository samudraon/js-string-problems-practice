function reverse(str) {
    const words = str.split(' ');
    const result = [];
    for (let i = words.length - 1; i >=0; i--) {
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}

const myString = 'I am a good boy';
const reversedStr = reverse(myString);
console.log(reversedStr);