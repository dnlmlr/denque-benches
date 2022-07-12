'use strict';

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const Denque = require('../../denque');
const DenqueMod = require('../../denque-dnlmlr');
const DoubleEndedQueue = require('double-ended-queue');

const denque = new Denque();
const denqueMod = new DenqueMod();
const doubleEndedQueue = new DoubleEndedQueue();

let l = 2_000_000;

while (--l) {
  denque.push(l);
  denqueMod.push(l);
  doubleEndedQueue.push(l);
}

suite
  .add('denque', function () {
    const arr = denque.toArray();
  })
  .add('denque (mod)', function () {
    const arr = denqueMod.toArray();
  })
  .add('double-ended-queue', function () {
    const arr = doubleEndedQueue.toArray();
  })
  .on('cycle', function (e) {
    console.log('' + e.target);
  })
  .run();
