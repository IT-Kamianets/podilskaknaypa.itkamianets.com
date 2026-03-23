import { ChangeDetectionStrategy, Component } from '@angular/core';
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

const MENU_SECTIONS = (menuData as RawMenuSection[]).map((section) => ({
	id: createId(section.name),
	name: section.name,
	description: cleanText(section.description),
	items: section.items.map((item) => ({
		...item,
		id: `${createId(section.name)}-${createId(item.url)}`,
		description: cleanText(item.description),
		displayPrice: item.price === null ? 'Ціну уточнюйте' : `${item.price} грн`,
	})),
}));

const MENU_ITEMS = MENU_SECTIONS.flatMap((section) =>
	section.items.map((item) => ({
		...item,
		sectionName: section.name,
		sectionId: section.id,
	})),
);

const FEATURED_ITEMS = [...MENU_ITEMS]
	.filter((item) => !item.soldOut)
	.sort((left, right) => right.likes - left.likes)
	.slice(0, 6);

const MENU_STATS = [
	{ value: `${MENU_SECTIONS.length}`, label: 'категорій' },
	{ value: `${MENU_ITEMS.length}`, label: 'позиція в меню' },
	{
		value: `${Math.round(MENU_ITEMS.filter((item) => !item.soldOut).length / MENU_SECTIONS.length)}`,
		label: 'страв у середньому на розділ',
	},
];

@Component({
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
	protected readonly sections = MENU_SECTIONS;
	protected readonly featuredItems = FEATURED_ITEMS;
	protected readonly stats = MENU_STATS;

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
