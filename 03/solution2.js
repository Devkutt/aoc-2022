const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf-8').split('\n').filter(line => line != "");

const elfTriples = [];
for (let i = 0; i < lines.length; i += 3) {
    const chunk = lines.slice(i, i + 3);
    elfTriples.push(chunk);
}


const batches = elfTriples.map(([elf1, elf2, elf3]) => Array.from(elf1).find(item => elf2.includes(item) && elf3.includes(item)));

const charCodes = batches.map(item => item.charCodeAt(0));
const values = charCodes.map(code => {
    if (code > 96) {
        return code - 96;
    } else {
        return code - 38;
    }
});

const sum = values.reduce((sum, curr) => sum + curr);
console.log(sum);