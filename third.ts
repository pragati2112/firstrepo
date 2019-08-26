class student1
{ roll:number;
    marks:number;

  print(roll:number,marks:number) 
  {
      console.log(roll);
      console.log(marks);
  } 
}
class clerk1
{

    type:string;
  
    printgrade(y:student1)
    { 
          s.print(s.roll,s.marks);

     if(this.type=="academic")
     {
      
       if(s.marks>=80)
       {
           console.log("A");
       }
           else
           {
              console.log("B");
           }
        
      }
  
       else(this.type=="sport")
       {
        if(s.marks>=50)
       {
           console.log("A");
       }
           else
           { 
               console.log("B");
           }
        

        }
    }


}
let s=new student1;
s.roll=1;
s.marks=98;
let c=new clerk1;
let c1=new clerk1;
c.type="academic";
c1.type="sport";
c.printgrade(s);
c1.printgrade(s);