Prism.languages.insertBefore("objectivec", "string", {
    // Add types with a framework prefix.
    builtin: /\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\w+/
});

// Add `_Nonnull`, `_Nullable`, `_Null_unspecified`.
Prism.languages.objectivec.keyword = /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector|_Nonnull|_Nullable|_Null_unspecified)\b/;
