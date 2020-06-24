console.log(process.argv[2]);
const lineBreak = "-----";
const verticalBar = "|";
// With ES6
console.log(lineBreak, 'ES6', verticalBar, 'forEach', lineBreak);
let text = "";
[...process.argv[2]].forEach(letter => text += '[' + letter + ']');
console.log(text);

// ES6 map
console.log(lineBreak, 'ES6', verticalBar, 'map', lineBreak);
text = "";
process.argv[2].split('').map(letter => {
    text += '[' + letter + ']';
});
console.log(text);

// ES6 version. map
console.log(lineBreak, 'ES6', verticalBar, '...', verticalBar, 'map', lineBreak);
text = "";
text = [...process.argv[2]].map(letter => '[' + letter + ']');
console.log(...text);
console.log(text.join(''));

// With the `of` operator
console.log(lineBreak, 'for of', lineBreak);
text = "";
for (const letter of process.argv[2]) {
    text += '[' + letter + ']';
}
console.log(text);

// With ES5
console.log(lineBreak, 'ES6', verticalBar, 'for', lineBreak);
text = "";
for (var i = 0, letter = ''; letter = process.argv[2].charAt(i); i++) {
    text += '[' + letter + ']';
}
console.log(text);

// ES5 without the for loop:
console.log(lineBreak, 'forEach', lineBreak);
text = "";
process.argv[2].split('').forEach(function (letter) {
    text += '[' + letter + ']';
});
console.log(text);

// for ... in
console.log(lineBreak, 'for in', lineBreak);
text = "";
for (var letterIndex in process.argv[2]) {
    text += '[' + process.argv[2][letterIndex]+ ']';
}
console.log(text);
