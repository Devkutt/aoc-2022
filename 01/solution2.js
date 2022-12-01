const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf-8').split('\n');

const numbersPerElf = [];

let index = 0;
lines.forEach(line => {
    if (line === "") {
        index++;
    } else {
        if (!numbersPerElf[index]) {
            numbersPerElf[index] = [];
        }

        numbersPerElf[index].push(parseInt(line));
    }
});

const sums = numbersPerElf.map(curr => curr.reduce((sum, currentNumber) => sum + currentNumber));
const first = sums.reduce((max, curr) => max > curr ? max : curr, 0);
const second = sums.reduce((max, curr) => curr === first ? max : max > curr ? max : curr, 0);
const third = sums.reduce((max, curr) => (curr === first || curr === second) ? max : max > curr ? max : curr, 0);

console.log(first, second, third);
console.log(first + second + third);