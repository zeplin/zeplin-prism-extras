// Modify XML only, removing `style`.
var xml = Prism.util.clone(Prism.languages.markup);
delete xml.style;
delete xml.tag.inside["style-attr"];

Prism.languages.xml = xml;
