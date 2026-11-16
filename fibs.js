function fibs(n) {
    let fibsArray = []
    if (n === 0) {
        return []
    }
    else if (n === 1) {
        return [0]
    }
    else {
        fibsArray[0] = 0
        fibsArray[1] = 1
        for (i=2; i<n; i++) {
            fibsArray[i] = fibsArray[i-1] + fibsArray[i-2]
        }
        return fibsArray
    }
}

console.log(fibs(8))