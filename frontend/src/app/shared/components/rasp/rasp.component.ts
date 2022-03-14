import { Component, OnInit } from '@angular/core';
import { DatosService } from 'app/services/datos.service';
import { Dato } from 'app/shared/models/Dato';
import { ReversePipe } from 'ngx-pipes';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-rasp',
	templateUrl: './rasp.component.html',
	styleUrls: ['./rasp.component.css'],
	providers: [ReversePipe],
})
export class RaspComponent implements OnInit {
	mySubscription: Subscription;
	datos: Dato[] = [
		{
			_id: '6215a09136b6203906923d9b',
			categorie: 'Arduino',
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

	constructor(private service: DatosService) {}

	ngOnInit() {
		this.actualizar();
		this.mySubscription = interval(5000).subscribe(() => {
			this.actualizar();
		});
	}

	getData() {
		this.service.getAllData().subscribe(
			(res) => {
				this.datos = res.dispositivo;
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
		this.getRaspData();
	}

	getRaspData() {
		this.datosRasp = this.datos.filter((dato) => {
			return dato.categorie == 'Arduino';
		});
		this.sizeRasp = this.datosRasp.length;
		this.promedioRasp =
			this.datos
				.map(({ variable }) => variable)
				.reduce((prev, next) => prev + next) / this.sizeRasp;
		this.datosRasp = this.getLastDatos(this.datosRasp);
		this.lastDateRasp = this.getLastUpdate(this.datosRasp);
		this.valuesRasp = this.datosRasp.map(({ variable }) => variable);
	}

	getLastUpdate(datos: Dato[]): Date {
		return new Date(datos[datos.length - 1].date);
	}

	getLastDatos(datos: Dato[]): Dato[] {
		const size = 60;
		return datos.slice(-size);
	}
}
