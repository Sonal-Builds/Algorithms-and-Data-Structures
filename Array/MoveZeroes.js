//Leetcode-283
var moveZeroes = function(nums) {
    if(nums.length == 1) return nums
    
    for(i=nums.length - 1;i>=0;i--) {
        let swapped = false
        for(j=0;j<i;j++) {
            if(nums[j] === 0) {
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
                swapped = true
            }

        }
         if(swapped === false) return nums
    }
};

var moveZeroes = function(nums) {
    let i = 0;
    for(let j = 0; j < nums.length; j++) {
        if(nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
};


var moveZeroes = function(nums) {
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[count] = nums[i];
            count++;
        }
    }
    while(count < nums.length){
        nums[count] = 0;
        count++;
    }
    return nums;
};
