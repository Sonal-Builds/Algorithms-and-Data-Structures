
//Time Complexity - O(n)
//Space Complicity - O(1)

function SecondLarge(arr) {
    large = -Infinity;
    second_large= -Infinity

    for(let num of arr) {
        if(num > large) {
            second_large = large;
            large = num;
        } else if(num > second_large && num !== large) {
            second_large = num
        }
    }

    return second_large
}

console.log(SecondLarge([4,6,2,8,5,9,1,3,4,5]))
console.log(SecondLarge([1,2,3,2,4,3]))

//Time Complexity - O(n)
//Space Complicity - O(1)

function secondSmallest(arr) {
let small = Infinity;
let second_small = Infinity;
for(let num of arr) {
    if(num < small) {
        second_small = small;
        small = num;
    } else if(num < second_small && num !== small) {
        second_small = num;
    }
}
return second_small
}

console.log(secondSmallest([5,2,6,7,4,10,1,0]))