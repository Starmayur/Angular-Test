import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';


interface Employee{
 name: string,
 id: number,
 age: number
}

@Component({
  selector: 'app-portfolio',
  template: `
      <div *ngFor="let list of employee">
      {{list.id}}
      {{list.name}}
      {{list.age}}
      </div>
  `,
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  public employee:Employee[] = []
  constructor (private _Servicesemployee: PortfolioService){}
  
  ngOnInit(){
  this._Servicesemployee.getEmployees().subscribe({next:(data: Employee[])=>{this.employee = data}});
  }
}
