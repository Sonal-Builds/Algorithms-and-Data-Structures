Sum of Two Integers


var getSum = function(a, b) {
    if (b === 0) return a; // Base case: if no carry left, return a
    return getSum(a ^ b, (a & b) << 1); // Recursive step with sum and carry
};