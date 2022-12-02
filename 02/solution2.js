const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf-8').split('\n').filter(line => line != "");

const winPoints = {
    A: {
        X: 3, // lose (3 + 0)
        Y: 4, // draw (1 + 3)
        Z: 8 // win (2 + 6)
    },
    B: {
        X: 1, // lose (1 + 0)
        Y: 5, // draw (2 + 3)
        Z: 9 // win (3 + 6)
    },
    C: {
        X: 2, // lose (2 + 0)
        Y: 6, // draw (3 + 3)
        Z: 7 // win (1 + 6)
    }
};

const parings = lines.map(line => line.split(" "));
const scores = parings.map(pair => winPoints[pair[0]][pair[1]]);
const sum = scores.reduce((sum, curr) => sum + curr, 0);
console.log(sum);