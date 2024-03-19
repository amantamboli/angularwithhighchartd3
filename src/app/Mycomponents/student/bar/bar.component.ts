import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const data = [
      { country: 'USA', corn: 406292, wheat: 51086 },
      { country: 'China', corn: 260000, wheat: 136000 },
      { country: 'Brazil', corn: 107000, wheat: 5500 },
      { country: 'EU', corn: 68300, wheat: 141000 },
      { country: 'India', corn: 27500, wheat: 107180 },
      { country: 'Russia', corn: 14500, wheat: 77000 }
    ];

    const margin = { top: 20, right: 30, bottom: 60, left: 60 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .domain(data.map(d => d.country))
      .range([0, width])
      .padding(0.2);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => Math.max(d.corn, d.wheat)) || 0])
      .range([height, 0]);

    // Add bars for Corn
    svg.selectAll('.bar-corn')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar-corn')
      .attr('x', d => x(d.country) ?? 0) // Handle possible undefined
      .attr('y', d => y(d.corn))
      .attr('width', x.bandwidth() / 2)
      .attr('height', d => height - y(d.corn))
      .attr('fill', 'steelblue');

    // Add bars for Wheat
    svg.selectAll('.bar-wheat')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar-wheat')
      .attr('x', d => (x(d.country) ?? 0) + x.bandwidth() / 2) // Handle possible undefined
      .attr('y', d => y(d.wheat))
      .attr('width', x.bandwidth() / 2)
      .attr('height', d => height - y(d.wheat))
      .attr('fill', 'orange');

    // Add x-axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('y', 0)
      .attr('x', 9)
      .attr('dy', '.35em')
      .attr('transform', 'rotate(90)')
      .style('text-anchor', 'start');

    // Add y-axis
    svg.append('g')
      .call(d3.axisLeft(y));

    // Add title
    svg.append('text')
      .attr('x', width / 2)
      .attr('y', 0 - (margin.top / 2))
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .text('Corn vs Wheat Estimated Production for 2020');

    // Add subtitle
    svg.append('text')
      .attr('x', 0)
      .attr('y', height + margin.top + 20)
      .style('font-size', '12px')
      .html('Source: <a href="https://www.indexmundi.com/agriculture/?commodity=corn" target="_blank">indexmundi</a>');
  }
}
