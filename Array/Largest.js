
//Time Complexity - O(Nlog(N))
//Space Complicity - O(n)

function Largest(arr) {
arr.sort((a,b)=>a-b)
return arr[arr.length -1]

}

// console.log(Largest([4,6,2,9,7,1,3,8]))

//Time Complexity - O(n)
//Space Complicity - O(1)
function Largest2(arr) {
    let max = arr[0]
    for(i=1;i<arr.length;i++) {
        if(max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}

console.log(Largest2([5,2,7,6,10,5,4,3,2]))