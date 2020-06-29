
# عد عدد الأحرف في ملف البرنامج

قم باستخدام

node.js

بعمل

module

سمه

counter.js

يحتوي على ثلاث دوال برمجية

الأولى تقوم بعد عدد مرات تكرار رمز أو حرف أو رقم في نص ما

الثانية تقوم بوضع قوس على كل حرف في النص المرسل لها

الثالثة تقوم بعد عدد الأحرف الموجودة في ملف 

main.js

قم أيضاً بإنشاء ملف أخر اسمه

main.js

وقم من خلاله باستدعاء الموديول الأول و تجربة الدوال التي تم إنشاءها في الموديول

## الشيفرة

counter.js

```js
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

```

main.js

```js
let counter = require('./counter');

const str = process.argv[2] ? process.argv[2] : 'test';
const ch = process.argv[3] ? process.argv[3] : 't';

counter.squareCharacter(str);
counter.countCharacter(str,ch);
counter.countSourceCode();
```

## مثال للاستخدام
```bash
node main.js Makkah k
```

## المخرج
```bash
Makkah => [M][a][k][k][a][h]
Makkah has k 2 time[s]
main.js has 234 characters
```