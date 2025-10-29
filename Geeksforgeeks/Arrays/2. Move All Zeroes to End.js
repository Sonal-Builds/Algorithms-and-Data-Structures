// using filter and concat Methods

function pushZerosToEnd(arr) {
    let nonZerosArr = arr.filter(num => num !== 0)
    let zerosArr = arr.filter(num => num == 0)
    return nonZerosArr.concat(zerosArr)

    // or in one line we can write
    // const pushZerosToEnd = arr => arr.filter(x => x !== 0).concat(arr.filter(x => x === 0));

}

arr = [1, 2, 0, 4, 3, 0, 5, 0] // o/p => [1, 2, 4, 3, 5, 0, 0, 0]
// console.log(pushZerosToEnd(arr))

// Using Linear Methode

function pushZerosToEnd(arr) {
    let position = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== 0) {
            [arr[position],arr[i]] = [arr[i],arr[position]] //swap
            position++
        }
    }
    return arr
}

// Move All Zeros to Start not considering non-zero elements order

function pushZerosToStart(arr) {
    let position = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 0) {
            [arr[position],arr[i]] = [arr[i],arr[position]]
            position++
        }
    }
    return arr
}

arr = [1, 2, 0, 4, 3, 0, 5, 0] // o/p => 
// console.log(pushZerosToStart(arr))

// Move All Zeros to Start maintaining the order of non-zero elements.

function pushZerosToStart2(arr) {
    let position = arr.length - 1;
    for(let i=position; i>=0; i--) {
        if(arr[i] !== 0) {
            [arr[i],arr[position]] = [arr[position],arr[i]]
            position--;
        }
    }
    return arr

}

arr = [1, 2, 0, 4, 3, 0, 5, 0] // o/p => 
console.log(pushZerosToStart2(arr))

