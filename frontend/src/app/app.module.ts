import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { TemplatesModule } from './templates/templates.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AdminLayoutComponent } from './templates/admin-layout/admin-layout.component';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
	imports: [
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		TemplatesModule,
		RouterModule,
		AppRoutingModule,
		NgPipesModule,
		AgmCoreModule.forRoot({
			apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
		}),
	],
	declarations: [AppComponent, AdminLayoutComponent],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
