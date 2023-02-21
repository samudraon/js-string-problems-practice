const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni. kaala kaala sada sada';

const searchString = 'Pakhi';
const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());

console.log(doesExist);


// indexOf
console.log(lyrics.indexOf('Tumi'));

if (lyrics.indexOf('tmi') !== -1) {
    console.log('exists inside the string');
}
else {
    console.log('can not find it');
}

// startsWith

console.log(lyrics.startsWith('Tumi'));

//endsWith
const fileName = 'mybiodata.pdf'
const otherFile = 'mypic.png'

console.log(fileName.endsWith('.pdf'));
