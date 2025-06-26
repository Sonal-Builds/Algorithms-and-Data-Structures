// 🟢 Selection Sort — Logic in Simple Words:
// Go through the list and find the smallest item.

// Put it at the beginning.

// Then find the next smallest and place it next.

// Continue this until the whole list is sorted.

// Time Complexity O(n2)
// Space Complexity O(1)

function selectionSort(arr) {
    const n = arr.length;

    for(let i=0;i<n-1;i++) {
        // Assume the current index is the smallest
        let findmin = i;

        // Find the actual smallest element in the unsorted part
        for(let j=i+1;j<n;j++) {
            if(arr[j]< arr[findmin]) {
                findmin = j
            }
        }
        
        //Swap
        if(i !== findmin) {
            [arr[i],arr[findmin]] = [arr[findmin],arr[i]]
        }
    }
    return arr
}


console.log(SelectionSort([1,4,6,3,7,2]))
console.log(SelectionSort([1,4,-1,3,5,2]))
console.log(SelectionSort([1,10,6,3,7,2]))