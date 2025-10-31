// Reverse the given Array

// using reverse method

let Arr = [1,2,3,4,5,6]

const reversed = Arr.reverse() // Using  reverse Method but it mutate the orginal array

const reversed2 = [...Arr].reverse() // it won't mutate the orginal array

const reversed3 = arr => arr.slice().reverse(); // same it won't mutate the orginal array

// console.log(Arr) 

// Using While Loop

function ReverseArr(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++;
        right--;
    }
    return arr
}

console.log(ReverseArr(Arr))

/* 
| Metric | Value                 |
| ------ | --------------------- |
| Time   | **O(n/2)** → **O(n)** |
| Space  | **O(1)** (in-place)   |

*/

/*
| Feature                    | `arr.reverse()`                       | Custom Function                                             |
| -------------------------- | ------------------------------------- | ----------------------------------------------------------- |
| **Space Complexity**       | O(1)                                  | O(1)                                                        |
| **Time Complexity**        | O(n)                                  | O(n)                                                        |

*/