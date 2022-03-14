import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-grafica-puntos',
	templateUrl: './grafica-puntos.component.html',
	styleUrls: ['./grafica-puntos.component.css'],
})
export class GraficaPuntosComponent implements OnInit, AfterViewInit {
	mySubscription: Subscription;
	@Input() chartName: string;
	@Input() classColor: string;
	@Input() device: string;
	@Input() lastUpdate: Date;
	@Input() series: [[]];
	@Input() labels: [];
	datawebsiteViewsChart: any;
	optionswebsiteViewsChart: any;
	responsiveOptions: any[];
	websiteViewsChart: any;

	ngOnInit(): void {
		this.datawebsiteViewsChart = {
			labels: this.labels,
			series: this.series,
		};
		let max = this.getMax(this.series);
		this.optionswebsiteViewsChart = {
			lineSmooth: Chartist.Interpolation.cardinal({
				tension: 0,
			}),
			low: 0,
			high: max + (10 - (max % 10)), // creative tim: we recommend you to set the high sa the biggest value + something for a better look
			chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
		};
	}

	ngAfterViewInit(): void {
		this.websiteViewsChart = new Chartist.Line(
			'#' + this.chartName,
			this.datawebsiteViewsChart,
			this.optionswebsiteViewsChart
		);
		this.mySubscription = interval(10000).subscribe(() => {
			let max = this.getMax(this.series);
			this.websiteViewsChart.update(
				{ series: this.series },
				{ high: max + (10 - (max % 10)) }
			);
		});
		// this.startAnimationForLineChart(this.websiteViewsChart);
	}

	startAnimationForLineChart(chart) {
		let seq: any, delays: any, durations: any;
		seq = 0;
		delays = 80;
		durations = 500;

		chart.on('draw', function (data) {
			if (data.type === 'line' || data.type === 'area') {
				data.element.animate({
					d: {
						begin: 600,
						dur: 700,
						from: data.path
							.clone()
							.scale(1, 0)
							.translate(0, data.chartRect.height())
							.stringify(),
						to: data.path.clone().stringify(),
						easing: Chartist.Svg.Easing.easeOutQuint,
					},
				});
			} else if (data.type === 'point') {
				seq++;
				data.element.animate({
					opacity: {
						begin: seq * delays,
						dur: durations,
						from: 0,
						to: 1,
						easing: 'ease',
					},
				});
			}
		});

		seq = 0;
	}

	getMax(a) {
		return Math.max(
			...a.map((e) => (Array.isArray(e) ? this.getMax(e) : e))
		);
	}
}
