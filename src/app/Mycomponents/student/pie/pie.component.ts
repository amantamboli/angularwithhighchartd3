import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @ViewChild('chart', { static: true }) private chartContainer!: ElementRef;

  constructor() { }

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    const data = [
      { name: 'COVID 19', y: 1, color: 'blue' },
      { name: 'HIV/AIDS', y: 2, color: '#393e46' },
      { name: 'EBOLA', y: 3, color: '#00adb5' },
      { name: 'DISPORA', y: 4, color: 'green' },
      { name: 'DIABETES', y: 5, color: '#506ef9' }
    ];

    const width = 600;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const svg = d3.select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal().range(data.map(d => d.color));
    const pie = d3.pie<any>().value(d => d.y);
    const arc = d3.arc<any>().innerRadius(0).outerRadius(radius);

    const arcs = pie(data);

    svg.selectAll('path')
      .data(arcs)
      .enter().append('path')
      .attr('d', arc)
      .attr('fill', (d: any) => color(d.data.color) as string | null) // Specify return type as 'string | null'
      .attr('stroke', 'white')
      .style('stroke-width', '2px');

    // Add labels
    const labelArc = d3.arc<any>().outerRadius(radius - 40).innerRadius(radius - 40);
    svg.selectAll('text')
      .data(arcs)
      .enter().append('text')
      .attr('transform', d => `translate(${labelArc.centroid(d)})`)
      .attr('dy', '0.35em')
      .text(d => d.data.name)
      .style('text-anchor', 'middle')
      .style('fill', 'white');
  }
}
