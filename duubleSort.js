let arr = [4, 1, 3, 22, 7];

function sorrt(array) {
    let tempArr = array;
    let tempVal = 0;

     for (let i = 0; i < tempArr.length-1; i++) {
        for (let j = 0; j < tempArr.length-1; j++) {
            if (tempArr[j] > tempArr[j+1]) {
                tempVal      = tempArr[j+1];
                tempArr[j+1] = tempArr[j];
                tempArr[j]   = tempVal;
            }
        }
    } 
    return tempArr;
    }
console.log(sorrt(arr));