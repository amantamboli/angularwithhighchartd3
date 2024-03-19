import { Component } from '@angular/core';
import { ChartModule,Chart } from 'angular-highcharts';
@Component({
  selector: 'app-line',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {
  lineChart = new Chart({
    chart: {
      type: 'line',
      plotShadow: false,
    },
    title: {
        text: 'Logarithmic axis demo'
    },

    xAxis: {
        tickInterval: 1,
        type: 'logarithmic',
        accessibility: {
            rangeDescription: 'Range: 1 to 10'
        }
    },

    yAxis: {
        type: 'logarithmic',
        minorTickInterval: 0.1,
        accessibility: {
            rangeDescription: 'Range: 0.1 to 1000'
        }
    },

    tooltip: {
        headerFormat: '<b>{series.name}</b><br />',
        pointFormat: 'x = {point.x}, y = {point.y}'
    },

    series: [{
      type : 'line',
        data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
        marker: {
          symbol: 'diamond'
      },
        pointStart: 1
    }]
});
}
