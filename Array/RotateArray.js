function rotate(nums, k) {
    const n = nums.length;
    k = k % n;

    for (let i = 0; i < k; i++) {
        const last = nums[n - 1];

        for (let j = n - 1; j > 0; j--) {
            nums[j] = nums[j - 1];
        }

        nums[0] = last;
    }
}

function rotate(nums, k) {
    const n = nums.length;
    k = k % n;

    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };

    reverse(0, n - 1);     // Reverse the whole array
    reverse(0, k - 1);     // Reverse the first k elements
    reverse(k, n - 1);     // Reverse the rest
}

