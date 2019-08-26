const rxjs=require('rxjs');
let ob=rxjs.of(1,5,8,9,3)
ob.subscribe((d)=>
        {
            console.log("found"+d);
        }

);