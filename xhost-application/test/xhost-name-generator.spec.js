const utils = require('..');
const assert = require('assert')

console.log(utils.get3dNameX())
console.log(utils.getCamNameX())

assert.notEqual(utils.get3dNameX(), 'amit');
assert.notEqual(utils.getCamNameX(), 'amit');

console.log(`\u001B[32m✓\u001B[39m Tests passed`);