'use strict';

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const Denque = require('../../denque');
const DenqueMod = require('../../denque-dnlmlr');

const denque = new Denque();
const denqueMod = new DenqueMod();
const array = []

let l = 100000;
while (--l) {
  denque.push(l);
  denqueMod.push(l);
  array.push(l);
}

suite
  .add('denque.removeOne', function () {
    const a = denque.removeOne(5);
    const b = denque.removeOne(50);
    const c = denque.removeOne(500);
    denque.push(a);
    denque.push(b);
    denque.push(c);
  })
  .add('denque.removeOne (mod)', function () {
    const a = denqueMod.removeOne(5);
    const b = denqueMod.removeOne(50);
    const c = denqueMod.removeOne(500);
    denqueMod.push(a);
    denqueMod.push(b);
    denqueMod.push(c);
  })
  .add('native array splice', function () {
    const a = array.splice(5, 1)[0];
    const b = array.splice(50, 1)[0];
    const c = array.splice(500, 1)[0];
    array.push(a);
    array.push(b);
    array.push(c);
  })
  .on('cycle', function (e) {
    console.log('' + e.target);
  })
  .run();
