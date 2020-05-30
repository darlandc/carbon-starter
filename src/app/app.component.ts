import { Component } from '@angular/core';
import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'carbon-starter';
	overlay = false;
	isActive = true;
	size;
}
