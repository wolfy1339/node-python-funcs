const util = require('util');

/**
 * Function to imitate Python's str.split method, since JavaScript can't split x times
 * @func
 * @param {string} string - The string you want split.
 * @param {string} sep - The seperator by which you want the string to be split
 * @return {array} - An Array containing the split string
 */
function partition(string, sep) {
    if (string.indexOf(sep) > -1) {
        let x = string.split(sep);

        return [x[0], sep, x[1]];
    }

    return [string, '', ''];
}

/**
 * Function to imitate Python's `str.partition()` method, since JavaScript can't split x times
 * @func
 * @param {string} string - The string you want split.
 * @param {string} sep - The seperator by which you want the string to be split
 * @param {number} [maxCount=null] - The maximum count of times you wish to split
 * @return {array} - An Array containing the split string
 */
function split(string, sep, maxCount=null) {
    if (maxCount !== null && typeof maxCount === 'number') {
        if (!string.includes(sep)) {
            return [string];
        }
        string = string.split(sep);
        const first = string.slice(0, maxCount);
        const second = string.slice(maxCount).join(sep);

        return [...first, second];
    }

    return string.split(sep);
}

/** Class to imitate Python str */
class str extends String {
    /**
    * @param {string} string
    */
    constructor(string) {
        super(string);
    }

    /**
    * @func
    * @return {string}
    */
    format(...args) {
        let that = this.replace(new RegExp('({(?:[0-9]+)*(?:!s)})', 'g'), '%s');

        that = that.replace(new RegExp('({(?:[0-9]+)*(?:!d)})', 'g'), '%d');
        that = that.replace(new RegExp('({(?:[0-9]+)*})', 'g'), '%s');

        return util.format(that, ...args);
    }

    /**
    * @func
    * @extends partition
    * @param {string} sep - The seperator by which you want the string to be split
     * @return {array} - An Array containing the split string
    */
    partition(sep) {
        return partition(this, sep);
    }

    /**
    * @func
    * @extends split
    * @param {string} sep - The seperator by which you want the string to be split
    * @param {number} [maxCount=null] - The maximum count of times you wish to split
    * @return {array} - An Array containing the split string
    */
    split(sep, maxCount=null) {
        return split(this, maxCount);
    }
}

module.exports = {
    partition,
    split,
    str
};
