/**
 * Function to imitate Python's range function
 * Returns an Array that produces a sequence of integers from start (inclusive) to stop (exclusive) by step.
 * @generator
 * @param {number} [start=0] - The starting number. Defaults to 0.
 * @param {number} stop - The end number.
 * @param {number} [step=1] - Specifies the increment (or decrement). Defaults to 1.
 * @yields {array} - An Array containing the specified range.
 */
function* range(start, stop, step=1) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        yield [];
    }

    for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
        yield i;
    }
}

/**
 * Function to imitate Python's len() function.
 * Wrapper function around the `.length` property
 * @func
 * @param {*} thing
 * @return {number}
 */
function len(thing) {
    return thing.length;
}

const dict = require('./dict');
const str = require('./str');
const array = require('./array');

module.exports = {
    range,
    len,
    ...str,
    ...array,
    dict
};
