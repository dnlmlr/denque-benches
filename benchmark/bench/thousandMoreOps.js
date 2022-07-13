'use strict';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var Denque = require('../../denque');
var DenqueMod = require('../../denque-dnlmlr');
var DoubleEndedQueue = require('double-ended-queue');

var denque = new Denque();
var denqueMod = new DenqueMod();
var doubleEndedQueue = new DoubleEndedQueue();

var l = 1000;
var n = 100;

while (--l) {
  denque.push(l);
  denqueMod.push(l);
  doubleEndedQueue.push(l);
}

suite
  .add('denque', function () {
    for (var i = 0; i < n; i++) {
        var a = denque.shift();
        var b = denque.shift();
        var c = denque.shift();
        var d = denque.shift();
        
        denque.push(a);
        denque.push(b);
        
        var e = denque.shift();
        var f = denque.shift();
        
        denque.push(c);
        denque.push(d);
        denque.push(e);
        denque.push(f);
    }
  })
  .add('denque (mod)', function () {
    for (var i = 0; i < n; i++) {
        var a = denqueMod.shift();
        var b = denqueMod.shift();
        var c = denqueMod.shift();
        var d = denqueMod.shift();
        
        denqueMod.push(a);
        denqueMod.push(b);
        
        var e = denqueMod.shift();
        var f = denqueMod.shift();
        
        denqueMod.push(c);
        denqueMod.push(d);
        denqueMod.push(e);
        denqueMod.push(f);
    }
  })
  .add('double-ended-queue', function () {
    for (var i = 0; i < n; i++) {
        var a = doubleEndedQueue.shift();
        var b = doubleEndedQueue.shift();
        var c = doubleEndedQueue.shift();
        var d = doubleEndedQueue.shift();
        
        doubleEndedQueue.push(a);
        doubleEndedQueue.push(b);
        
        var e = doubleEndedQueue.shift();
        var f = doubleEndedQueue.shift();
        
        doubleEndedQueue.push(c);
        doubleEndedQueue.push(d);
        doubleEndedQueue.push(e);
        doubleEndedQueue.push(f);
    }
  })
  .on('cycle', function (e) {
    console.log('' + e.target);
  })
  .run();
