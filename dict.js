/** Class to imitate Python dicts */
class dict extends Object {
    /**
    * @param {object} value - The native JavaScript object you wish to use
    */
    constructor(value) {
        super();
        this.map = new Map();
        this.update(value);
    }

    /**
    * @func
    * @return {array}
    */
    items() {
        return this.map.entries();
    }

    /**
    * @func
    */
    clear() {
        return this.map.clear();
    }

    /**
    * @func
    * @param {string} key
    * @param {*} [def=null]
    * @return {(object|array|string|function|boolean|number)}
    */
    get(key, def=null) {
        return this.map.get(key) || def;
    }

    /**
    * @func
    * @param {string} key
    * @param {*} [def=null]
    * @return {*}
    */
    pop(key, def=null) {
        const old = this[key];

        this.map.delete(key);

        return old || def;
    }

    /**
    * @func
    * @param {string} key
    * @param {*} [def=null]
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
        return this.map.keys();
    }

    /**
    * @func
    * @param {object} other
    */
    update(other) {
        for (const key of Object.keys(other)) {
            if (other[key] instanceof Object && !(other[key] instanceof Array)) {
                this[key] = new dict(other[key]);
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
