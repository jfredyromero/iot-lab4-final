import { Routes } from '@angular/router';

import { DashboardComponent } from '../../shared/components/dashboard/dashboard.component';
import { ArduinoComponent } from 'app/shared/components/arduino/arduino.component';
import { RaspComponent } from 'app/shared/components/rasp/rasp.component';
import { EspComponent } from 'app/shared/components/esp/esp.component';
import { BeagleComponent } from 'app/shared/components/beagle/beagle.component';

export const AdminLayoutRoutes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'arduino', component: ArduinoComponent },
	{ path: 'rasp', component: RaspComponent },
	{ path: 'esp', component: EspComponent },
	{ path: 'beagle', component: BeagleComponent },
];
