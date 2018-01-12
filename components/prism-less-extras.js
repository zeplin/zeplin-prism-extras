// Add CSS extras.
var css = Prism.languages.css;
Prism.languages.insertBefore("less", "function", {
    builtin: css.builtin,
    hexcode: css.hexcode,
    number: css.number
});
