
class calculate
{
    op:number;
    
    operate(a:number,b:number)
    { 
         if(this.op==1)
        {
           this.sum(a,b);
    
        }
      else if(this.op==2)
      {
          this.sub(a,b);
         
      }
      else()
      {
          this.mul(a,b);
         
      }
    }
    sum(a:number,b:number)
    {
        console.log(a+b);
        
    }
    sub(a:number,b:number)
    {
        console.log(a-b);
     
    }
    mul(a:number,b:number)
    { console.log(a*b);
 
    }

}
let s=new calculate();
s.op=1;
s.operate(3,4);
//  let e=s.sum(3,4);
// let f=s.sub(3,4);
//  let g=s.mul(3,4);