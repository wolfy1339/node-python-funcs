function* enumerate(iterable, start=0) {
    if (isinstance(iterable, Array)) {
        yield iterable.entries();
    } else {
        let keys = Object.keys(iterable);
        let x = [];
        for (let i of range(start, len(keys))) {
            x.push([i, keys[i]]);
        }
        yield x;
    }
}

function all(iterable) {
    for (let element of iterable) {
        if (!element) {
            return false;
        }
    }
    return true;
}

function any(iterable) {
    for (let element of iterable) {
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
