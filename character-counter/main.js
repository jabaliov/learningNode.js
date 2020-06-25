const str = process.argv[2];
const ch = process.argv[3];

// String.prototype.split()
var count = str.split(ch).length - 1;
console.log(count);

// Array.prototype.filter()
var count = [...str].filter(letter => letter === ch).length;
console.log(count);

