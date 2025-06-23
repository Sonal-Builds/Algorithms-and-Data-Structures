//Big-O = O(n)
function Factorial(n) {
    let result = 1
    for (i = 2; i <= n; i++) {
        result *= i
        console.log(`${i} * ${result / i} = ${result}`)
    }
    return result
}

console.log(Factorial(0))
console.log(Factorial(1))
console.log(Factorial(4))