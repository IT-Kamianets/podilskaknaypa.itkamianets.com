import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TranslateService } from 'wacom';
import { LanguageService } from '../../feature/language/language.service';
import { FavoritesService } from '../../feature/menu/favorites.service';
import { buildMenuGroups } from '../../feature/menu/menu-by-language.data';
import { MenuGroup, MenuItem, MenuSection } from '../../feature/menu/menu.data';

@Component({
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	private readonly _favoritesService = inject(FavoritesService);
	private readonly _languageService = inject(LanguageService);
	private readonly _translateService = inject(TranslateService);

	protected readonly groups = computed(() => buildMenuGroups(this._languageService.language()));
	protected readonly selectedGroupId = signal('appetizers');
	protected readonly activeGroup = computed(
		() => this.groups().find((group) => group.id === this.selectedGroupId()) ?? this.groups()[0],
	);
	protected readonly activeSections = computed(() => this.activeGroup()?.sections ?? []);
	protected readonly unavailableLabel = computed(() =>
		this._translateService.translate('Unavailable')(),
	);

	protected setGroup(groupId: string) {
		this.selectedGroupId.set(groupId);
	}

	protected trackByGroup(_: number, group: MenuGroup) {
		return group.id;
	}

	protected trackBySection(_: number, section: MenuSection) {
		return section.id;
	}

	protected trackByItem(_: number, item: MenuItem) {
		return item.id;
	}

	protected isFavorite(itemId: string) {
		return this._favoritesService.isFavorite(itemId);
	}

	protected getFavoriteLabel(itemId: string) {
		return this._translateService.translate(
			this.isFavorite(itemId) ? 'Remove from favorites' : 'Add to favorites',
		)();
	}

	protected toggleFavorite(itemId: string) {
		this._favoritesService.toggleFavorite(itemId);
	}
}
