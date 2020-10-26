const list: number[] = [4, 1, 3, 22, 7];

class Sort{
    sortArr: number[];
    tempValue: number;

    constructor(sortArr: number[]) {
        this.sortArr = sortArr;
    }

    run() {
        for (let i = 0; i < this.sortArr.length-1; i++) {
            for (let j = 0; j < this.sortArr.length-1; j++) {
                 if(this.sortArr[j] < this.sortArr[j+1]) {
                    this.tempValue    = this.sortArr[j];
                    this.sortArr[j]   = this.sortArr[j+1];
                    this.sortArr[j+1] = this.tempValue;
                 }
             }        
         }
        return this.sortArr;
    }   
}
let result = new Sort(list);
console.log(result);