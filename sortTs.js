var list = [4, 1, 3, 22, 7];
var Sort = /** @class */ (function () {
    function Sort(sortArr) {
        this.sortArr = sortArr;
    }
    Sort.prototype.run = function () {
        for (var i = 0; i < this.sortArr.length - 1; i++) {
            for (var j = 0; j < this.sortArr.length - 1; j++) {
                if (this.sortArr[j] < this.sortArr[j + 1]) {
                    this.tempValue = this.sortArr[j];
                    this.sortArr[j] = this.sortArr[j + 1];
                    this.sortArr[j + 1] = this.tempValue;
                }
            }
        }
        return this.sortArr;
    };
    return Sort;
}());
var result = new Sort(list);
console.log(result);
