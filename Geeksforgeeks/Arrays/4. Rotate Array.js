

function RotateRight(arr,d) {
    if(arr.length === 0) return arr;
    let n = arr.length;
    d = d % n

    function Reverse(arr,left,right) {
        while(left < right) {
            [arr[left],arr[right]] = [arr[right],arr[left]]
            left++;
            right--;
        }
    }

    // Reverse the entire  array
    Reverse(arr,0,n - 1);
    console.log(arr,"first")

    // Reverse the first (n - d) part
    Reverse(arr,0,n - d - 1)
        console.log(arr,"Second")

    // Reverse the last d Part
    Reverse(arr,n - d,n - 1)
        console.log(arr,"third")

    return arr
}

function RotateLeft(arr,d) {
let n = arr.length
if(n === 0) return arr;
d = d % n // to handle if d > n

    function Reverse(arr,left,right) {
        while(left < right) {
            [arr[left],arr[right]] = [arr[right],arr[left]]
            left++;
            right--;
        }
    }
 // reverse the entire array
 Reverse(arr,0,n - 1)

 // reverse the first d element
 Reverse(arr,0,d - 1)

 // reverse the last n - d elements
 Reverse(arr,d,n - 1)
}

let Arr = [1,2,3,4,5,6,7] 
RotateLeft(Arr,2)
console.log(Arr,"final")