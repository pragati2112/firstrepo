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
var p3 = /** @class */ (function () {
    function p3() {
    }
    p3.prototype.fun3 = function () {
        console.log("hola");
    };
    p3.prototype.fun4 = function () {
        console.log("hola1");
    };
    return p3;
}());
var p4 = /** @class */ (function (_super) {
    __extends(p4, _super);
    function p4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    p4.prototype.fun4 = function () {
        console.log("change hola");
    };
    p4.prototype.fun5 = function () {
        console.log("hola2");
    };
    return p4;
}(p3));
var t = new p4();
t.fun3();
t.fun4();
