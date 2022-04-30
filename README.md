# Blockchain

- Block Class
- Blockchain Class

# ES6 Modules

The ES6 module specification defines a module system in JavaScript using `import` and `export` syntax in NodeJS.

# NodeJS support

When you have "type": "module" in the package.json file, your source code should use import syntax. When you do not have, you should use require syntax.

Adding "type": "module" to the package.json enables ES6 modules.

```javascript
{
 "name": "index",
 "version": "1.0.0",
 "description": "",
 "main": "index.js",
 "type": "module",
 ...
}
```

## Write an named ES6 module:

mymodule.js:

```javascript
export class q {
	constructor() {
		console.log("this is an es6 class!");
	}
}
```

We can then import this module in another file:

```javascript
// loads the 'q' export from 'mymodule.js' in the same path as the page
import { q } from "mymodule.js";

new q(); // -> 'this is an es6 class!'
```

### Other Supported Syntax

There are a few other variations of module syntax, the full list of supported statements is listed below.

```javascript
import 'jquery';                        // import a module without any import bindings
import $ from 'jquery';                 // import the default export of a module
import { $ } from 'jquery';             // import a named export of a module
import { $ as jQuery } from 'jquery';   // import a named export to a different name

export var x = 42;                      // export a named variable
export function foo() {};               // export a named function
export q = {};                          // export shorthand

export default 42;                      // export the default export
export default function foo() {};       // export the default export as a function

export { encrypt };                     // export an existing variable
export { decrypt as dec };              // export a variable as a new name
export { encrypt as en } from 'crypto'; // export an export from another module
export * from 'crypto';                 // export all exports from another module

module crypto from 'crypto';            // import an entire module instance object
```

## Release History

- TDB

## License

Licensed under the MIT license.
