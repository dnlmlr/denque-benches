node print.js

foreach ($bench in Get-ChildItem bench) {
    $name = $bench.Name
    echo "Running $name"
    node "bench/$name"
    echo ""
}