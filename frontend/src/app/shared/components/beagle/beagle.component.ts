import { Component, OnInit } from '@angular/core';
import { DatosService } from 'app/services/datos.service';
import { Dato } from 'app/shared/models/Dato';
import { ReversePipe } from 'ngx-pipes';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-beagle',
	templateUrl: './beagle.component.html',
	styleUrls: ['./beagle.component.css'],
	providers: [ReversePipe],
})
export class BeagleComponent implements OnInit {
	mySubscription: Subscription;
	datos: Dato[] = [
		{
			_id: '6215a09136b6203906923d9b',
			categorie: 'Beagle',
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
	// Beagle
	datosBeagle: Dato[];
	lastDateBeagle: Date;
	valuesBeagle: Number[];
	sizeBeagle: number;
	promedioBeagle: Number;

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
		this.getBeagleData();
	}

	getBeagleData() {
		this.datosBeagle = this.datos.filter((dato) => {
			return dato.categorie == 'Beagle';
		});
		this.sizeBeagle = this.datosBeagle.length;
		this.promedioBeagle =
			this.datos
				.map(({ variable }) => variable)
				.reduce((prev, next) => prev + next) / this.sizeBeagle;
		this.datosBeagle = this.getLastDatos(this.datosBeagle);
		this.lastDateBeagle = this.getLastUpdate(this.datosBeagle);
		this.valuesBeagle = this.datosBeagle.map(({ variable }) => variable);
	}

	getLastUpdate(datos: Dato[]): Date {
		return new Date(datos[datos.length - 1].date);
	}

	getLastDatos(datos: Dato[]): Dato[] {
		const size = 60;
		return datos.slice(-size);
	}
}
