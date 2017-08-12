var Test = (function () {
    function Test(paramX) {
        this.x = paramX;
    }
    Test.prototype.setX_ = function (_x) {
        this.x = _x;
    };
    return Test;
}());
var st = new Test(19);
st;
var Main = (function () {
    function Main() {
        this.a = 0;
    }
    Main.prototype.setA = function (_a) { this.a = _a; };
    Main.prototype.f = function (x, y) {
        var result = (this.a * x) + y;
        return (result);
    };
    return Main;
}());
var st2 = new Main();
st2.setA(100);
st2.f(2, 3);
function t(x, y) { return (x * y); }
t(100, 299);
// console.info("aaaaa"); 
