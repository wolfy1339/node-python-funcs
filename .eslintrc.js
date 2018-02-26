module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true
        }
    },
    "extends": ["eslint:recommended", "google"],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "max-len": [
            "error",
            {
                "code": 120,
                "tabWidth": 4,
                "ignoreComments": true,
                "ignoreTrailingComments": true,
                "ignoreUrls": true,
            }
        ],
        "no-shadow": "error",
        "no-useless-return": "error",
        "no-cond-assign": "error",
        "block-scoped-var": "error",
        "no-else-return": "error",
        "no-undef-init": "error"
    }
};