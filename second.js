var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.print = function (roll, marks) {
        console.log(roll);
        console.log(marks);
    };
    return student;
}());
var clerk = /** @class */ (function () {
    function clerk() {
    }
    clerk.prototype.printgrade = function (a) {
        a.print(a.roll, a.marks);
        if (a.marks >= 80) {
            console.log("A");
        }
        else if (a.marks < 80) {
            console.log("B");
        }
        else {
            console.log("C");
        }
    };
    return clerk;
}());
var a = new student;
a.roll = 1;
a.marks = 98;
var b = new clerk;
b.printgrade(a);
