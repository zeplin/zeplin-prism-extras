// Modify and clone `inside`.
var inside = Prism.languages.stylus["atrule-declaration"].inside.rest;

// Add CSS extras.
var css = Prism.languages.css;
inside.builtin = css.builtin;
inside.number = css.number;

inside.interpolation.inside = Prism.util.clone(inside);
inside.func.inside.rest = Prism.util.clone(inside);
