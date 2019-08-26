class demo
{
    x:number;
    fun()
    {
        console.log("value of x is"+this.x);
    }
}
let d=new demo();
d.x=5;
d.fun();