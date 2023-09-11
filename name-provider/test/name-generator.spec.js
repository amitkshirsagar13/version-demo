const utils = require('..');
const assert = require('assert')
console.log(utils.getVersion())
assert.strictEqual(utils.getNameWith10To20(), 'amit');

console.log(`\u001B[32m✓\u001B[39m Tests passed`);