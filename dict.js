/** Class to imitate Python dicts */
class dict extends Object {

    /**
    * @param {object} value - The native JavaScript object you wish to
    */
    constructor(value) {
        super(value);
    }

    /**
    * @func
    * @return {array}
    */
    items() {
        return Object.entries(this);
    }

    /**
    * @func
    */
    clear() {
        for (let key of this.keys()) {
            delete this[key];
        }
    }

    /**
    * @func
    * @param {string} key
    * @param {*} [def]
    * @return {(object|array|string|function|boolean|number)}
    */
    get(key, def=null) {
        return this[key] || def;
    }

    /**
    * @func
    * @param {string} key
    * @param {*} [def]
    * @return {*}
    */
    pop(key, def=null) {
        let old = this[key];

        delete this[key];

        return old || def;
    }

    /**
    * @func
    * @param {string} key
    * @param {*} [def]
    * @return {*}
    */
    setdefault(key, def=null) {
        if (typeof this[key] === 'undefined') {
            this[key] = def;
        }

        return this[key];
    }

    /**
    * @func
    * @return {array}
    */
    keys() {
        return Object.keys(this);
    }

    /**
    * @func
    * @param {object} other
    */
    update(other) {
        for (let key of Object.keys(other)) {
            if (typeof other[key] === 'object' && other[key] !== null && !(other[key] instanceof Array)) {
                this[key] = new Dict();
                this[key].update(other[key]);
            } else {
                this[key] = other[key];
            }
        }
    }

    /**
    * @func
    * @return {array}
    */
    values() {
        return Object.values(this);
    }
}

module.exports = dict;
