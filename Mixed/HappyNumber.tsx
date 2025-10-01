function isHappy(n) {
    // Helper function to calculate the sum of the square of digits of a number
    function sumOfSquares(num) {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    }
    
    let slow = n;
    let fast = sumOfSquares(n);
    
    // Continue until fast equals 1 (happy number) or slow equals fast (cycle)
    while (fast !== 1 && slow !== fast) {
        slow = sumOfSquares(slow); // move slow pointer by one step
        fast = sumOfSquares(sumOfSquares(fast)); // move fast pointer by two steps
    }

    // If fast equals 1, it's a happy number
    return fast === 1;
}