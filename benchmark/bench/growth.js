'use strict';

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const Denque = require('../../denque');
const DenqueMod = require('../../denque-dnlmlr');
const DoubleEndedQueue = require('double-ended-queue');

const n = 1_000;

suite
  .add('denque', function () {
    const denque = new Denque();

    for (let i = 0; i < n; i++) denque.push(i);
    for (let i = 0; i < n / 2; i++) denque.shift();
    for (let i = 0; i < n; i++) denque.push(i);
    for (let i = 0; i < n + n / 2; i++) denque.shift();
  })
  .add('denque (mod)', function () {
    const denqueMod = new DenqueMod();

    for (let i = 0; i < n; i++) denqueMod.push(i);
    for (let i = 0; i < n / 2; i++) denqueMod.shift();
    for (let i = 0; i < n; i++) denqueMod.push(i);
    for (let i = 0; i < n + n / 2; i++) denqueMod.shift();
  })
  .add('double-ended-queue', function () {
    const doubleEndedQueue = new DoubleEndedQueue();

    for (let i = 0; i < n; i++) doubleEndedQueue.push(i);
    for (let i = 0; i < n / 2; i++) doubleEndedQueue.shift();
    for (let i = 0; i < n; i++) doubleEndedQueue.push(i);
    for (let i = 0; i < n + n / 2; i++) doubleEndedQueue.shift();
  })
  .on('cycle', function (e) {
    console.log('' + e.target);
  })
  .run();
