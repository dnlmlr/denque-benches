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
  .add('denque.remove', function () {
    denque.remove(111, 10);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
  })
  .add('denque.remove (mod)', function () {
    denqueMod.remove(111, 10);
    denqueMod.push(11);
    denqueMod.push(11);
    denqueMod.push(11);
    denqueMod.push(11);
    denqueMod.push(11);
    denqueMod.push(11);
    denqueMod.push(11);
    denqueMod.push(11);
    denqueMod.push(11);
    denqueMod.push(11);
  })
  .add('native array splice', function () {
    array.splice(111, 10);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
    denque.push(11);
  })
  .on('cycle', function (e) {
    console.log('' + e.target);
  })
  .run();
