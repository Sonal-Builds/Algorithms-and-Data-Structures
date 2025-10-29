
// Using SORT Methode

function getSecondLargest(arr) {
       if(arr.length < 2) return -1;
       
       // sort in descending order
       arr.sort((a,b) => b - a);
       
       //find the first element smaller than largest
       let largest = arr[0];
       for(let i=0; i<arr.length; i++) {
           if(arr[i] < largest) return arr[i];
       }
       
       return -1 //if all elements are -1
        
    }

console.log(getSecondLargest([5,10,5,15,5,15,10,12,0,12]))

// Using Linear Methode

function getSecondLargest(arr) {
       if(arr.length < 2) return -1;
       
       let largest = -Infinity;
       let secondLargest = -Infinity;
       
       for(let num of arr) {
           if(num > largest) {
               
               [largest,secondLargest] = [num,largest]
           
               
           } else if(num > secondLargest && num !== largest) {
               
               secondLargest = num
           }
       }
       
       return secondLargest == -Infinity ? -1 : secondLargest
       
        
    }

    // One-liner Version

    const getSecondLargest = arr =>
  [...new Set(arr)].sort((a, b) => b - a)[1] ?? -1;

/*

| Method                 | Time       | Handles Negatives | Handles Duplicates | Simplicity   |
| ---------------------- | ---------- | ----------------- | ------------------ | ------------ |
| Loop                   | O(n)       | ✅                 | ✅                  | Moderate     |
| Sort-based             | O(n log n) | ✅                 | ✅                  | Simple       |
| One-liner (Set + sort) | O(n log n) | ✅                 | ✅                  | Very concise |


*/