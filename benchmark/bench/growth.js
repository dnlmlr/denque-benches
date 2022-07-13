'use strict';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var Denque = require('../../denque');
var DenqueMod = require('../../denque-dnlmlr');
var DoubleEndedQueue = require('double-ended-queue');

var n = 1000;

suite
  .add('denque', function () {
    var denque = new Denque();

    for (var i = 0; i < n; i++) denque.push(i);
    for (var i = 0; i < n / 2; i++) denque.shift();
    for (var i = 0; i < n; i++) denque.push(i);
    for (var i = 0; i < n + n / 2; i++) denque.shift();
  })
  .add('denque (mod)', function () {
    var denqueMod = new DenqueMod();

    for (var i = 0; i < n; i++) denqueMod.push(i);
    for (var i = 0; i < n / 2; i++) denqueMod.shift();
    for (var i = 0; i < n; i++) denqueMod.push(i);
    for (var i = 0; i < n + n / 2; i++) denqueMod.shift();
  })
  .add('double-ended-queue', function () {
    var doubleEndedQueue = new DoubleEndedQueue();

    for (var i = 0; i < n; i++) doubleEndedQueue.push(i);
    for (var i = 0; i < n / 2; i++) doubleEndedQueue.shift();
    for (var i = 0; i < n; i++) doubleEndedQueue.push(i);
    for (var i = 0; i < n + n / 2; i++) doubleEndedQueue.shift();
  })
  .on('cycle', function (e) {
    console.log('' + e.target);
  })
  .run();
