var sass = Prism.languages.sass;

// Add `function` and CSS extras.
var css = Prism.languages.css;
[sass["variable-line"].inside, sass["property-line"].inside].forEach(function (inside) {
    inside.builtin = css.builtin;
    inside.hexcode = css.hexcode;
    inside.number = css.number;
    inside.function = css.function;
});
