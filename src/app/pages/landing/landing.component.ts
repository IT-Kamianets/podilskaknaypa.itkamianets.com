import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import menuData from '../../../data/menu.json';

interface RawMenuItem {
	url: string;
	title: string;
	price: number | null;
	description: string | null;
	labels: string[];
	likes: number;
	image: string;
	imageAlt: string;
	soldOut: boolean;
}

interface RawMenuSection {
	name: string;
	description: string | null;
	items: RawMenuItem[];
}

interface MenuItem extends RawMenuItem {
	id: string;
	description: string | null;
	displayPrice: string;
}

interface MenuSection {
	id: string;
	name: string;
	description: string | null;
	items: MenuItem[];
}

interface MenuGroup {
	id: string;
	name: string;
	sections: MenuSection[];
}

const MENU_SECTIONS: MenuSection[] = (menuData as RawMenuSection[]).map((section) => ({
	id: createId(section.name),
	name: section.name,
	description: cleanText(section.description),
	items: section.items.map((item) => ({
		...item,
		id: `${createId(section.name)}-${createId(item.url)}`,
		description: cleanText(item.description),
		displayPrice: item.price === null ? 'Ціну уточнюйте' : `${item.price} ₴`,
	})),
}));

const MENU_GROUPS: MenuGroup[] = [
	createGroup('Закуски', [
		'До нашого пінного',
		'Холодні закуски',
		'Салати',
		'Гарячі закуски',
	]),
	createGroup('Основне', [
		'Супи',
		'Основні страви',
		'Тісто',
		'Бургери',
		'Піч',
		'Гарніри',
	]),
	createGroup('Солодке', ['Десерти', 'Хліб усьому голова']),
];

@Component({
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	protected readonly groups = MENU_GROUPS;
	protected readonly selectedGroupId = signal(MENU_GROUPS[0]?.id ?? '');
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

function cleanText(value: string | null) {
	if (!value) {
		return null;
	}

	return value
		.replace(/показати$/i, '')
		.replace(/\s+/g, ' ')
		.replace(/\s([,.!?:;])/g, '$1')
		.trim();
}

function createId(value: string) {
	return value
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-zа-яіїєґ0-9]+/gi, '-')
		.replace(/^-+|-+$/g, '');
}

function createGroup(name: string, sectionNames: string[]) {
	return {
		id: createId(name),
		name,
		sections: sectionNames
			.map((sectionName) => MENU_SECTIONS.find((section) => section.name === sectionName))
			.filter((section): section is MenuSection => Boolean(section)),
	};
}
