/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let shift = 0;

    // Align m and n until they are equal
    while (left < right) {
        left >>= 1;
        right >>= 1;
        shift++;
    }
    
    // Shift back to the left to align into the correct range
    return left << shift; 
};