/*!
 * voala <https://github.com/tunnckoCore/voala>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var voala = require('./index')({settle: true}) // try settle != false

voala

  /**
   * reporter part
   */

  .on('start', function () {
    console.log('before all tests')
  })
  .on('end', function () {
    console.log('after all tests')
  })
  .on('pass', function () {
    console.log('(pass)', this.title)
  })
  .on('fail', function () {
    console.log('(fail)', this.title)
  })
  .on('beforeEach', function (val) {
    console.log('before:', val.title)
  })
  .on('afterEach', function (val) {
    console.log('after:', val.title)
  })

  /**
   * tests part
   */

  .test('passing result to callback(null, 123)', function (callback) {
    callback(null, 123)
  })
  .test('throwing error from sync function', function () {
    throw new Error('qux error')
  })
  .test('json parse result', function () {
    return JSON.parse('{"foo":"bar"}')
  })
  .test('errored callback', function (callback) {
    callback(new Error('cb error'))
  })
  .test('fs.readFile with callback', function (callback) {
    fs.readFile('package.json', 'utf8', callback)
  })
  .run(function (err, res) {
    console.log('======stats======')
    console.log('Tests count:', this.stats.testCount)
    console.log(this.stats.passCount + ' test(s) passed')
    console.log(this.stats.failCount + ' test(s) failed')
    console.log('=======end=======')
    if (err) console.log('err:', err)
    console.log('res:', res)
  })
