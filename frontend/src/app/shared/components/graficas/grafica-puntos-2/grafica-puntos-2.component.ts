import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
	selector: 'app-grafica-puntos-2',
	templateUrl: './grafica-puntos-2.component.html',
	styleUrls: ['./grafica-puntos-2.component.css'],
})
export class GraficaPuntos2Component implements OnInit {
	private data = [
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '70', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '80', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '72', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '56', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '12', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '60', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '12', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '90', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '17', date: '2022-01-26T14:27:12.539+00:00' },
		{ variable: '25', date: '2022-01-26T14:27:12.539+00:00' },
	];

	private svg: any = '';
	private margin = 50;
	private width = 750 - this.margin * 2;
	private height = 400 - this.margin * 2;
	private dataProcesada: object[] = [];
	constructor() {}

	ngOnInit(): void {
		this.dataProcesada = this.extraccion();
		this.createSvg();
		this.drawPlot();
	}

	private extraccion() {
		let contador: number = 1;
		let dataProcesada = this.data.slice(this.data.length - 30);
		for (let dato of dataProcesada) {
			dato.date = contador.toString();
			contador = contador + 1;
		}
		contador = 1;
		return dataProcesada;
	}

	private createSvg(): void {
		this.svg = d3
			.select('figure#scatter')
			.append('svg')
			.attr('width', this.width + this.margin * 2)
			.attr('height', this.height + this.margin * 2)
			.append('g')
			.attr(
				'transform',
				'translate(' + this.margin + ' , ' + this.margin + ')'
			);
	}

	private drawPlot(): void {
		// Eje X
		const x = d3.scaleLinear().domain([1, 30]).range([0, this.width]);
		this.svg
			.append('g')
			.attr('transform', 'translate(0,' + this.height + ')')
			.call(d3.axisBottom(x).tickFormat(d3.format('d')));

		//Eje Y
		const y = d3.scaleLinear().domain([0, 100]).range([this.height, 0]);
		this.svg.append('g').call(d3.axisLeft(y));

		//Puntos
		const dots = this.svg.append('g');
		dots.selectAll('dot')
			.data(this.dataProcesada)
			.enter()
			.append('circle')
			.attr('cx', (d: any) => x(d.date)) //eje x
			.attr('cy', (d: any) => y(d.variable)) //eje y
			.attr('r', 3) //tamaño del punto
			.style('opacity', 1)
			.style('fill', '#EF6D51');

		//Etiquetas
		dots.selectAll('text')
			.data(this.dataProcesada)
			.enter()
			.append('text')
			.text((d: any) => d.variable)
			.attr('x', (d: any) => x(d.date))
			.attr('y', (d: any) => y(d.variable));
	}
}
