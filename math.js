/* eslint-disable require-jsdoc */
function sum(start=0, ...numbers) {
    let x = start;

    for (const i of numbers) {
        x += i;
    }

    return x;
}

/**
* @param {number} a
* @param {number} b
* @return {array}
*/
function divmod(a, b) {
    return [Math.floor(a / b), a % b];
}

/**
* @param {number} base
* @param {number} exp
* @param {numbet} [modulo=1]
* @return {number}
*/
function pow(base, exp, modulo=1) {
    if (exp < 0 && modulo) {
        throw Error('modulo must be ommited if the exponent is negative');
    }

    return Math.pow(base, exp) % modulo;
}

function round(number, precision) {
    return Math.round(number).toPrecision(precision);
}

const abs = Math.abs;

module.exports = {
    sum,
    abs,
    divmod,
    pow,
    round
};
