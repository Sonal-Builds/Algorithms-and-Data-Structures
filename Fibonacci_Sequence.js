//Big-O = O(n)
function FibonacciSequence(n) {   
    let arr = [0, 1]
    if (n == 2) return arr
    if (n < 2) return console.log("No value for this")

    for (i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr
}
// console.log(FibonacciSequence(2))
// console.log(FibonacciSequence(0))
// console.log(FibonacciSequence(10))
// console.log(FibonacciSequence(-5))
// console.log(FibonacciSequence(4.5))