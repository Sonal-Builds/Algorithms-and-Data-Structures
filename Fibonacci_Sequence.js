
//Time Complexity: O(n)
//Space Complexity: O(n)
function fibonacci(n) {
    let fib = [0,1]
    if(n < 0) return 'Not Valid';
    if(n < 2) return fib[n];
    for(i=2; i<=n; i++) {
        fib[i] = fib[i-1] +fib[i-2]
    }
    return fib[n]
}
console.log(fibonacci(-1))
console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))




//Time Complexity: O(n)
//Space Complexity: O(1)
function fibonacci2(n) {
    if (n < 0) return 'invalid'
    
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0, curr = 1;

    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }

    return curr;
}

console.log(fibonacci2(-1))
console.log(fibonacci2(0))
console.log(fibonacci2(1))
console.log(fibonacci2(2))
console.log(fibonacci2(3))