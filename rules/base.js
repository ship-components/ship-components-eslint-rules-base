module.exports = {
  "parserOptions": {
    "sourceType": "module" // set to "script" (default) or "module" if your code is in ECMAScript modules.
  },

  "env": {
    "node": true         // Node.js global variables and Node.js-specific rules.
  },

  "rules": {
    ////////// Possible Errors //////////

    "comma-dangle": "error",            // disallow trailing commas in object literals
    "no-cond-assign": "error",          // disallow assignment in conditional expressions
    "no-console": "off",                // disallow use of console (off by default in the node environment)
    "no-constant-condition": "error",   // disallow use of constant expressions in conditions
    "no-control-regex": "error",        // disallow control characters in regular expressions
    "no-debugger": "warn",              // disallow use of debugger
    "no-dupe-keys": "error",            // disallow duplicate keys when creating object literals
    "no-empty": "off",                  // disallow empty statements
    "no-empty-character-class": "error",// disallow the use of empty character classes in regular expressions
    "no-ex-assign": "error",            // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": "error",   // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": "off",           // disallow unnecessary parentheses (off by default)
    "no-extra-semi": "error",           // disallow unnecessary semicolons
    "no-func-assign": "error",          // disallow overwriting functions written as function declarations
    "no-inner-declarations": "error",   // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": "error",       // disallow invalid regular expression strings in the RegExp constructor
    "no-irregular-whitespace": "error", // disallow irregular whitespace outside of strings and comments
    "no-negated-in-lhs": "error",       // disallow negation of the left operand of an in expression
    "no-obj-calls": "error",            // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": "error",         // disallow multiple spaces in a regular expression literal
    "quote-props": "off",               // disallow reserved words being used as object literal keys (off by default)
    "no-sparse-arrays": "error",        // disallow sparse arrays
    "no-unreachable": "error",          // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": "error",               // disallow comparisons with the value NaN
    "valid-jsdoc": "off",               // Ensure JSDoc comments are valid (off by default)
    "valid-typeof": "error",            // Ensure that the results of typeof are compared against a valid string


    ////////// Best Practices //////////

    "block-scoped-var": "warn",     // treat var statements as if they were block scoped (off by default)
    "complexity": [1, 7],           // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "consistent-return": "off",     // require return statements to either always or never specify values
    "curly": [1, "all"],            // specify curly brace conventions for all control statements
    "default-case": "off",          // require default case in switch statements (off by default)
    "dot-notation": "warn",         // encourages use of dot notation whenever possible
    "eqeqeq": "warn",               // require the use of === and !==
    "guard-for-in": "warn",         // make sure for-in loops have an if statement (off by default)
    "no-alert": "warn",             // disallow the use of alert, confirm, and prompt
    "no-caller": "warn",            // disallow use of arguments.caller or arguments.callee
    "no-div-regex": "warn",         // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-else-return": "off",        // disallow else after a return in an if (off by default)
    "no-eq-null": "warn",           // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": "warn",              // disallow use of eval()
    "no-extend-native": "warn",     // disallow adding to native types
    "no-extra-bind": "warn",        // disallow unnecessary function binding
    "no-fallthrough": "off",        // disallow fallthrough of case statements
    "no-floating-decimal": "off",   // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-implied-eval": "error",     // disallow use of eval()-like methods
    "no-iterator": "warn",          // disallow usage of __iterator__ property
    "no-labels": "off",             // disallow use of labeled statements
    "no-lone-blocks": "warn",       // disallow unnecessary nested blocks
    "no-loop-func": "warn",         // disallow creation of functions within loops
    "no-multi-spaces": "warn",      // disallow use of multiple spaces
    "no-multi-str": "warn",         // disallow use of multiline strings
    "no-native-reassign": "warn",   // disallow reassignments of native objects
    "no-new": "warn",               // disallow use of new operator when not part of the assignment or comparison
    "no-new-func": "warn",          // disallow use of new operator for Function object
    "no-new-wrappers": "warn",      // disallows creating new instances of String, Number, and Boolean
    "no-octal": "warn",             // disallow use of octal literals
    "no-octal-escape": "warn",      // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-process-env": "off",        // disallow use of process.env (off by default)
    "no-proto": "error",            // disallow usage of __proto__ property
    "no-redeclare": "warn",         // disallow declaring the same variable more then once
    "no-return-assign": "warn",     // disallow use of assignment in return statement
    "no-script-url": "warn",        // disallow use of javascript: urls.
    "no-self-compare": "warn",      // disallow comparisons where both sides are exactly the same (off by default)
    "no-sequences": "warn",         // disallow use of comma operator
    "no-unused-expressions": "warn",// disallow usage of expressions in statement position
    "no-void": "off",               // disallow use of void operator (off by default)
    "no-warning-comments": "off",   // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
    "no-with": "warn",              // disallow use of the with statement
    "radix": "warn",                // require use of the second argument for parseInt() (off by default)
    "vars-on-top": "off",           // requires to declare all vars on top of their containing scope (off by default)
    "wrap-iife": "off",             // require immediate function invocation to be wrapped in parentheses (off by default)
    "yoda": "warn",                 // require or disallow Yoda conditions

    ////////// Strict Mode //////////

    "global-strict": "off",   // (deprecated) require or disallow the "use strict" pragma in the global scope (off by default in the node environment)
    "no-extra-strict": "off", // (deprecated) disallow unnecessary use of "use strict"; when already in strict mode
    "strict": "off",          // controls location of Use Strict Directives

    ////////// Variables //////////

    "no-catch-shadow": "off",              // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": "off",                // disallow deletion of variables
    "no-label-var": "warn",                // disallow labels that share a name with a variable
    "no-shadow": "warn",                   // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": "warn",  // disallow shadowing of names such as arguments
    "no-undef": "warn",                    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef-init": "off",                // disallow use of undefined when initializing variables
    "no-undefined": "off",                 // disallow use of undefined variable (off by default)
    "no-unused-vars": "warn",              // disallow declaration of variables that are not used in the code
    "no-use-before-define": "warn",        // disallow use of variables before they are defined

    ////////// Node.js //////////

    "handle-callback-err": "off",   // enforces error handling in callbacks (off by default) (on by default in the node environment)
    "no-mixed-requires": "off",     // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    "no-new-require": "off",        // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    "no-path-concat": "off",        // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    "no-process-exit": "off",       // disallow process.exit() (on by default in the node environment)
    "no-restricted-modules": "off", // restrict usage of specified node modules (off by default)
    "no-sync": "off",               // disallow use of synchronous methods (off by default)

    ////////// Stylistic Issues //////////

    "brace-style": "warn",              // enforce one true brace style (off by default)
    "camelcase": ["warn", {"properties": "never"}], // require camel case names
    "comma-spacing": "off",             // enforce spacing before and after comma
    "comma-style": "warn",              // enforce one true comma style (off by default)
    "consistent-this": "off",           // enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": "warn",                 // enforce newline at the end of file, with no multiple empty lines
    "func-names": "off",                // require function expressions to have a name (off by default)
    "func-style": "off",                // enforces use of function declarations or expressions (off by default)
    "key-spacing": "off",               // enforces spacing between keys and values in object literal properties
    "max-nested-callbacks": ["error", 3], // specify the maximum depth callbacks can be nested (off by default)
    "new-cap": "warn",                   // require a capital letter for constructors
    "new-parens": "warn",                // disallow the omission of parentheses when invoking a constructor with no arguments
    "no-array-constructor": "warn",      // disallow use of the Array constructor
    "no-inline-comments": "off",         // disallow comments inline after code (off by default)
    "no-lonely-if": "off",               // disallow if as the only statement in an else block (off by default)
    "no-mixed-spaces-and-tabs": "warn",  // disallow mixed spaces and tabs for indentation
    "indent": ["warn", 2],               // enforce consistent indentation
    "no-multiple-empty-lines": "warn",   // disallow multiple empty lines (off by default)
    "no-nested-ternary": "error",        // disallow nested ternary expressions (off by default)
    "no-new-object": "warn",             // disallow use of the Object constructor
    "semi-spacing": "warn",              // disallow space before semicolon
    "no-spaced-func": "off",             // disallow space between function identifier and application
    "no-ternary": "off",                 // disallow the use of ternary operators (off by default)
    "no-trailing-spaces": "warn",        // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": "off",       // disallow dangling underscores in identifiers
    "no-wrap-func": "off",               // disallow wrapping of non-IIFE statements in parens
    "one-var": "off",                    // allow just one var statement per function (off by default)
    "operator-assignment": "off",        // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    "padded-blocks": "off",              // enforce padding within blocks (off by default)
    "quotes": ["warn", "single"],        // specify whether double or single quotes should be used
    "semi": ["warn", "always"],          // require or disallow use of semicolons instead of ASI
    "sort-vars": "off",                  // sort variables within the same declaration block (off by default)
    "space-before-function-paren": [1, "never"], // require a space after function names (off by default)
    "space-after-keywords": "off",       // require a space after certain keywords (off by default)
    "space-before-blocks": "off",        // require or disallow space before blocks (off by default)
    "space-in-brackets": "off",          // require or disallow spaces inside brackets (off by default)
    "space-in-parens": "off",            // require or disallow spaces inside parentheses (off by default)
    "space-infix-ops": "off",            // require spaces around operators
    "space-return-throw-case": "off",    // require a space after return, throw, and case
    "space-unary-ops": "off",            // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "spaced-line-comment": "off",        // require or disallow a space immediately following the // in a line comment (off by default)
    "wrap-regex": "off",                 // require regex literals to be wrapped in parentheses (off by default)
  }
};
