class aaa
{
     a1:number;
   private show()
    {
    console.log(this. a1);
    }
}
class aaa1 extends aaa
{
    show2()
    {
      this.show()
    }
}


let aa=new aaa();
aa.a1=345;
let aa1=new aaa();
aa.show(a1);