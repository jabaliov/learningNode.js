const fs = require('fs');
fs.readFile('main.js', (err, data) =>
    console.log(data.toString().length));