'use strict';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var Denque = require('../../denque');
var DenqueMod = require('../../denque-dnlmlr');

var denque = new Denque();
var denqueMod = new DenqueMod();
var array = []

var l = 100000;
while (--l) {
  denque.push(l);
  denqueMod.push(l);
  array.push(l);
}

suite
  .add('denque.splice', function () {
    denque.splice(111, 1, 11, 12, 13, 14, 15, 16);
  })
  .add('denque.splice (mod)', function () {
    denqueMod.splice(111, 1, 11, 12, 13, 14, 15, 16);
  })
  .add('native array splice', function () {
    array.splice(111, 1, 11, 12, 13, 14, 15, 16);
  })
  .on('cycle', function (e) {
    console.log('' + e.target);
  })
  .run();
