var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var p1 = /** @class */ (function () {
    function p1() {
    }
    p1.prototype.fun = function () {
        console.log("heyy");
    };
    return p1;
}());
var p2 = /** @class */ (function (_super) {
    __extends(p2, _super);
    function p2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    p2.prototype.fun1 = function () {
        console.log("hello");
    };
    return p2;
}(p1));
var q = new p2();
q.fun();
q.fun1();
