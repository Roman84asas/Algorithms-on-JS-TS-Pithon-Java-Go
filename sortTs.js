var list = [4, 1, 3, 22, 7];
function sort(array) {
    var sortArr = array;
    var tempValue = 0;
    for (var i = 0; i < sortArr.length - 1; i++) {
        for (var j = 0; j < sortArr.length - 1; j++) {
            if (sortArr[j] < sortArr[j + 1]) {
                tempValue = sortArr[j];
                sortArr[j] = sortArr[j + 1];
                sortArr[j + 1] = tempValue;
            }
        }
    }
    return sortArr;
}
console.log(sort(list));
