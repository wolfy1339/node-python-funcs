/* eslint-disable no-unused-vars */
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

    for (let i=start; step > 0 ? i < stop : i > stop; i += step) {
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

/* eslint-disable require-jsdoc */
/**
* Print objects to the text stream file, separated by sep and followed by end. sep, end, file and flush, if present, must be given as keyword arguments.
* All arguments are converted to strings like str() does and written to the stream, separated by sep and followed by end. Both sep and end must be strings; they can also be None, which means to use the default values. If no objects are given, print() will just write end.
* The file argument must be an object with a write(string) method; if it is not present or None, sys.stdout will be used. Since printed arguments are converted to text strings, print() cannot be used with binary mode file objects. For these, use file.write(...) instead.
Whether output is buffered is usually determined by file, but if the flush keyword argument is true, the stream is forcibly flushed.
* @func
* @param {(array|string)} data
* @param {string} sep
* @param {string} end
* @param {object} file
*/
function print(data, sep=' ', end='\n', file=process.stdout) {
    if (file === undefined || file === null || (file !== undefined && typeof file.write === 'undefined')) {
        file = process.stdout;
    }
    let text = null;

    if (typeof data !== 'string') {
        for (const i of range(len(data))) {
            data[i] = data[i].toString();
        }
        text = data.join(sep);
    }
    file.write(`${text || data}${end}`);
}

/**
* @param {*} object
* @param {function} type
* @return {boolean}
*/
function isinstance(object, type) {
    return object instanceof type;
}

function dir(something) {
    return Object.keys(something);
}

function isASCII(char) {
    // eslint-disable-next-line no-control-regex
    return /^[\x00-\x7F]*$/.test(char);
}

function ascii(string) {
    let s = '';

    for (const i of string) {
        if (!isASCII(i)) {
            s += `\\u${i.codePointAt(0)}`;
        } else {
            s += i;
        }
    }

    return s;
}

function callable(thing) {
    return typeof thing === 'function';
}

function chr(code) {
    return String.fromCharCode(code);
}

function globals() {
    return global;
}

function issubclass(class1, classinfo) {
    if (typeof class1 !== 'function' || typeof classinfo !== 'function') {
        throw TypeError('issubclass() args must be a class or list of classes');
    }

    return class1.prototype instanceof classinfo;
}

function next(iterable, def) {
    return iterable.next() || def;
}

/* function* zip(...iterables) {
    // zip('ABCD', 'xy') --> Ax By
    const sentinel = Object();
    const iterators = [];

    for (const i of iterables) {
        iterators.push(iter(i));
    }
    while (iterators) {
        const result = [];

        for (const it of iterators) {
            const elem = next(it, sentinel);

            if (elem === sentinel) {
                yield;
            }
            result.append(elem);
        }
        yield tuple(result);
    }
}*/

class bytearray {
    constructor(source, encoding, errors) {
        if (typeof source === 'string') {
            this.source = Buffer(source).toString('hex');

            return this.source;
        } else if (typeof source == 'number') {
            new Array(source);
        } else if (typeof source == 'function') {
            Array.from(source);
        }
    }

    static fromhex(string) {
        return Buffer(string).toString();
    }

    hex() {
        return Buffer(this).toString('hex');
    }
}

const bool = Boolean;
const dict = require('./dict');
const str = require('./str');
const array = require('./array');
const math = require('./math');
const numbers = require('./numbers');
const iteration = require('./iteration');
const attributes = require('./attributes');

module.exports = {
    range,
    len,
    ...str,
    ...array,
    dict,
    print,
    ...str,
    isinstance,
    dir,
    ...numbers,
    ascii,
    ...math,
    bool,
    callable,
    chr,
    ...attributes,
    bytearray,
    ...iteration,
    globals
};
