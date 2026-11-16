function fibsRec(n) {
    if (n === 0) {
        return []
    }
    else if (n === 1) {
        return [0]
    }
    else if (n ==2 ) {
        return [0,1]
    }
    else {
        let prevArr = fibsRec(n-1)
        prevArr.push(prevArr.slice(-1)[0] + prevArr.slice(-2,-1)[0])
        return prevArr
    } 
}

console.log(fibsRec(8))