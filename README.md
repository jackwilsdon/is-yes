# is-yes

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
