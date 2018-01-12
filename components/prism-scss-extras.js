// Add CSS extras.
var css = Prism.languages.css;
Prism.languages.insertBefore("scss", "function", {
    builtin: css.builtin,
    hexcode: css.hexcode,
    number: css.number
});

Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss);
