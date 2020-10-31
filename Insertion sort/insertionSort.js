const sort_array = [5, 22, 8, 15, 1, 3];

function insertionSort(params) {
    let array = params;
    let count = params.length;

    for (let i = 1; i < count; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j -1;
        }
        array[j + 1] = key;
    }
    return array;
}
console.log(insertionSort(sort_array));