const fs = require('fs');

const lines = Array.from(fs.readFileSync('input.txt', 'utf-8').split('\n'));

let tree = {
    name: "/",
    size: 0,
    children: []
};

function updateTree(currentLevel, tree, index, lines) {
    const linesToCheck = [];
    for (let i = index + 1; i < lines.length; i++) {
        if (lines[i].startsWith("$")) {
            break;
        }
        linesToCheck.push(lines[i]);
    }
    const currentDir = currentLevel.length === 1 ?
     tree :
     currentLevel.slice(1).reduce((dir, curr) => {
        return dir.children.find(child => child.name === curr)
    }, tree)

    linesToCheck.forEach(line => {
        if (line.startsWith("dir")) {
            currentDir.children.push({
                name: line.split(" ")[1],
                size: 0,
                children: []
            });
        } else {
            currentDir.children.push({
                name: line.split(" ")[1],
                size: parseInt(line.split(" ")[0]),
                children: []
            });
        }
    });
}

let currentLevel = ["/"];
lines.forEach((line, index) => {
    if (line.startsWith("$")) {
        if (line.split(" ")[1] === "ls") {
            updateTree(currentLevel, tree, index, lines);
        } else {
            const dest = line.split(" ")[2];
            if (dest === "..") {
                currentLevel.pop();
            } else if (dest === "/") {
                currentLevel = ["/"];
            } else {
                currentLevel.push(dest);
            }
        }
    }
});

const totalSize = 70000000;
const requiredFree = 30000000;

function getSize(item) {
    return item.size + item.children.map(getSize).reduce((sum, curr) => sum + curr, 0);
}

function flatTree(tree) {
    return [tree].concat(tree.children.flatMap(flatTree));
}

const currentUsedSpace = getSize(tree);
const freeSpace = totalSize - currentUsedSpace;
const spaceToFree = requiredFree - freeSpace;

console.log(flatTree(tree).filter(item => item.size === 0).map(getSize).filter(size => size >= spaceToFree).reduce((low, curr) => curr < low ? curr: low))