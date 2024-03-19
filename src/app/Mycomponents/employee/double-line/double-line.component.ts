import { Component } from '@angular/core';
import { ChartModule,Chart } from 'angular-highcharts';
@Component({
  selector: 'app-double-line',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './double-line.component.html',
  styleUrl: './double-line.component.css'
})
export class DoubleLineComponent {

// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
doubleLineChart = new Chart({
  chart: {
      type: 'line'
  },
  title: {
      text: 'Monthly Average Temperature'
  },
  subtitle: {
      text: 'Source: ' +
          '<a href="https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature" ' +
          'target="_blank">Wikipedia.com</a>'
  },
  xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
      title: {
          text: 'Temperature (°C)'
      }
  },
  plotOptions: {
      line: {
          dataLabels: {
              enabled: true
          },
          enableMouseTracking: false
      }
  },
  series: [{
    type: 'line',
      name: 'Reggane',
      data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
          22.0, 17.8]
  }, {
    type: 'line',
      name: 'Tallinn',
      data: [-2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
          2.0, -0.9]
  }]
});

}
