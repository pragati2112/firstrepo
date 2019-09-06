import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}
  
   getAllData():any
   {
     return  this.http.get('https://jsonplaceholder.typicode.com/todos/1');
   }
}
