class student
{ roll:number;
    marks:number;

  print(roll:number,marks:number) 
  {
      console.log(roll);
      console.log(marks);
  } 
}
class clerk
{
    printgrade(a)
    {
     a. print(a.roll,a.marks);


       if(a.marks>=80)
       {
           console.log("A");
       }
           else if(a.marks<80)
           {
              console.log("B");
           }
       else
       {

           console.log("C");
       }

    }

}
let a=new student;
a.roll=1;
a.marks=98;
let b=new clerk;
b.printgrade(a);