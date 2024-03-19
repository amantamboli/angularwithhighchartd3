import { Component } from '@angular/core';
import { ChartModule, Chart } from 'angular-highcharts';
import { RouterOutlet,RouterLink,RouterModule } from '@angular/router';
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [ChartModule,RouterOutlet,RouterLink,RouterModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {


}
