// square-character-problem
function squareCharacter(str) {
    let text = "";
    [...str].forEach(letter => text += `[${letter}]`);
    console.log(str, "=>", text);
}

// character-counter
function countCharacter(str, ch) {
    var count = [...str].filter(letter => letter === ch).length;
    console.log(`${str} has ${ch} ${count} time[s]`);
}

// source-code-counter
function countSourceCode() {
    const fs = require('fs');
    fs.readFile('main.js', (err, data) =>
        console.log(`main.js has ${data.toString().length} characters`));
}

module.exports.countSourceCode = countSourceCode;
module.exports.squareCharacter = squareCharacter;
module.exports.countCharacter = countCharacter;
