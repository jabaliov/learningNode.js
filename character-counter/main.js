const str = process.argv[2] ? process.argv[2] : 'test';
const ch = process.argv[3] ? process.argv[3] : 't';

// String.prototype.split()
var count = str.split(ch).length - 1;
console.log(count);

// Array.prototype.filter()
var count = [...str].filter(letter => letter === ch).length;
console.log(count);