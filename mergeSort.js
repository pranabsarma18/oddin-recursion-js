function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    let mIndex = Math.ceil(arr.length/2)
    let leftSortedArr = mergeSort(arr.slice(0,mIndex))
    let rightSortedArr = mergeSort(arr.slice(mIndex))
    return merge(leftSortedArr, rightSortedArr)
}

function merge(leftSortedArr, rightSortedArr) {
    let i=0, j=0, k=0;
    let mergedArr = []
    while(i<leftSortedArr.length && j<rightSortedArr.length) {
        if (leftSortedArr[i] < rightSortedArr[j]) {
            mergedArr.push(leftSortedArr[i])
            i = i + 1;
        }
        else {
            mergedArr.push(rightSortedArr[j])
            j = j + 1
        }
    }
    for(i; i<leftSortedArr.length; i++) {
        mergedArr.push(leftSortedArr[i])
    }

    for(j; j<rightSortedArr.length; j++) {
        mergedArr.push(rightSortedArr[j])
    }
    return mergedArr
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))