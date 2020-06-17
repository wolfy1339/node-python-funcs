function hex(number) {
    const num = Number(number).toString(16);

    if (num.startsWith('-')) {
        return `-0x${num.slice(1)}`;
    }

    return `0x${num}`;
}

function bin(number) {
    const num = Number(number).toString(2);

    if (num.startsWith('-')) {
        return `-0b${num.slice(1)}`;
    }

    return `0b${num}`;
}

function oct(number) {
    const num = Number(number).toString(8);

    if (num.startsWith('-')) {
        return `-0o${num.slice(1)}`;
    }

    return `0o${num}`;
}

module.exports = {
    hex,
    bin,
    oct
};
