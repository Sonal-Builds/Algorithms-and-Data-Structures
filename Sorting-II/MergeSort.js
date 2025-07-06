

const arr = [8,3,6,4,6,1,5]

function mergeSort(arr) {
if (arr.length < 2) return arr;

let mid = Math.floor(arr.length/2)
let left = arr.slice(0,mid);
let right = arr.slice(mid)
return  Merge(mergeSort(left),mergeSort(right))
}

function Merge(left,right) {
    let sortedArr = []

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr,...left,...right]
}

const sortedArr = mergeSort(arr)

console.log(sortedArr)



