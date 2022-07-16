# Baseline benchmark inconsistencies
The javascript benchmarks are at times extremely inconsistent. The following benchmark results are 
supposed to be a reference on the possible inconsistencies. In this run, the original and (mod) 
variants are the exact same (reproducible by running `git checkout master` in the `denque-dnlmlr` 
directory). 

There are statistically significant differences between the same code variants (original 
vs mod), despite best efforts to minimize other system load besides nodejs.


```
Platform info:
Windows_NT 10.0.19044 x64
Node.JS 18.5.0
V8 10.2.154.4-node.8
AMD Ryzen 7 2700X Eight-Core Processor          × 16

Running fromArray.js
denque x 335 ops/sec ±0.68% (84 runs sampled)
denque (mod) x 332 ops/sec ±0.88% (83 runs sampled)
double-ended-queue x 173 ops/sec ±0.94% (79 runs sampled)

Running growth.js
denque x 50,777 ops/sec ±0.37% (90 runs sampled)
denque (mod) x 51,207 ops/sec ±0.32% (94 runs sampled)
double-ended-queue x 21,403 ops/sec ±0.31% (93 runs sampled)

Running remove.js
denque.remove x 2,454 ops/sec ±28.44% (6 runs sampled)
denque.remove (mod) x 2,469 ops/sec ±29.51% (6 runs sampled)
native array splice - Fails to complete: "JavaScript heap out of memory"

Running removeOne.js
denque.removeOne x 1,170,791 ops/sec ±0.13% (92 runs sampled)
denque.removeOne (mod) x 1,157,747 ops/sec ±0.65% (95 runs sampled)
native array splice x 4,334 ops/sec ±0.44% (94 runs sampled)

Running splice.js
denque.splice x 948,710 ops/sec ±8.36% (86 runs sampled)
denque.splice (mod) x 969,432 ops/sec ±7.61% (86 runs sampled)
native array splice x 9,815 ops/sec ±35.85% (28 runs sampled)

Running thousand.js
denque x 66,173,728 ops/sec ±0.43% (96 runs sampled)
denque (mod) x 55,276,526 ops/sec ±0.62% (84 runs sampled)
double-ended-queue x 20,143,438 ops/sec ±1.00% (91 runs sampled)

Running thousandMoreOps.js
denque x 215,766 ops/sec ±0.60% (94 runs sampled)
denque (mod) x 210,601 ops/sec ±0.27% (96 runs sampled)
double-ended-queue x 107,626 ops/sec ±0.73% (93 runs sampled)

Running toArray.js
denque (head at 0) x 93.31 ops/sec ±0.98% (69 runs sampled)
denque (mod) (head at 0) x 93.14 ops/sec ±0.75% (68 runs sampled)
double-ended-queue (head at 0) x 89.12 ops/sec ±0.62% (75 runs sampled)
denque (non-contiguous) x 91.54 ops/sec ±0.65% (69 runs sampled)
denque (mod) (non-contiguous) x 91.56 ops/sec ±0.68% (77 runs sampled)
double-ended-queue (non-contiguous) x 88.27 ops/sec ±0.66% (75 runs sampled)
denque (non zero head) x 39.45 ops/sec ±0.79% (52 runs sampled)
denque (mod) (non zero head) x 39.56 ops/sec ±0.59% (52 runs sampled)
double-ended-queue (non zero head) x 88.38 ops/sec ±0.59% (75 runs sampled)
array copy (prealloc + for loop) x 94.45 ops/sec ±0.82% (69 runs sampled)
array copy (no prealloc + for loop) x 27.97 ops/sec ±5.83% (49 runs sampled)
array copy (slice) x 157 ops/sec ±0.61% (79 runs sampled)

Running two_million.js
denque x 63,066,623 ops/sec ±0.81% (95 runs sampled)
denque (mod) x 62,907,679 ops/sec ±0.89% (91 runs sampled)
double-ended-queue x 21,501,938 ops/sec ±0.71% (90 runs sampled)

Running two_millionMoreOps.js
denque x 216,282 ops/sec ±0.52% (96 runs sampled)
denque (mod) x 213,476 ops/sec ±0.62% (93 runs sampled)
double-ended-queue x 106,338 ops/sec ±0.90% (94 runs sampled)
```
