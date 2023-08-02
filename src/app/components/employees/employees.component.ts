import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  employees: Employee[] = [];
  ascending: boolean = true;
  constructor(private employeeService: EmployeesService) {}
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
      console.log('Employees', this.employees);
    });
  }
  sortByEmployeeProperties(property: keyof Employee) {
    if (this.ascending) {
      this.employees.sort((a, b) =>
        a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0
      );
    } else {
      this.employees.sort((a, b) =>
        a[property] < b[property] ? 1 : a[property] > b[property] ? -1 : 0
      );
    }
    this.ascending = !this.ascending; // Toggle the sorting order flag
  }

  sortByEmployeeName() {
    this.sortByEmployeeProperties('employee_name');
  }

  sortByEmployeeSalary() {
    this.sortByEmployeeProperties('employee_salary');
  }

  sortByEmployeeAge() {
    this.sortByEmployeeProperties('employee_age');
  }
}
