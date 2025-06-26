//  Insertion Sort — Logic in Simple Words:
// Start from the second item.

// Compare it with items before it.

// Keep moving it left until it’s in the correct position.

// Repeat this for every item in the list.

// Avg,worst Time Complexity - O(n2)
// best Time Complexity - O(n)
// Space Complexity O(1)

function insertionSort(arr) {

    let n = arr.length
    for(let i=0;i<n; i++) {

        let j = i
        // Shift elements of the sorted part to the right if they're greater than arr[j]
        while(j>0 && arr[j] < arr[j - 1]) {
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            j--;
        }
    }
    return arr
}

console.log(insertionSort([5,3,7,0,1,3,8]))