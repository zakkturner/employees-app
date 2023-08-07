import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models/Employee';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css'],
})
export class EmployeeItemComponent {
  @Input() employee!: Employee | undefined;
}
