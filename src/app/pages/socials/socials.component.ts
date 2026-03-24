import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective, TranslatePipe } from 'wacom';

@Component({
	imports: [TranslateDirective, TranslatePipe],
	templateUrl: './socials.component.html',
	styleUrl: './socials.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {}
