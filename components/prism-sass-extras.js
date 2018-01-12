var sass = Prism.languages.sass;

// Add `function` and CSS extras.
var css = Prism.languages.css;
[sass["variable-line"], sass["property-line"]].forEach(function (object) {
    Prism.languages.insertBefore("inside", "variable", {
        builtin: css.builtin,
        hexcode: css.hexcode,
        number: css.number,
        function: css.function
    }, object);
});
