const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf-8').split('\n').filter(line => line != "");

const points = {
    X: 1,
    Y: 2,
    Z: 3
};

const winPoints = {
    A: {
        X: 3,
        Y: 6,
        Z: 0
    },
    B: {
        X: 0,
        Y: 3,
        Z: 6
    },
    C: {
        X: 6,
        Y: 0,
        Z: 3
    }
};

const parings = lines.map(line => line.split(" "));
const scores = parings.map(pair => points[pair[1]] + winPoints[pair[0]][pair[1]]);
const sum = scores.reduce((sum, curr) => sum + curr, 0);
console.log(sum);