import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}
