//Big-o = O(log(n))
function PowerofTwo(n) {
    if(n < 1) return "Not power of 2'"
    while(n > 1) {
        if(n % 2 != 0) return 'Not power of 2';
        n /= 2
    }
    return "Power of 2"
}
console.log(PowerofTwo(2))
console.log(PowerofTwo(20))
console.log(PowerofTwo(0))



//Big-O = 0(1)
function isPowerofTwoBitwise(n) {
if (n < 1) return false;
return (n & (n-1)) === 0;
}

console.log(isPowerofTwoBitwise(16))

