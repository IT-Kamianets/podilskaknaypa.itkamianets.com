import menuData from '../../../data/menu.json';

export interface RawMenuItem {
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

export interface RawMenuSection {
	name: string;
	description: string | null;
	items: RawMenuItem[];
}

export interface MenuItem extends RawMenuItem {
	id: string;
	description: string | null;
	displayPrice: string;
}

export interface MenuSection {
	id: string;
	name: string;
	description: string | null;
	items: MenuItem[];
}

export interface MenuGroup {
	id: string;
	name: string;
	sections: MenuSection[];
}

export const menuSections: MenuSection[] = (menuData as RawMenuSection[]).map((section) => ({
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

export const menuGroups: MenuGroup[] = [
	createGroup('Закуски', [
		'До нашого пінного',
		'Холодні закуски',
		'Салати',
		'Гарячі закуски',
	]),
	createGroup('Основне', ['Супи', 'Основні страви', 'Тісто', 'Бургери', 'Піч', 'Гарніри']),
	createGroup('Солодке', ['Десерти', 'Хліб усьому голова']),
];

export const navigationSection =
	menuSections.find((section) => section.name === 'Бургери') ?? menuSections[0];

function createGroup(name: string, sectionNames: string[]) {
	return {
		id: createId(name),
		name,
		sections: sectionNames
			.map((sectionName) => menuSections.find((section) => section.name === sectionName))
			.filter((section): section is MenuSection => Boolean(section)),
	};
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
