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
const n = 100;

while (--l) {
  denque.push(l);
  denqueMod.push(l);
  doubleEndedQueue.push(l);
}

suite
  .add('denque', function () {
    for (let i = 0; i < n; i++) {
        const a = denque.shift();
        const b = denque.shift();
        const c = denque.shift();
        const d = denque.shift();
        
        denque.push(a);
        denque.push(b);
        
        const e = denque.shift();
        const f = denque.shift();
        
        denque.push(c);
        denque.push(d);
        denque.push(e);
        denque.push(f);
    }
  })
  .add('denque (mod)', function () {
    for (let i = 0; i < n; i++) {
        const a = denqueMod.shift();
        const b = denqueMod.shift();
        const c = denqueMod.shift();
        const d = denqueMod.shift();
        
        denqueMod.push(a);
        denqueMod.push(b);
        
        const e = denqueMod.shift();
        const f = denqueMod.shift();
        
        denqueMod.push(c);
        denqueMod.push(d);
        denqueMod.push(e);
        denqueMod.push(f);
    }
  })
  .add('double-ended-queue', function () {
    for (let i = 0; i < n; i++) {
        const a = doubleEndedQueue.shift();
        const b = doubleEndedQueue.shift();
        const c = doubleEndedQueue.shift();
        const d = doubleEndedQueue.shift();
        
        doubleEndedQueue.push(a);
        doubleEndedQueue.push(b);
        
        const e = doubleEndedQueue.shift();
        const f = doubleEndedQueue.shift();
        
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
