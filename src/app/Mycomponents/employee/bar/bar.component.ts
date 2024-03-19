import { Component } from '@angular/core';
import { ChartModule,Chart } from 'angular-highcharts';
@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {

 

barChart = new Chart( {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Corn vs wheat estimated production for 2020',
      align: 'left'
  },
  subtitle: {
      text:
          'Source: <a target="_blank" ' +
          'href="https://www.indexmundi.com/agriculture/?commodity=corn">indexmundi</a>',
      align: 'left'
  },
  xAxis: {
      categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
      crosshair: true,
      accessibility: {
          description: 'Countries'
      }
  },
  yAxis: {
      min: 0,
      title: {
          text: '1000 metric tons (MT)'
      }
  },
  tooltip: {
      valueSuffix: ' (1000 MT)'
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      },
      series: {
        dataLabels: {
            enabled: true
        }
    }
  },
  series: [

      {
          type: 'bar',
          name: 'Corn',
          data: [406292, 260000, 107000, 68300, 27500, 14500],

      },
      {
          type: 'bar',
          name: 'Wheat',
          data: [51086, 136000, 5500, 141000, 107180, 77000],

      },
      
  ]
});


}
