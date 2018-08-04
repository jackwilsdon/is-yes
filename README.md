# is-yes [![NPM Version Badge]][NPM] ![Node Version Badge] [![Build Status Badge]][Travis CI] [![Coverage Badge]][Coverage]

Is it yes?

## Installation

```Shell
npm install --save is-yes
```

or

```Shell
yarn add is-yes
```

## Usage

```JavaScript
var isYes = require('is-yes');

console.log(isYes('yes')); // true
console.log(isYes('y'));   // true
console.log(isYes('no'));  // false
```

## What counts as "yes"?

* `"yes"`
* `"y"`
* `"1"` or `1`
* `"true"` or `true`

> **Note:** strings are case-insensitive.

[NPM Version Badge]: https://img.shields.io/npm/v/is-yes.svg
[NPM]: https://npmjs.com/package/is-yes
[Node Version Badge]: https://img.shields.io/node/v/is-yes.svg
[Build Status Badge]: https://img.shields.io/travis/jackwilsdon/is-yes.svg
[Travis CI]: https://travis-ci.org/jackwilsdon/is-yes
[Coverage Badge]: https://img.shields.io/codecov/c/github/jackwilsdon/is-yes.svg
[Coverage]: https://codecov.io/gh/jackwilsdon/is-yes
