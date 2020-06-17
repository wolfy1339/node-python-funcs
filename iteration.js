const { isinstance, range, len } = require('./lib');

function* enumerate(iterable, start=0) {
    if (isinstance(iterable, Array)) {
        yield iterable.entries();
    } else {
        const keys = Object.keys(iterable);
        const x = [];

        for (const i of range(start, len(keys))) {
            x.push([i, keys[i]]);
        }
        yield x;
    }
}

function all(iterable) {
    for (const element of iterable) {
        if (!element) {
            return false;
        }
    }

    return true;
}

function any(iterable) {
    for (const element of iterable) {
        if (element) {
            return true;
        }
    }

    return false;
}

module.exports = {
    enumerate,
    any,
    all
};
