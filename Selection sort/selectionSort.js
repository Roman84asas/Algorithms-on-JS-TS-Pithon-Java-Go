let arr = [4, 1, 3, 22, 7];

function selectionSort(array) {
    let tempArr = array;
    let countArr = tempArr.length;
    let tempVal = 0;

     for (let i = 0; i < countArr; i++) {
         let minVal = i;
        for (let j = minVal+1; j < countArr; j++) {
            if(tempArr[j] < tempArr[minVal]) {
                minVal = j;
            }
        }
        tempVal = tempArr[i];
        tempArr[i] = tempArr[minVal];
        tempArr[minVal] = tempVal;
    } 
    return tempArr;
}
console.log(selectionSort(arr));