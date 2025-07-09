
// Bubble Sort
const arr = [4,2,5,1,3]
function bubbleSort(arr) {
    const n = arr.length;
    for(i=n-1; i > 0; i--) {
        let swapped = false;
        for(j=0; j<i; j++) {
        
            if(arr[j] > arr[j + 1]) {
                [arr[j],arr[j+1]] =[arr[j+1],arr[j]]
                swapped = true
            }
        }
        if (swapped === false) break;
    }
    console.log(arr)   
}
bubbleSort(arr)