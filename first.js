var first = /** @class */ (function () {
    function first() {
    }
    first.prototype.sum = function (a, b) {
        return a + b;
    };
    return first;
}());
var y = new first();
var x = y.sum(5, 9);
console.log(x);
