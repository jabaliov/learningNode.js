
# عد عدد الأحرف في ملف البرنامج

قم باستخدام

node.js

بكتابة شفرة برمجية لعد عدد الأحرف الموجودة في نفس الملف البرمجي

## الشيفرة

```js
const fs = require('fs');
fs.readFile('main.js', (err, data) =>
    console.log(data.toString().length));
```

## مثال للاستخدام
```bash
node main.js
```

## المخرج
```bash
105
```