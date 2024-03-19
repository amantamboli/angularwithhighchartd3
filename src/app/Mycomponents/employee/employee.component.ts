import { Component } from '@angular/core';
import { ChartModule, Chart } from 'angular-highcharts';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { RouterOutlet,RouterLink,RouterModule } from '@angular/router';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ChartModule,BarComponent,PieComponent,RouterOutlet,RouterLink,RouterModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  lineChart=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Patients'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Patients admitted',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ]

  })
}
