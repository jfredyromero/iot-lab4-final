import { Component, OnInit } from '@angular/core';
import { DatosService } from 'app/services/datos.service';
import { Dato } from 'app/shared/models/Dato';
import { ReversePipe } from 'ngx-pipes';
import * as moment from 'moment';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	providers: [ReversePipe],
})
export class DashboardComponent implements OnInit {
	mySubscription: Subscription;
	datos: Dato[] = [
		{
			_id: '6215a09136b6203906923d9b',
			categorie: 'Rasp',
			variable: 56,
			latitud: 152.3,
			longitud: 45.76,
			date: '2021-11-26T14:27:12.539Z',
			__v: 0,
		},
		{
			_id: '6215a09136b6203906923d9b',
			categorie: 'Arduino',
			variable: 56,
			latitud: 152.3,
			longitud: 45.76,
			date: '2021-11-26T14:27:12.539Z',
			__v: 0,
		},
		{
			_id: '6215a09136b6203906923d9b',
			categorie: 'Beagle',
			variable: 56,
			latitud: 152.3,
			longitud: 45.76,
			date: '2021-11-26T14:27:12.539Z',
			__v: 0,
		},
		{
			_id: '6215a09136b6203906923d9b',
			categorie: 'Esp',
			variable: 56,
			latitud: 152.3,
			longitud: 45.76,
			date: '2021-11-26T14:27:12.539Z',
			__v: 0,
		},
	];
	datosTable: Dato[];
	datesTable: Date[];
	total: Number;
	// Rasp
	datosRasp: Dato[];
	lastDateRasp: Date;
	valuesRasp: Number[];
	sizeRasp: number;
	promedioRasp: Number;
	// Arduino
	datosArduino: Dato[];
	lastDateArduino: Date;
	valuesArduino: Number[];
	sizeArduino: number;
	promedioArduino: Number;
	// Esp
	datosEsp: Dato[];
	lastDateEsp: Date;
	valuesEsp: Number[];
	sizeEsp: number;
	promedioEsp: Number;
	// Beagle
	datosBeagle: Dato[];
	lastDateBeagle: Date;
	valuesBeagle: Number[];
	sizeBeagle: number;
	promedioBeagle: Number;

	constructor(private service: DatosService) {}

	ngOnInit() {
		this.actualizar();
	}

	ngAfterViewInit(): void {
		this.mySubscription = interval(10000).subscribe(() => {
			this.actualizar();
		});
	}

	getData() {
		this.service.getAllData().subscribe(
			(res) => {
				this.datos = res.dispositivo;
				this.datos.map((dato: Dato) => {
					dato.date = new Date(
						new Date(dato.date).getTime() + 5 * 60 * 60 * 1000
					).toDateString();
				});
				this.total = res.total;
			},
			(err) => {
				console.log(err);
			}
		);
		this.total = this.datos.length;
		this.datosTable = this.datos.slice(-5);
		this.datesTable = this.datosTable.map((dato) => new Date(dato.date));
	}

	actualizar() {
		this.getData();
		this.getArduinoData();
		this.getRaspData();
		this.getEspData();
		this.getBeagleData();
	}

	getArduinoData() {
		this.datosArduino = this.datos.filter((dato) => {
			return dato.categorie == 'Arduino';
		});
		this.sizeArduino = this.datosArduino.length;
		this.promedioArduino =
			this.datosArduino
				.map(({ variable }) => variable)
				.reduce(
					(prev, next) =>
						Number.parseFloat(prev.toString()) +
						Number.parseFloat(next.toString())
				) / this.sizeArduino;
		this.datosArduino = this.getLastDatos(this.datosArduino);
		this.lastDateArduino = this.getLastUpdate(this.datosArduino);
		this.valuesArduino = this.datosArduino.map(({ variable }) => variable);
	}

	getRaspData() {
		this.datosRasp = this.datos.filter((dato) => {
			return dato.categorie == 'Rasp';
		});
		this.sizeRasp = this.datosRasp.length;
		this.promedioRasp =
			this.datosRasp
				.map(({ variable }) => variable)
				.reduce((prev, next) => prev + next) / this.sizeRasp;
		this.datosRasp = this.getLastDatos(this.datosRasp);
		this.lastDateRasp = this.getLastUpdate(this.datosRasp);
		this.valuesRasp = this.datosRasp.map(({ variable }) => variable);
	}

	getEspData() {
		this.datosEsp = this.datos.filter((dato) => {
			return dato.categorie == 'Esp';
		});
		this.sizeEsp = this.datosEsp.length;
		this.promedioEsp =
			this.datosEsp
				.map(({ variable }) => variable)
				.reduce(
					(prev, next) =>
						Number.parseFloat(prev.toString()) +
						Number.parseFloat(next.toString())
				) / this.sizeEsp;
		this.datosEsp = this.getLastDatos(this.datosEsp);
		this.lastDateEsp = this.getLastUpdate(this.datosEsp);
		this.valuesEsp = this.datosEsp.map(({ variable }) => variable);
	}

	getBeagleData() {
		this.datosBeagle = this.datos.filter((dato) => {
			return dato.categorie == 'Beagle';
		});
		this.sizeBeagle = this.datosBeagle.length;
		this.promedioBeagle =
			this.datosBeagle
				.map(({ variable }) => variable)
				.reduce(
					(prev, next) =>
						Number.parseFloat(prev.toString()) +
						Number.parseFloat(next.toString())
				) / this.sizeBeagle;
		this.datosBeagle = this.getLastDatos(this.datosBeagle);
		this.lastDateBeagle = this.getLastUpdate(this.datosBeagle);
		this.valuesBeagle = this.datosBeagle.map(({ variable }) => variable);
	}

	getLastUpdate(datos: Dato[]): Date {
		return new Date(datos[datos.length - 1].date);
	}

	getLastDatos(datos: Dato[]): Dato[] {
		const size = 20;
		return datos.slice(-size);
	}
}
