//Ascending
//Time Complexity - O(n)
//Space Complicity - O(1)

function SortedArray(arr) {
    for(let i=1;i<arr.length;i++) {
        if(arr[i] < arr[i-1]) {
            return false
        }
    }
    return true
}

console.log(SortedArray([1,2,3,4,5,6]))
console.log(SortedArray([6,4,2,5,2,4,5]))


function SortedArray2(arr) {
    for(let i=1;i<arr.length;i++) {
        if(arr[i] > arr[i-1]) {
            return false
        }
    }
    return true
}

console.log(SortedArray2([1,2,3,4,5,6]))
console.log(SortedArray2([6,5,4,3,2,1]))