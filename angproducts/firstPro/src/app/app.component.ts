import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'firstPro';
   p;
constructor(private router:Router,private d:ServiceService){}

ngOnInit()
{
  this.d.getAllData().subscribe((data)=>{

this.p=data;

  })
}


}