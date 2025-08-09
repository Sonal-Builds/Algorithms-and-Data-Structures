function singleNumber(nums) {
    let xor = 0;

    // XOR all numbers to get a XOR b
    for (let num of nums) {
        xor ^= num;
    }

    // Find the rightmost set bit in xor (a XOR b)
    let diffBit = xor & -xor;

    // Initialize result numbers
    let num1 = 0, num2 = 0;

    // Separate numbers into two groups and XOR within them
    for (let num of nums) {
        if (num & diffBit) {
            num1 ^= num; // XOR group one
        } else {
            num2 ^= num; // XOR group two
        }
    }

    return [num1, num2];
}