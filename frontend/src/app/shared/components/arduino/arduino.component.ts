import { Component, OnInit } from '@angular/core';
import { DatosService } from 'app/services/datos.service';
import { Dato } from 'app/shared/models/Dato';
import { ReversePipe } from 'ngx-pipes';
import { interval, Subscription } from 'rxjs';

@Component({
	selector: 'app-arduino',
	templateUrl: './arduino.component.html',
	styleUrls: ['./arduino.component.css'],
	providers: [ReversePipe],
})
export class ArduinoComponent implements OnInit {
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
	// Arduino
	datosArduino: Dato[];
	lastDateArduino: Date;
	valuesArduino: Number[];
	sizeArduino: number;
	promedioArduino: Number;

	constructor(private service: DatosService) {}

	ngOnInit() {
		this.actualizar();
		this.mySubscription = interval(5000).subscribe(() => {
			this.actualizar();
			console.log('aqui toy');
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
		this.datosTable = this.datos.slice(0, 5);
		this.datesTable = this.datosTable.map((dato) => new Date(dato.date));
	}

	actualizar() {
		this.getData();
		this.getArduinoData();
	}

	getArduinoData() {
		this.datosArduino = this.datos.filter((dato) => {
			return dato.categorie == 'Arduino';
		});
		this.sizeArduino = this.datosArduino.length;
		this.promedioArduino =
			this.datos
				.map(({ variable }) => variable)
				.reduce((prev, next) => prev + next) / this.sizeArduino;
		this.datosArduino = this.getLastDatos(this.datosArduino);
		this.lastDateArduino = this.getLastUpdate(this.datosArduino);
		this.valuesArduino = this.datosArduino.map(({ variable }) => variable);
	}

	getLastUpdate(datos: Dato[]): Date {
		return new Date(datos[datos.length - 1].date);
	}

	getLastDatos(datos: Dato[]): Dato[] {
		const size = 60;
		return datos.slice(-size);
	}
}
