import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateDirective } from 'wacom';

@Component({
	imports: [TranslateDirective],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
	protected readonly photos = [
		{ src: 'gallery/1.png', alt: 'Podilska Knaipa photo 1' },
		{ src: 'gallery/2.png', alt: 'Podilska Knaipa photo 2' },
		{ src: 'gallery/3.png', alt: 'Podilska Knaipa photo 3' },
		{ src: 'gallery/4.png', alt: 'Podilska Knaipa photo 4' },
		{ src: 'gallery/5.png', alt: 'Podilska Knaipa photo 5' },
		{ src: 'gallery/6.png', alt: 'Podilska Knaipa photo 6' },
	];
}
