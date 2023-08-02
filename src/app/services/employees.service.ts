import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee, EmployeeResponse } from '../models/Employee';
import { HttpClient } from '@angular/common/http';
import { EMPLOYEES } from '../mock-employees';
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  apiUrl = 'https://dummy.restapiexample.com/api/v1/employees';
  constructor(private http: HttpClient) {}
  getEmployees(): Observable<Employee[]> {
    // return this.http.get<EmployeeResponse>(this.apiUrl)
    return of(EMPLOYEES);
  }
}
