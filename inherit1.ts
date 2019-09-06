class p3
{
    fun3()
    {
      console.log("hola");
    }
    fun4()  
    {
        console.log("hola1");
    }
}

class p4 extends p3
{
    fun4()
    {
      console.log("change hola");
    }
    fun5()
    {
        console.log("hola2");
    }
}
let t:p3=new p4();
t.fun3();
t.fun4();
