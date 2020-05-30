import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// carbon-components-angular default imports
import { UIShellModule, LoadingModule } from 'carbon-components-angular';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		UIShellModule,
		LoadingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
