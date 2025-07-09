
function RemoveDuplicates(arr) {
    let targetedele = arr[0]
    let newArr = []
    for(let i=1;i<arr.length;i++) {
        if(targetedele !== arr[i]) {
            newArr.push(targetedele)
            targetedele = arr[i]
        } 
    }
    return newArr
}


