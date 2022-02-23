const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
     let result = [];
        for (let i = 0; i < expr.length; i += 10) {
            let str = '';
            const letterDec = expr.slice(i, i + 10);
            if (letterDec.indexOf('*') == -1) {
            const letter = letterDec.slice(letterDec.indexOf('1'));
            for (let j = 0; j < letter.length; j += 2) {
                (letter.slice(j, j + 2) === '11') ? str += '-' : str += '.';
            }
            result.push(MORSE_TABLE[str]);
        } else {
            result.push(' ');
        }
        }
        return result.join('')   
}

module.exports = {
    decode
}