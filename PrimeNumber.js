//Big-O = O(sqrt(n))
function PrimeNumber(n) {
    if (n < 2 ) return 'not prime';
    if (n == 2) return 'prime';
    if (n % 2 === 0) return 'not prime';

    for(i=3; i<=Math.sqrt(n); i += 2) {
        if(n % i == 0) return 'notPrime'
    }
    return 'prime'
}

console.log(PrimeNumber(0))
console.log(PrimeNumber(1))
console.log(PrimeNumber(4))
console.log(PrimeNumber(13))