'use strict';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var Denque = require('../../denque');
var DenqueMod = require('../../denque-dnlmlr');
var DoubleEndedQueue = require('double-ended-queue');

var denque = new Denque();
var denqueMod = new DenqueMod();
var doubleEndedQueue = new DoubleEndedQueue();

var l = 2000000;

while (--l) {
  denque.push(l);
  denqueMod.push(l);
  doubleEndedQueue.push(l);
}

suite
  .add('denque', function () {
    var arr = denque.toArray();
  })
  .add('denque (mod)', function () {
    var arr = denqueMod.toArray();
  })
  .add('double-ended-queue', function () {
    var arr = doubleEndedQueue.toArray();
  })
  .on('cycle', function (e) {
    console.log('' + e.target);
  })
  .run();
