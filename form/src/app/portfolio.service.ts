import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { employee } from './employee.module'

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private url: string = "/assets/data/employee.json"

  constructor( private http: HttpClient ) {}
  getEmployees():Observable<employee[]> {
   return this.http.get<employee[]>(this.url); 
  }
}
