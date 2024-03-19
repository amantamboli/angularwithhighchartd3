import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { ChartModule } from 'angular-highcharts';
import { StudentComponent } from './Mycomponents/student/student.component';
import { EmployeeComponent } from './Mycomponents/employee/employee.component';@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChartModule,StudentComponent,EmployeeComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Data Visualization';
  
} 
