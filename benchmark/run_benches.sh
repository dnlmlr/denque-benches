node print.js

for bench in bench/*.js; do
    echo "Running $(basename $bench)"
    node $bench
    echo ""
done