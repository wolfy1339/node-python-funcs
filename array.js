const {range, len} = require('./index.js');

/**
* Yield successive n-sized chunks from l.
* @generator
* @param {array} l
* @param {number} n
* @yields {array}
*/
function* chunks(l, n) {
    for (let i of range(0, len(l), n)) {
        yield l.slice(i, i + n);
    }
}

module.exports = {
    chunks
};
