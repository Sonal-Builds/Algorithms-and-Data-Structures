
// Bubble Sort
// const arr = [4,2,5,1,3]
// function bubbleSort(arr) {
//     const n = arr.length;
//     for(i=n-1; i > 0; i--) {
//         let swapped = false;
//         for(j=0; j<i; j++) {
        
//             if(arr[j] > arr[j + 1]) {
//                 [arr[j],arr[j+1]] =[arr[j+1],arr[j]]
//                 swapped = true
//             }
//         }
//         if (swapped === false) break;
//     }
//     console.log(arr)   
// }
// bubbleSort(arr)

const obj = {
    a:10,
    b:20,
    fun:function() {
        console.log(this.a)
    },
    
}

const yourObj ={
    a:100,
    b:200
}



// const aa = obj.fun.bind(obj)
// aa()

//call
// obj.fun.call(obj)
// obj.fun.call(yourObj)
// aa()

// const obj2 ={
//     a:12,
//     b:22,
//     c: function(c,d) {
//         console.log(this,c,d)
//     }
// }

 
// const bb = obj2.c
// bb.apply(obj2,[70,80])

const obj3 = {
    a:10,
    b:20,
    function1() {
        console.log(this)
        function inner() {
            console.log('inner',this)
        }
        let qq = inner.bind(this)()
         qq()
    },
    
}

obj3.function1()
// console.log(cc)
