var swift = Prism.languages.swift;

// Add `objcMembers`, `nonobjc`, `discardableResult`.
swift.atrule = /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|objcMembers|nonobjc|UIApplicationMain|auto_closure|discardableResult)\b/;

// Avoid keywords followed by `func`, `var`, `let`.
swift["class-name"].pattern = /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+(?!(func|var|let)))|(?:catch\s+\())[\w.\\]+/i;
