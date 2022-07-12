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

Running growth.js
denque x 27,636 ops/sec ±1.73% (82 runs sampled)
denque (mod) x 50,995 ops/sec ±0.30% (93 runs sampled)
double-ended-queue x 21,171 ops/sec ±0.16% (95 runs sampled)

Running remove.js
denque.remove x 2,151 ops/sec ±29.03% (6 runs sampled)
denque.remove (mod) x 2,449 ops/sec ±27.02% (6 runs sampled)
native array splice - Fails to complete: "JavaScript heap out of memory"

Running removeOne.js
denque.removeOne x 1,170,924 ops/sec ±0.27% (96 runs sampled)
denque.removeOne (mod) x 1,167,770 ops/sec ±0.37% (95 runs sampled)
native array splice x 4,173 ops/sec ±1.39% (93 runs sampled)

Running splice.js
denque.splice x 827,636 ops/sec ±20.30% (77 runs sampled)
denque.splice (mod) x 955,175 ops/sec ±7.15% (84 runs sampled)
native array splice x 10,934 ops/sec ±36.89% (28 runs sampled)

Running thousand.js
denque x 66,398,925 ops/sec ±0.41% (94 runs sampled)
denque (mod) x 66,697,893 ops/sec ±0.22% (91 runs sampled)
double-ended-queue x 21,810,206 ops/sec ±0.77% (90 runs sampled)

Running thousandMoreOps.js
denque x 226,565 ops/sec ±0.28% (89 runs sampled)
denque (mod) x 210,319 ops/sec ±0.22% (88 runs sampled)
double-ended-queue x 105,193 ops/sec ±0.59% (90 runs sampled)

Running toArray.js
denque x 22.74 ops/sec ±2.37% (41 runs sampled)
denque (mod) x 106 ops/sec ±0.42% (76 runs sampled)
double-ended-queue x 99.84 ops/sec ±0.48% (73 runs sampled)

Running two_million.js
denque x 63,113,721 ops/sec ±0.48% (92 runs sampled)
denque (mod) x 63,833,386 ops/sec ±0.51% (90 runs sampled)
double-ended-queue x 22,283,212 ops/sec ±0.69% (93 runs sampled)

Running two_millionMoreOps.js
denque x 210,574 ops/sec ±0.37% (83 runs sampled)
denque (mod) x 214,149 ops/sec ±0.36% (92 runs sampled)
double-ended-queue x 106,901 ops/sec ±0.31% (92 runs sampled)
```