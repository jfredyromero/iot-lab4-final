import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ReversePipe } from 'ngx-pipes';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-grafica-barras',
	templateUrl: './grafica-barras.component.html',
	styleUrls: ['./grafica-barras.component.css'],
	providers: [ReversePipe],
})
export class GraficaBarrasComponent implements OnInit, AfterViewInit {
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

	constructor(private reversePipe: ReversePipe) {}

	ngOnInit(): void {
		this.datawebsiteViewsChart = {
			labels: this.labels,
			series: this.series,
		};
		let max = this.getMax(this.series);
		this.optionswebsiteViewsChart = {
			axisX: {
				showGrid: true,
			},
			low: 0,
			high: max + (10 - (max % 10)),
			chartPadding: { top: 0, right: 0, bottom: 0, left: 5 },
		};
	}

	ngAfterViewInit(): void {
		this.websiteViewsChart = new Chartist.Bar(
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
		// //start animation for the Emails Subscription Chart
		// this.startAnimationForBarChart(this.websiteViewsChart);
	}

	startAnimationForBarChart(chart) {
		let seq2: any, delays2: any, durations2: any;

		seq2 = 0;
		delays2 = 80;
		durations2 = 500;
		chart.on('draw', function (data) {
			if (data.type === 'bar') {
				seq2++;
				data.element.animate({
					opacity: {
						begin: seq2 * delays2,
						dur: durations2,
						from: 0,
						to: 1,
						easing: 'ease',
					},
				});
			}
		});

		seq2 = 0;
	}

	getMax(a) {
		return Math.max(
			...a.map((e) => (Array.isArray(e) ? this.getMax(e) : e))
		);
	}
}
