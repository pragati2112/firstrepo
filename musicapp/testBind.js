function fun()
{
   console.log(   this.name);
}

var p ={
    name:"rajesh"
}
var t= fun.bind(p);

t();
