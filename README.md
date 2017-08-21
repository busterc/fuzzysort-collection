# fuzzysort-collection [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Fast SublimeText-like fuzzy search for collections

Thanks to [@farzher](https://github.com/farzher) for [fuzzysort](https://github.com/farzher/fuzzysort)

## Installation

```sh
$ npm install --save fuzzysort-collection
```

## Usage

```js
const fuzz = require('fuzzysort-collection');

// You can config fuzzysort options:
// https://github.com/farzher/fuzzysort#options
fuzz.fuzzysort.highlightOpen = '<strong>';
fuzz.fuzzysort.highlightClose = '</strong>';

const crop = [{
  a: {
    b: 'Snap'
  }
}, {
  a: {
    b: 'Paypal'
  }
}, {
  a: {
    b: 'Google'
  }
}, {
  a: {
    b: 'Apple'
  }
}];

let cream = fuzz('ap', crop, 'a.b');
/*
[
  {
    "meta": {
      "matches": [
        0,
        1
      ],
      "target": "Apple",
      "lower": "apple",
      "score": 3,
      "theMatches": [
        0,
        1
      ],
      "highlighted": "<strong>Ap</strong>ple"
    },
    "data": {
      "a": {
        "b": "Apple"
      }
    }
  },
  {
    "meta": {
      "matches": [
        2,
        3
      ],
      "target": "Snap",
      "lower": "snap",
      "score": 2002,
      "theMatches": [
        2,
        3
      ],
      "highlighted": "Sn<strong>ap</strong>"
    },
    "data": {
      "a": {
        "b": "Snap"
      }
    }
  },
  {
    "meta": {
      "matches": [
        1,
        3
      ],
      "target": "Paypal",
      "lower": "paypal",
      "score": 4004,
      "theMatches": [
        1,
        3
      ],
      "highlighted": "P<strong>a</strong>y<strong>p</strong>al"
    },
    "data": {
      "a": {
        "b": "Paypal"
      }
    }
  }
]
*/
```
## License

ISC © [Buster Collings](https://about.me/buster)


[npm-image]: https://badge.fury.io/js/fuzzysort-collection.svg
[npm-url]: https://npmjs.org/package/fuzzysort-collection
[travis-image]: https://travis-ci.org/busterc/fuzzysort-collection.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/fuzzysort-collection
[daviddm-image]: https://david-dm.org/busterc/fuzzysort-collection.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/busterc/fuzzysort-collection
[coveralls-image]: https://coveralls.io/repos/busterc/fuzzysort-collection/badge.svg
[coveralls-url]: https://coveralls.io/r/busterc/fuzzysort-collection
