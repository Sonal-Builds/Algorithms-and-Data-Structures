

var isSubsequence = function(s, t) {
    let indexJ = 0
    let newWord =''
    for(i=0; i < s.length; i++) {
        console.log(s[i])
        
        for(j=indexJ; j<t.length; j++) {
            if(s[i] === t[j]) {
                indexJ = j + 1
                newWord = newWord + t[j]
                break
            } 
        }
    }
    if(s === newWord) {
        return true
    } else return false
};


console.log(isSubsequence('aaaaaa','bbaaaa'))