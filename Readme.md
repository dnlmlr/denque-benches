# A benchmark collection for Denque Optimizations

## Setup
Clone the repository
```
$ git clone --recurse-submodules https://github.com/dnlmlr/denque-benches.git
$ cd denque-benches/benchmark
```

Install node dependencies (`benchmark` + `double-ended-queue`)
```
$ npm install
```

## Running all benchmarks 

On windows (powershell):
```
> cd benchmark
> run_benches.ps1
```

On linux / windows git-bash / WSL:
```
$ cd benchmark
$ sh run_benches.sh
```

## Running a specific benchmark
```
$ cd benchmark
$ node bench/<name_of_the_benchmark>
```

----

## Raw benchmark results
The new modified `denque` implementation is annotated with `(mod)`

```
Platform info:
Windows_NT 10.0.19044 x64
Node.JS 18.5.0
V8 10.2.154.4-node.8
AMD Ryzen 7 2700X Eight-Core Processor          × 16

Running fromArray.js
denque x 338 ops/sec ±0.88% (84 runs sampled)
denque (mod) x 841 ops/sec ±1.01% (85 runs sampled)
double-ended-queue x 176 ops/sec ±0.90% (81 runs sampled)

Running growth.js
denque x 50,294 ops/sec ±0.39% (88 runs sampled)
denque (mod) x 50,851 ops/sec ±0.28% (90 runs sampled)
double-ended-queue x 21,285 ops/sec ±0.51% (94 runs sampled)

Running remove.js
denque.remove x 2,470 ops/sec ±31.83% (6 runs sampled)
denque.remove (mod) x 2,139 ops/sec ±30.54% (6 runs sampled)
native array splice - Fails to complete: "JavaScript heap out of memory"

Running removeOne.js
denque.removeOne x 1,171,792 ops/sec ±0.46% (94 runs sampled)
denque.removeOne (mod) x 1,236,335 ops/sec ±0.38% (95 runs sampled)
native array splice x 4,320 ops/sec ±0.77% (94 runs sampled)

Running splice.js
denque.splice x 950,129 ops/sec ±9.75% (88 runs sampled)
denque.splice (mod) x 962,798 ops/sec ±8.34% (85 runs sampled)
native array splice x 14,511 ops/sec ±17.35% (38 runs sampled)

Running thousand.js
denque x 65,783,074 ops/sec ±0.48% (94 runs sampled)
denque (mod) x 65,483,349 ops/sec ±0.56% (90 runs sampled)
double-ended-queue x 18,703,210 ops/sec ±0.73% (92 runs sampled)

Running thousandMoreOps.js
denque x 222,110 ops/sec ±0.42% (91 runs sampled)
denque (mod) x 215,668 ops/sec ±0.37% (91 runs sampled)
double-ended-queue x 98,750 ops/sec ±0.82% (88 runs sampled)

Running toArray.js
denque (head at 0) x 92.41 ops/sec ±0.97% (68 runs sampled)
denque (mod) (head at 0) x 156 ops/sec ±1.33% (72 runs sampled)
double-ended-queue (head at 0) x 87.69 ops/sec ±1.05% (74 runs sampled)
denque (non-contiguous) x 90.74 ops/sec ±0.89% (66 runs sampled)
denque (mod) (non-contiguous) x 91.14 ops/sec ±0.91% (67 runs sampled)
double-ended-queue (non-contiguous) x 88.43 ops/sec ±0.69% (75 runs sampled)
denque (non zero head) x 39.84 ops/sec ±0.71% (53 runs sampled)
denque (mod) (non zero head) x 151 ops/sec ±0.94% (70 runs sampled)
double-ended-queue (non zero head) x 87.74 ops/sec ±0.73% (74 runs sampled)
array copy (prealloc + for loop) x 94.32 ops/sec ±0.67% (71 runs sampled)
array copy (no prealloc + for loop) x 27.99 ops/sec ±5.86% (48 runs sampled)
array copy (slice) x 157 ops/sec ±0.43% (79 runs sampled)

Running two_million.js
denque x 63,283,756 ops/sec ±0.41% (89 runs sampled)
denque (mod) x 63,768,029 ops/sec ±0.16% (91 runs sampled)
double-ended-queue x 19,506,413 ops/sec ±0.97% (90 runs sampled)

Running two_millionMoreOps.js
denque x 221,129 ops/sec ±0.53% (89 runs sampled)
denque (mod) x 222,186 ops/sec ±0.16% (95 runs sampled)
double-ended-queue x 106,333 ops/sec ±1.00% (96 runs sampled)
```