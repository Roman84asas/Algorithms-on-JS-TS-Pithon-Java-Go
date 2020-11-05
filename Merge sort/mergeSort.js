function merge(left, right){
    const result = [];    
   
    while (left.length > 0 && right.length > 0){
        if(left[0] > right[0]){
            result.push(right[0]);
            right = right.slice(1);
        }else{
            result.push(left[0]);
            left = left.slice(1);
        }
    }
   
    
   while (left.length > 0){
        result.push(left[0]);
        left = left.slice(1);
    }    
    while (right.length > 0){
        result.push(right[0]);
        right = right.slice(1);
    }

    return result;
}
 
function mergeSort(array) {
    let lengthArray;
    let left;
    let right;    
    
    if(array.length === 1) return array;
    lengthArray = Math.floor(array.length / 2);
    
    left  = array.slice(0, lengthArray);
    right = array.slice(lengthArray);

    return merge(mergeSort(left),  mergeSort(right));
}
const arr = [4, 1, 3, 22, 7, 9, 25, 5, 16];
const result = mergeSort(arr);
console.log(result);