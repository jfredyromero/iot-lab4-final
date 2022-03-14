import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
	providedIn: 'root',
})
export class DatosService {
	constructor(private http: HttpClient) {}

	getAllData() {
		return this.http.get<any>(environment.url_back_end);
	}
}
