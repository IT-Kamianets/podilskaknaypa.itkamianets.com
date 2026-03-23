import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MenuGroup, MenuItem, MenuSection, menuGroups } from '../../feature/menu/menu.data';

@Component({
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	protected readonly groups = menuGroups;
	protected readonly selectedGroupId = signal(menuGroups[0]?.id ?? '');
	protected readonly activeGroup = computed(
		() => this.groups.find((group) => group.id === this.selectedGroupId()) ?? this.groups[0],
	);
	protected readonly activeSections = computed(() => this.activeGroup()?.sections ?? []);

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
}
