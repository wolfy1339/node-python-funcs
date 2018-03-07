function setattr(thing, attr, value) {
    thing[attr] = value;
}

function delattr(thing, attr) {
    delete thing[attr];
}

function getattr(thing, attr, def) {
    return thing[attr] || def;
}

function hasattr(thing, attr) {
    return Object.keys(thing).includes(attr);
}

module.exports = {
    setattr,
    delattr,
    getattr,
    hasattr
};
