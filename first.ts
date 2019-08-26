class first
{
    x:number;
    sum(a:number,b:number):number
    {
        return a+b;
    }
}
let y=new first();
let x=y.sum(5,9);
console.log(x);