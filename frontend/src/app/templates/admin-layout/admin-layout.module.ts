import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../shared/components/dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { GraficaBarrasComponent } from 'app/shared/components/graficas/grafica-barras/grafica-barras.component';
import { GraficaPuntosComponent } from 'app/shared/components/graficas/grafica-puntos/grafica-puntos.component';
import { NgPipesModule } from 'ngx-pipes';
import { ArduinoComponent } from 'app/shared/components/arduino/arduino.component';
import { RaspComponent } from 'app/shared/components/rasp/rasp.component';
import { EspComponent } from 'app/shared/components/esp/esp.component';
import { BeagleComponent } from 'app/shared/components/beagle/beagle.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(AdminLayoutRoutes),
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatRippleModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatTooltipModule,
		NgPipesModule,
	],
	declarations: [
		DashboardComponent,
		GraficaBarrasComponent,
		GraficaPuntosComponent,
		ArduinoComponent,
		RaspComponent,
		EspComponent,
		BeagleComponent,
	],
})
export class AdminLayoutModule {}
