var student1 = /** @class */ (function () {
    function student1() {
    }
    student1.prototype.print = function (roll, marks) {
        console.log(roll);
        console.log(marks);
    };
    return student1;
}());
var clerk1 = /** @class */ (function () {
    function clerk1() {
    }
    clerk1.prototype.printgrade = function (y) {
        s.print(s.roll, s.marks);
        if (this.type = "academic") {
            if (s.marks >= 80) {
                console.log("A");
            }
            else {
                console.log("B");
            }
        }
        else
            (this.type == "sport");
        {
            if (s.marks >= 50) {
                console.log("A");
            }
            else {
                console.log("B");
            }
        }
    };
    return clerk1;
}());
var s = new student1;
s.roll = 1;
s.marks = 98;
var c = new clerk1;
var c1 = new clerk1;
c.type = "academic";
c1.type = "sport";
c.printgrade(s);
c1.printgrade(s);
