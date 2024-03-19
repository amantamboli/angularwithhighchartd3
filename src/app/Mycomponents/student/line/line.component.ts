import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const data = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleLog().range([0, width]);
    const y = d3.scaleLog().range([height, 0]);

    const line = d3.line<number>()
      .x((d, i) => x(i + 1))
      .y((d, i) => y(d)); // Pass each data point individually

    // Ensure that d3.max(data) returns a valid value
    const maxValue = d3.max(data) || 0; // Use a default value if max is undefined

    x.domain([1, data.length]);
    y.domain([0.1, maxValue]); // Use the computed max value

    // Append the line to the SVG
    svg.append('path') //ch
      .datum(data)
      .attr('class', 'line')
      .attr('d', line);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).ticks(5, '.1s'));

    svg.append('g')
      .call(d3.axisLeft(y).ticks(5, '.1s'));

    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 0 - (margin.top / 2))
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .text('Logarithmic axis demo');
  }
}
