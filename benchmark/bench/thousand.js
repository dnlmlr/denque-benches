'use strict';

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const Denque = require('../../denque');
const DenqueMod = require('../../denque-dnlmlr');
const DoubleEndedQueue = require('double-ended-queue');

const denque = new Denque();
const denqueMod = new DenqueMod();
const doubleEndedQueue = new DoubleEndedQueue();

let l = 1_000;

while (--l) {
  denque.push(l);
  denqueMod.push(l);
  doubleEndedQueue.push(l);
}

suite
  .add('denque', function () {
    const a = denque.shift();
    const b = denque.shift();
    const c = denque.shift();

    denque.push(a);
    denque.push(b);
    denque.push(c);
  })
  .add('denque (mod)', function () {
    const a = denqueMod.shift();
    const b = denqueMod.shift();
    const c = denqueMod.shift();

    denqueMod.push(a);
    denqueMod.push(b);
    denqueMod.push(c);
  })
  .add('double-ended-queue', function () {
    const a = doubleEndedQueue.shift();
    const b = doubleEndedQueue.shift();
    const c = doubleEndedQueue.shift();

    doubleEndedQueue.push(a);
    doubleEndedQueue.push(b);
    doubleEndedQueue.push(c);
  })
  .on('cycle', function (e) {
    console.log('' + e.target);
  })
  .run();
