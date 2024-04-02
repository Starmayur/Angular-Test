import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor() { }
  getEmployee(){
    return [
      {id :1 , name:"Mayur", age:23, profession:'Devloper'},
      {id :2 , name:"Karunesh", age:21, profession:'Designer'},
      {id :3 , name:"Pushpak", age:25, profession:'Management'},
      {id :4 , name:"Yash", age:21, profession:'Marketing'},
      {id :5 , name:"Bhavesh", age:21, profession:'BackEnd Devloper'},
    ]
  }
}
