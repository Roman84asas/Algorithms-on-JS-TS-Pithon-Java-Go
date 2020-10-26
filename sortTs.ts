const list: number[] = [4, 1, 3, 22, 7];

function sort(array: number[]) {
    let sortArr: number[] = array;
    let tempValue: number = 0;
    for (let i = 0; i < sortArr.length-1; i++) {
       for (let j = 0; j < sortArr.length-1; j++) {
            if(sortArr[j] < sortArr[j+1]) {
                tempValue    = sortArr[j];
                sortArr[j]   = sortArr[j+1];
                sortArr[j+1] = tempValue;
            }
        }        
    }
    return sortArr;
}
console.log(sort(list));