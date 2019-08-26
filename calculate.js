var calculate = /** @class */ (function () {
    function calculate() {
    }
    calculate.prototype.operate = function (a, b) {
        if (this.op == 1) {
            this.sum(a, b);
        }
        else if (this.op == 2) {
            this.sub(a, b);
        }
        else
            (this.op == 3);
        {
            this.mul(a, b);
        }
    };
    calculate.prototype.sum = function (a, b) {
        console.log(a + b);
    };
    calculate.prototype.sub = function (a, b) {
        console.log(a - b);
    };
    calculate.prototype.mul = function (a, b) {
        console.log(a * b);
    };
    return calculate;
}());
var s = new calculate();
s.op = 1;
s.operate(3, 4);
//  let e=s.sum(3,4);
// let f=s.sub(3,4);
//  let g=s.mul(3,4);
