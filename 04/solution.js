const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf-8').split('\n').filter(line => line != "");

const ranges = lines.map(line => line.split(',').map(part => part.split('-').map(num => parseInt(num))));

const containingAll = ranges.filter(pair => {
    return pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1] || pair[1][0] <= pair[0][0] && pair[1][1] >= pair[0][1]
});

console.log(containingAll.length);