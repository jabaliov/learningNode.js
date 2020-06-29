
# عد عدد الأحرف في ملف البرنامج

قم باستخدام

node.js

بكتابة شفرة برمجية تضع قوس حول كل حرف في النص المرسل لها

## الشيفرة

```js
const str = process.argv[2]? process.argv[2] : 'test';
const lineBreak = "-----";
const verticalBar = "|";

// With ES6
console.log(lineBreak, 'ES6', verticalBar, 'forEach', lineBreak);
let text = "";
[...str].forEach(letter => text += '[' + letter + ']');
console.log(text);

// ES6 map
console.log(lineBreak, 'ES6', verticalBar, 'map', lineBreak);
text = "";
str.split('').map(letter => {
    text += '[' + letter + ']';
});
console.log(text);

// ES6 version. map
console.log(lineBreak, 'ES6', verticalBar, '...', verticalBar, 'map', lineBreak);
text = "";
text = [...str].map(letter => '[' + letter + ']');
console.log(...text);
console.log(text.join(''));

// for ... of
console.log(lineBreak, 'for of', lineBreak);
text = "";
for (const letter of str) {
    text += '[' + letter + ']';
}
console.log(text);

// for
console.log(lineBreak, 'for', verticalBar, 'charAt', lineBreak);
text = "";
for (var i = 0, letter = ''; letter = str.charAt(i); i++) {
    text += '[' + letter + ']';
}
console.log(text);

// split -> forEach
console.log(lineBreak, 'split', verticalBar, 'forEach', lineBreak);
text = "";
str.split('').forEach(function (letter) {
    text += '[' + letter + ']';
});
console.log(text);

// for ... in
console.log(lineBreak, 'for in', lineBreak);
text = "";
for (var letterIndex in str) {
    text += '[' + str[letterIndex]+ ']';
}
console.log(text);

```

## مثال للاستخدام
```bash
node main.js test
```

## المخرج
```
----- ES6 | forEach -----
[t][e][s][t]
----- ES6 | map -----
[t][e][s][t]
----- ES6 | ... | map -----
[t] [e] [s] [t]
[t][e][s][t]
----- for of -----
[t][e][s][t]
----- for | charAt -----
[t][e][s][t]
----- split | forEach -----
[t][e][s][t]
----- for in -----
[t][e][s][t]
```