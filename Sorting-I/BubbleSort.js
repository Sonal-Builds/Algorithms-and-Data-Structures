// 🔵 Bubble Sort — Logic in Simple Words:
// Go through the list multiple times.

// Swap neighboring items if they’re in the wrong order.

// After each round, the largest remaining item settles at the end.

// Keep repeating until no swaps are needed.


// Avg,worst Time Complexity - O(n2)
// best Time Complexity - O(n)
// Space Complexity O(1)


function bubbleSort(arr) {
    let n = arr.length;

    for(let i=n-1; i>0; i--) {
        let swapped = false
        for(let j=0;j<i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true
                console.log('inner loop')
            }
        }
        if(!swapped) break;
    }
    return arr
}

// console.log(bubbleSort([5,2,6,3,10,0]))
console.log(bubbleSort([0,1,2,-2,4,5,6]))

