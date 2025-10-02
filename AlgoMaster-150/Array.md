 1 [Move Zeroes](#move-zeroes)
 2 [Majority Element](#majority-element)
 3 [Move Zeroes](#move-zeroes)
 4 [Move Zeroes](#move-zeroes)
 5 [Move Zeroes](#move-zeroes)


# Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

### Brute Force Approach

**Intuition:**
In this approach, we create a new array for storing the non-zero elements and then add zeros to fill up the remaining places.

```typescript
function moveZeroes(nums: number[]): void {
    // Step 1: Store the non-zero elements in a new array
    const nonZeroes: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nonZeroes.push(nums[i]);
        }
    }
    // Step 2: Update the original array with non-zero elements
    for (let i = 0; i < nonZeroes.length; i++) {
        nums[i] = nonZeroes[i];
    }
    // Step 3: Fill in the remaining part of the array with zeroes
    for (let i = nonZeroes.length; i < nums.length; i++) {
        nums[i] = 0;
    }
}
```
**Time Complexity:** O(n), where n is the number of elements in the array.  
**Space Complexity:** O(n), as we are using additional space to store the non-zero elements.

### Two-Pointer Approach

**Intuition:**
In this approach, we make use of two pointers: one to iterate over the array and another to track the position where the next non-zero element should be placed.

```typescript
function moveZeroes(nums: number[]): void {
    let position = 0; // This variable keeps track of the place to put the non-zero element
    // Step 1: Move all non-zero elements to the beginning of the array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[position] = nums[i];
            position++;
        }
    }
    // Step 2: Fill the remaining part of the array with zeros
    for (let i = position; i < nums.length; i++) {
        nums[i] = 0;
    }
}
```

**Time Complexity:** O(n), as we are iterating the array twice in the worst-case scenario.  
**Space Complexity:** O(1), since we are modifying the array in-place without using extra space.

### Optimized Two-Pointer Approach

**Intuition:**
The previous two-pointer method can be further optimized by swapping elements in the array so that we can reduce the overall iterations.

```typescript
function moveZeroes(nums: number[]): void {
    let lastNonZeroFoundAt = 0; // Index of last found non-zero element

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap the elements at indices i and lastNonZeroFoundAt
            [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++; // Increment lastNonZeroFoundAt index
        }
    }
}
```
**Time Complexity:** O(n), since we are making one pass through the array.  
**Space Complexity:** O(1), as we are not using any extra space and modifying the array in-place.

This solution is optimal in terms of both time and space as it's straightforward, efficient, and handles all edge cases naturally.

# Majority Element
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

### My Solution
```javascript
var majorityElement = function(nums) {
    
    for(i=0; i<nums.length; i++) {
        let count = 0;
        for(j=i;j<nums.length; j++) {
            if(nums[i] === nums[j]) {
                count++
            }
        }
        if(count >= nums.length/2) return nums[i]
    }
};
```

### HashMap Approach

**Intuition:**

The basic idea is to use a HashMap to count the occurrences of each element in the array. The element with a count greater than `n/2` is the majority element.

**Steps:**
1. Initialize an empty HashMap to store the count of each element.
2. Iterate through the array, and for each element, update its count in the HashMap.
3. As soon as an element’s count becomes greater than `n/2`, return that element.

**Code:**

```javascript
function majorityElement(nums) {
    const countMap = new Map();
    
    for (let num of nums) {
        // Update the count of each number in the map
        countMap.set(num, (countMap.get(num) || 0) + 1);
        
        // Check if any number appears more than n/2 times
        if (countMap.get(num) > Math.floor(nums.length / 2)) {
            return num;
        }
    }
}
```

**Time Complexity:** O(n) - We traverse the array once.
**Space Complexity:** O(n) - We store counts for up to n/2 + 1 different elements.

---

### Sorting Approach

**Intuition:**

By sorting the array, the majority element (which appears more than n/2 times) must be present in the middle of the array.

**Steps:**
1. Sort the array.
2. Return the element at the middle index.

**Code:**

```javascript
function majorityElement(nums) {
    // Sort the array
    nums.sort((a, b) => a - b);
    
    // Return the middle element, which is guaranteed to be the majority element
    return nums[Math.floor(nums.length / 2)];
}
```

**Time Complexity:** O(n log n) - Due to the sort operation.
**Space Complexity:** O(1) - Ignoring the space used by sort.

---

### Boyer-Moore Voting Algorithm

**Intuition:**

This optimal approach involves counting a candidate element against others. If a number is the majority, it will be the last element standing after cancellations.

**Steps:**
1. Initialize `count` as 0 and `candidate` as undefined at the start.
2. Loop through the array:
   - If `count` is 0, set the current number as `candidate` and increment `count`.
   - If the current number is the same as `candidate`, increment `count`.
   - Otherwise, decrement `count`.
3. Return `candidate`, the majority element.

**Code:**

```javascript
function majorityElement(nums) {
    let count = 0;
    let candidate = null;
    
    for (let num of nums) {
        // Assign a new candidate if count drops to zero
        if (count === 0) {
            candidate = num;
        }
        
        // Increment or decrement the count
        count += (num === candidate) ? 1 : -1;
    }
    
    // The remaining candidate is the majority element
    return candidate;
}
```

**Time Complexity:** O(n) - We traverse the array once.
**Space Complexity:** O(1) - Only constant space is used.

---
