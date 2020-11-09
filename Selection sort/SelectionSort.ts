const arr: number[] = [4, 1, 3, 22, 7];

class SelectionSort {
    tempArr: number[];
    tempValue: number;
    countArr: number;
    
    constructor(sortArr: number[]) {
        this.tempArr = sortArr;
        this.countArr = sortArr.length;
    }

    run() {
        for (let i = 0; i < this.countArr; i++) {
            let minVal = i;
            for (let j = minVal+1; j < this.countArr; j++) {
                if(this.tempArr[j] < this.tempArr[minVal]) {
                    minVal = j;
                }
            }
           this.tempValue = this.tempArr[i];
           this.tempArr[i] = this.tempArr[minVal];
           this.tempArr[minVal] = this.tempValue;
       } 
       return this.tempArr;
    }     
}
const selectionSort: SelectionSort = new SelectionSort(arr);
console.log(selectionSort.run());