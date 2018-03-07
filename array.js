const {range, len} = require('./index.js');

/** */
class list extends Array {
    /**
    * @param {(array|number|generator)} [iterable]
    */
    constructor(iterable) {
        if (!(iterable instanceof Array)) {
            super();
            let x = Array.from(iterable);
            for (let i of range(len(x))) {
                this[i] = x[i];
            }
        } else {
            super(iterable);
        }
    }

    /**
    * @func
    * @param {function} [key=null]
    * @param {boolean} [reverse=false]
    * @return {array}
    */
    sort(key=null, reverse=false) {
        if (typeof key === 'function') {
            return super.sort(key);
        }
        return super.sort();
    }

    /**
    * @param {number} [start=0]
    * @param {number} stop
    * @param {number} [step=1]
    * @return {array}
    */
    slice(start=0, stop, step=1) {
        let iterable;
        let x = this;
        if (typeof stop == 'undefined') {
            // one param defined
            stop = start;
            start = 0;
            iterable = range(stop);
        } else {
            iterable = range(start, stop, step);
        }

        for (let i of iterable) {
            x.pop(i);
        }

        return x;
    }
}

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
    list,
    chunks
};
