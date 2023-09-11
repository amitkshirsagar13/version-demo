const utils = require('..');
const assert = require('assert');

console.log(utils.get3dName());
assert.notEqual(utils.get3dName(), 'amit');

console.log(`\u001B[32m✓\u001B[39m Tests passed`);