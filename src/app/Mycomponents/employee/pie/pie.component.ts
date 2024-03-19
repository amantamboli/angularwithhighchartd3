import { Component } from '@angular/core';
import { ChartModule, Chart } from 'angular-highcharts';
@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent {

  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
  
    credits: {
      enabled: false,
    },
  
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
  
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },
  
    legend: {
      enabled: true,
    },
  
    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: 1, color: '#eeeeee' },
          { name: 'HIV/AIDS', y: 2, color: '#393e46' },
          { name: 'EBOLA', y: 3, color: '#00adb5' },
          { name: 'DISPORA', y: 4, color: '#eeeeee' },
          { name: 'DIABETES', y: 5, color: '#506ef9' },
        ],
      },
    ],
  })
}
