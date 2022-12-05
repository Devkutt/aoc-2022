const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf-8').split('\n').filter(line => line != "");

const compartmentPairs = lines.map(line => [line.slice(0, line.length / 2), line.slice(line.length / 2, line.length)]);

const wrongItems = compartmentPairs.map(compartments => Array.from(compartments[0]).find(item => compartments[1].includes(item)));

const charCodes = wrongItems.map(item => item.charCodeAt(0));
const values = charCodes.map(code => {
    if (code > 96) {
        return code - 96;
    } else {
        return code - 38;
    }
});

const sum = values.reduce((sum, curr) => sum + curr);
console.log(sum);