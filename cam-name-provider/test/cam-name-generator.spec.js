const utils = require('..');
const assert = require('assert')

console.log(utils.getCamName())
assert.notEqual(utils.getCamName(), 'amit');

console.log(`\u001B[32m✓\u001B[39m Tests passed`);