const assert = require('assert');
try {
  const conf = require('../.eslintrc.js');
  console.log(conf)
} catch(e) {
  console.log(e)
  return assert(false, 'require of eslintrc failed, possibly a syntax error in the JS file');
}
assert(true);

