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
var aaa = /** @class */ (function () {
    function aaa() {
    }
    aaa.prototype.show = function () {
        console.log(this.a1);
    };
    return aaa;
}());
var aaa1 = /** @class */ (function (_super) {
    __extends(aaa1, _super);
    function aaa1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    aaa1.prototype.show2 = function () {
        console.log(aa1.a1);
    };
    return aaa1;
}(aaa));
var aa = new aaa();
aa.a1 = 345;
var aa1 = new aaa();
aa1.a1 = 456;
aa.show(a1);
aa1.show2(a2);
