

function LeftRotate(arr,k) {

    let first = arr[k-1]

    for(i=k-1; i<arr.length - 1;i++) {
        arr[i] = arr[i+1]
    }
     arr[arr.length - 1] = first
     return arr
}

console.log(LeftRotate([1,2,3,4,5]))



// function LeftRotate(arr,k) {
//     if(k === 0) return arr
//     let first = arr[0]

//     for(i=0; i<arr.length - 1;i++) {
//         arr[i] = arr[i+1]
//     }
//      arr[arr.length - 1] = first
//      return LeftRotate(arr,k-1)
// }

// console.log(LeftRotate([1,2,3,4,5],2))