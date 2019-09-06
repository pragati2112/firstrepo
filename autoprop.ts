class demo
{
    constructor(private name,private age)
    {
      console.log(this.name);
    }
   print()
  {
      console.log(this.age);
  }

}
let d1=new demo("ram",34);
d1.print();