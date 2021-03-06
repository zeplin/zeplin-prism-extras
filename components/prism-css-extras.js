Prism.languages.insertBefore("css", "function", {
    builtin: /\b(thin|medium|thick|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|to|left|right|top|bottom|normal|bold|bolder|lighter|start|end|center|justify|match-parent|flex-start|flex-end|flex|stretch|inherit|space-between|row|column)/,
    hexcode: /#[\da-f]{3,8}/i,
    // Add units.
    number: /-?\d+(\.\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?/i
});
