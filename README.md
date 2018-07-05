# is-yes ![NPM Version] ![Node Version] [![Build Status]][Travis CI] ![Coverage]

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

* yes
* y
* 1
* true

> **Note:** these are all case-insensitive.

[NPM Version]: https://img.shields.io/npm/v/is-yes.svg
[Node Version]: https://img.shields.io/node/v/is-yes.svg
[Build Status]: https://img.shields.io/travis/jackwilsdon/is-yes.svg
[Travis CI]: https://travis-ci.org/jackwilsdon/is-yes
[Coverage]: https://img.shields.io/codecov/c/github/jackwilsdon/is-yes.svg
