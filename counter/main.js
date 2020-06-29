let counter = require('./counter');

const str = process.argv[2] ? process.argv[2] : 'test';
const ch = process.argv[3] ? process.argv[3] : 't';

counter.squareCharacter(str);
counter.countCharacter(str,ch);
counter.countSourceCode();