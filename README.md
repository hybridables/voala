# [voala][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> WIP. Ultimate, feature-rich, minimal and stable testing framework for the future. ES2015-ready.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i voala --save
```


## Features
- extremely small, fast and lightweight
- before, after, before each, after each hooks
- support generators, promises and callbacks - out of the box
- series, settle series, parallel and settle parallel flows (settle means that it won't stop on first failure)
- test coverage reporting - out of the box
- javascript API for running tests 
- command-line API for running multiple files using globs
- proper exit status
- highlights slow tests
- skipping (not showing on the list) and pending (showing without execution) tests
- prevent multiple calls to done() out of the box
- use any assertion library you want, one built-in
- extensible custom reporters, one built-in - mocha's spec
- meaningful error outputs (and showing stacktraces through option) 


## Usage
> For more use-cases see the [tests](./test.js)

```js
var voala = require('voala')
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/voala/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/voala
[npmjs-img]: https://img.shields.io/npm/v/voala.svg?label=voala

[license-url]: https://github.com/tunnckoCore/voala/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/voala
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/voala.svg

[travis-url]: https://travis-ci.org/tunnckoCore/voala
[travis-img]: https://img.shields.io/travis/tunnckoCore/voala.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/voala
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/voala.svg

[david-url]: https://david-dm.org/tunnckoCore/voala
[david-img]: https://img.shields.io/david/tunnckoCore/voala.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg