const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf-8').split('\n');

const input = lines[0];

let window = [];
let index = 1;

while (true) {
    if (window.length === 4) {
        if (window.every(item => window.filter(it => it === item).length === 1)) {
            break;
        }

        window = window.slice(1, undefined);
    }
    window = window.concat(input[index - 1]);

    index++;
}

console.log(index - 1);