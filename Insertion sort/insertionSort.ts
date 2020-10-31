class InsertionSort {
    public array: number[];
    public count: number;

    constructor(array: number[]) {
        this.array = array;
        this.count = array.length;
    }

    run() {
        for (let i = 1; i < this.count; i++) {
            let key = this.array[i];
            let j = i -1;
            while (j >= 0 && this.array[j] > key) {
                this.array[j +1] = this.array[j];
                j = j - 1;
            }
            this.array[j + 1] = key;
        }
        return this.array;
    }
}

const sort_array = [5, 22, 8, 15, 1, 3];
const result_array = new InsertionSort(sort_array);
console.log(result_array.run());