import { Component } from '@angular/core';
import { ArrayService } from '../array.service';

interface EmployeeDetails{
  name: string;
  age: number;
  id: number;
  profession: string;
}

@Component({
  selector: 'app-services',
  template: `
  <div *ngFor="let employee of EmployeeDetails">
  {{employee.id}}
  {{employee.name}}
  {{employee.age}}
  {{employee.profession}}
  </div>
  `,
  styleUrl: './services.component.css'
})
export class ServicesComponent {
public EmployeeDetails: EmployeeDetails[]=[];
constructor(private Service:ArrayService){
  
}
ngOnInit(){
  this.EmployeeDetails=this.Service.getEmployee();
}
  
}
