class Test{
    private x: Number;
    
    constructor(paramX: Number){
        this.x = paramX;
    }

    setX_(_x: Number): void {
        this.x = _x;
    }
}


var st = new Test(19);
st

class Main{
    private a: number = 0;
    setA(_a: number): void{ this.a =_a;}
    f(x: number, y: number): number{ 
        var result: number = (this.a * x) + y;
        return (result);
    } 
}

var st2 = new Main();
st2.setA(100);
st2.f(2, 3);

function t(x: number, y: number): number{return (x * y);}
t(100, 299);

var l = Array<number>();
for(var i: number = 0; i<= 100; i++){l.push(i);}
for(let i of l){
    i // number
}

for(let i in l ){
    i // string
}
// console.info("aaaaa");