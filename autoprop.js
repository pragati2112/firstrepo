var demo = /** @class */ (function () {
    function demo(name, age) {
        this.name = name;
        this.age = age;
        console.log(this.name);
    }
    demo.prototype.print = function () {
        console.log(this.age);
    };
    return demo;
}());
var d1 = new demo("ram", 34);
d1.print();
