import { Component } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent {
  constructor(
    private employeeService: EmployeesService,
    private route: ActivatedRoute
  ) {}
  employee!: any;
  id!: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('Current ID:', this.id);
      const idNum = parseInt(this.id);
      this.employeeService
        .getEmployee(idNum)
        .subscribe((employee) => (this.employee = employee.data));
    });
  }
}
