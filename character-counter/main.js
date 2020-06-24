const str = process.argv[2];
const ch = process.argv[3];

// String.prototype.split()
var count = [...str].filter(x => x === ch).length;
console.log(count);

// Array.prototype.filter()
var count = [...str].filter(letter => letter === ch).length;
console.log(count);

