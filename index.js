/* eslint-disable no-unused-vars */


const bool = Boolean;
const dict = require('./dict');
const str = require('./str');
const array = require('./array');
const math = require('./math');
const numbers = require('./numbers');
const iteration = require('./iteration');
const attributes = require('./attributes');
const lib = require('./lib')

module.exports = {
    ...str,
    ...array,
    dict,
    ...str,
    ...numbers,
    ...math,
    bool,
    ...attributes,
    ...iteration,
    ...lib
};
