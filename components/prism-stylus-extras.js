// `inside` is referenced and cloned to multiple rules.
var inside = Prism.languages.stylus["atrule-declaration"].inside.rest;

// Add CSS extras.
var css = Prism.languages.css;
[inside, inside.interpolation.inside, inside.func.inside.rest].forEach(function (insideObject) {
    insideObject.builtin = css.builtin;
    insideObject.number = css.number;
});
