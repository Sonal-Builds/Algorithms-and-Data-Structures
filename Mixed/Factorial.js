//Time Complexity: O(n)
//Space Complexity: O(1)
function Factorial(n) {
    let result = 1
    for(i=1; i<=n; i++ ) {
        result *=  i;
    }
    return `${n}! = ${result}`;
}

console.log(Factorial(0))
console.log(Factorial(1))
console.log(Factorial(2))
console.log(Factorial(100)) 

function FactorialRecuesive(n) {
    if (n === 0 || n === 1) return 1;
    return n * FactorialRecuesive(n-1)
}

console.log(FactorialRecuesive(0))
console.log(FactorialRecuesive(1))
console.log(FactorialRecuesive(2))
console.log(FactorialRecuesive(100))


