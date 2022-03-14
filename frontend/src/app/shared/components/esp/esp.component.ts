import { Component, OnInit } from '@angular/core';
import { DatosService } from 'app/services/datos.service';
import { Dato } from 'app/shared/models/Dato';
import { ReversePipe } from 'ngx-pipes';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-esp',
	templateUrl: './esp.component.html',
	styleUrls: ['./esp.component.css'],
	providers: [ReversePipe],
})
export class EspComponent implements OnInit {
	mySubscription: Subscription;
	datos: Dato[] = [
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
	// Esp
	datosEsp: Dato[];
	lastDateEsp: Date;
	valuesEsp: Number[];
	sizeEsp: number;
	promedioEsp: Number;

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
		this.getEspData();
	}

	getEspData() {
		this.datosEsp = this.datos.filter((dato) => {
			return dato.categorie == 'Esp';
		});
		this.sizeEsp = this.datosEsp.length;
		this.promedioEsp =
			this.datos
				.map(({ variable }) => variable)
				.reduce((prev, next) => prev + next) / this.sizeEsp;
		this.datosEsp = this.getLastDatos(this.datosEsp);
		this.lastDateEsp = this.getLastUpdate(this.datosEsp);
		this.valuesEsp = this.datosEsp.map(({ variable }) => variable);
	}

	getLastUpdate(datos: Dato[]): Date {
		return new Date(datos[datos.length - 1].date);
	}

	getLastDatos(datos: Dato[]): Dato[] {
		const size = 60;
		return datos.slice(-size);
	}
}
