const fs = require('fs');

const lines = fs.readFileSync('input.txt', 'utf-8').split('\n');

const stackLines = lines.slice(0, lines.indexOf("") - 1);
const operationLines = lines.slice(lines.indexOf("") + 1);

const stackCount = parseInt((stackLines[0].length - 2) / 4 + 1);
const stacks = [];

for (let i = 0; i < stackCount; i++) {
    const stack = [];

    for (let j = stackLines.length - 1; j >= 0; j--) {
        const line = stackLines[j];

        const col = 1 + i * 4;
        const char = line[col];

        if (char === " ") {
            continue;
        }
        stack.push(char);
    }

    stacks.push(stack);
}

const parsedInstructions = operationLines.map(line => line.split(" ").filter(part => part != "move" && part != "from" && part != "to").map(it => parseInt(it)));

const doInstruction = (instruction) => {
    const start = instruction[1] - 1;
    const end = instruction[2] - 1;
    for (let i = 0; i < instruction[0]; i++) {
        const item = stacks[start].pop();
        stacks[end].push(item);
    }
}

parsedInstructions.forEach(doInstruction);

const topItems = stacks.map(stack => stack[stack.length - 1]);
const topItemsStr = topItems.reduce((str, curr) => str + curr, "");
console.log(topItemsStr);