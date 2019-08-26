var demo = /** @class */ (function () {
    function demo() {
    }
    demo.prototype.fun = function () {
        console.log("value of x is" + this.x);
    };
    return demo;
}());
var d = new demo();
d.x = 5;
d.fun();
