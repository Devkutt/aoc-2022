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

const maximum = numbersPerElf.reduce((prev, curr) => {
    const sum = curr.reduce((sum, currentNumber) => sum + currentNumber);
    return sum > prev ? sum : prev
}, 0);

console.log(maximum);