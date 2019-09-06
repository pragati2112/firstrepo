class p1
{
   fun()
   {
       console.log("heyy");
   } 
}
class p2 extends p1
{
fun1()
{
    console.log("hello");
}
}
let q:p1=new p2();
q.fun();
q.fun1();