const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kaala kaala sada sada';

const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const character = lyrics.split('');
console.log(character);

const partial = lyrics.slice(5, 8);
// console.log(partial);

const partial2 = lyrics.substring(5, 8);
// console.log(partial2);

const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    'Bosonto kale tomai bolte pari ni',
    'Kaala kaala sada sada',
    'Rong jomeche sada kala'
]
console.log(lines.join('. '));