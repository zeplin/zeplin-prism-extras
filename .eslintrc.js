module.exports = {
    extends: "@zeplin/eslint-config",
    parserOptions: {
        ecmaVersion: 5
    },
    globals: {
        "Prism": false
    },
    rules: {
        "no-var": "off",
        // Add `ignoreRegExpLiterals`.
        "max-len": ["error", {
            "code": 120,
            "ignoreComments": true,
            "ignoreRegExpLiterals": true
        }]
    }
};
