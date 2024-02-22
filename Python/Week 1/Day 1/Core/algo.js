function join(arr, separator) {
    var joined = ''
    for (var i = 0; i < arr.length; i++) {
        if (i === arr.length-1) {
            joined += arr[i]
        } else {
            joined += arr[i] + separator
        }
    }
    return joined
}
console.log(join([1], ', '))

function join2 (arr1, separator1){
    var joined2 = ''

    for (var i = 0; i < arr1.length -1; i++){
        joined2+= arr1[i] + separator1
    }
    return joined2 + arr1[arr1.length-1]
}

console.log(join2([1,2,3], ', '))