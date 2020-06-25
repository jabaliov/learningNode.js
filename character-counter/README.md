
# عد مرات تكرار حرف أو رقم في نص

قم باستخدام

node.js

بكتابة شفرة برمجية لعد عدد مرات تكرار رمز أو حرف أو رقم في نص ما

## الشيفرة

```js
const str = process.argv[2] ? process.argv[2] : 'test';
const ch = process.argv[3] ? process.argv[3] : 't';

// String.prototype.split()
var count = str.split(ch).length - 1;
console.log(count);

// Array.prototype.filter()
var count = [...str].filter(letter => letter === ch).length;
console.log(count);
```

## مثال للاستخدام
```bash
node main.js Makkah k
```

## المخرج
```bash
2
2
```