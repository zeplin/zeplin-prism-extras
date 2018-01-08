module.exports = {
    extends: "@zeplin/eslint-config",
    globals: {
        "Prism": false
    },
    rules: {
        // Add `ignoreRegExpLiterals`.
        "max-len": ["error", {
            "code": 120,
            "ignoreComments": true,
            "ignoreRegExpLiterals": true
        }]
    }
};
