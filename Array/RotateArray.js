var rotate = function(nums, k) {

    for(i=1;i<=k;i++) {
        let lastValue = nums[nums.length - 1]
        for(j=nums.length - 2;j>=0;j--) {
            nums[j+1] = nums[j]
        }
        nums[0] = lastValue
    }
    
};