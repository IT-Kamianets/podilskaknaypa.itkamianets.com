import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslateDirective } from 'wacom';

interface GalleryPhoto {
	src: string;
	alt: string;
}

@Component({
	imports: [TranslateDirective],
	templateUrl: './gallery.component.html',
	styleUrl: './gallery.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
	protected readonly photos: GalleryPhoto[] = [
		{ src: 'gallery/1.png', alt: 'Podilska Knaipa photo 1' },
		{ src: 'gallery/2.png', alt: 'Podilska Knaipa photo 2' },
		{ src: 'gallery/3.png', alt: 'Podilska Knaipa photo 3' },
		{ src: 'gallery/4.png', alt: 'Podilska Knaipa photo 4' },
		{ src: 'gallery/5.png', alt: 'Podilska Knaipa photo 5' },
		{ src: 'gallery/6.png', alt: 'Podilska Knaipa photo 6' },
	];

	protected readonly selectedPhoto = signal<GalleryPhoto | null>(null);

	protected openPhoto(photo: GalleryPhoto) {
		this.selectedPhoto.set(photo);
	}

	protected closePhoto() {
		this.selectedPhoto.set(null);
	}
}
