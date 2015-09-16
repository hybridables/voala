/*!
 * voala <https://github.com/tunnckoCore/voala>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var inherits = require('util').inherits
var isObject = require('is-real-object')
var isError = require('is-typeof-error')
var Emitter = require('component-emitter')
var nowAndLater = require('now-and-later')
var onetime = require('onetime')
var dezalgo = require('dezalgo')
var sliced = require('sliced')
var assert = require('assert')
var merz = require('merz')

module.exports = Voala

function Voala (options) {
  if (!(this instanceof Voala)) {
    return new Voala(options)
  }
  Emitter.call(this)
  this.tests = {}
  this.stats = {
    testCount: 0,
    passCount: 0,
    failCount: 0
  }
  this.options = isObject(options) ? options : {}
}

inherits(Voala, Emitter)

Voala.prototype.option = function () {
  // body...
}

Voala.prototype.test = function (title, fn) {
  assert(typeof title === 'string', 'expect `title` to be string')
  // assert(typeof fn === 'function', 'expect `fn` to be function')

  fn.title = title
  this.stats.testCount++
  this.tests[title] = fn
  return this
}

Voala.prototype.run = function (callback) {
  assert(typeof callback === 'function', 'expect `callback` to be function')
  callback = onetime(dezalgo(callback))

  this.emit('start')
  nowAndLater.mapSeries(this.tests, function (fn, next) {
    this.title = fn.title
    this.emit('beforeEach', fn, next)
    merz.call(this, fn)(function (err, res) {
      var args = sliced(arguments, 1)

      if (!isError(err)) {
        this.stats.passCount++
        this.emit('pass', fn)
        this.emit('afterEach', fn)
        return next.apply(this, [null].concat(args))
      }

      err.fn = fn
      err.title = fn.title
      this.error = err
      this.stats.failCount++
      this.emit('fail', err)
      this.emit('afterEach', err)

      if (this.options.settle === true) {
        return next.apply(this, [null, err].concat(args))
      }
      next.apply(this, arguments)
    })
  }.bind(this), function () {
    this.emit.apply(this, ['end'].concat(sliced(arguments)))
    callback.apply(this, arguments)
  }.bind(this))
}
