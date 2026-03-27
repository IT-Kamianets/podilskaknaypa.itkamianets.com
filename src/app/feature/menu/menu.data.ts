import menuData from '../../../data/menu.json';
import type { LanguageCode } from '../language/language.type';

export type LocalizedValue = Partial<Record<LanguageCode, string | null>>;

export interface RawMenuItem {
	slug: string;
	title: LocalizedValue;
	price: number | null;
	description: LocalizedValue;
	labels: LocalizedValue[];
	image: string;
}

export interface RawMenuSection {
	name: LocalizedValue;
	description: LocalizedValue;
	items: RawMenuItem[];
}

export interface MenuItem {
	id: string;
	slug: string;
	title: string;
	price: number | null;
	description: string | null;
	labels: string[];
	image: string;
	imageAlt: string;
	soldOut: boolean;
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

const _menuSections = menuData as RawMenuSection[];

const _groupDefinitions = [
	{
		id: 'appetizers',
		names: {
			ua: 'Закуски',
			en: 'Appetizers',
		},
		sectionIds: ['до-нашого-пінного', 'холодні-закуски', 'салати', 'гарячі-закуски'],
	},
	{
		id: 'main',
		names: {
			ua: 'Основне',
			en: 'Main',
		},
		sectionIds: ['супи', 'основні-страви', 'тісто', 'бургери', 'піч', 'гарніри'],
	},
	{
		id: 'desserts',
		names: {
			ua: 'Солодке',
			en: 'Desserts',
		},
		sectionIds: ['десерти', 'хліб-усьому-голова'],
	},
] as const;

const _priceFallbackByLanguage: Record<LanguageCode, string> = {
	ua: 'Ціну уточнюйте',
	bg: 'Ask for price',
	hr: 'Ask for price',
	cs: 'Ask for price',
	da: 'Ask for price',
	nl: 'Ask for price',
	en: 'Ask for price',
	et: 'Ask for price',
	fi: 'Ask for price',
	fr: 'Ask for price',
	de: 'Ask for price',
	el: 'Ask for price',
	hu: 'Ask for price',
	ga: 'Ask for price',
	it: 'Ask for price',
	lv: 'Ask for price',
	lt: 'Ask for price',
	mt: 'Ask for price',
	pl: 'Ask for price',
	pt: 'Ask for price',
	ro: 'Ask for price',
	sk: 'Ask for price',
	sl: 'Ask for price',
	es: 'Ask for price',
	sv: 'Ask for price',
};

export const menuSections = buildMenuSections('ua');

export const menuGroups = buildMenuGroups('ua');

export const navigationSection =
	menuSections.find((section) => section.id === 'бургери') ?? menuSections[0];

export function buildMenuSections(language: LanguageCode) {
	return _menuSections.map((section) => _toMenuSection(section, language));
}

export function buildMenuGroups(language: LanguageCode) {
	const sections = buildMenuSections(language);
	const sectionById = new Map(sections.map((section) => [section.id, section] as const));

	return _groupDefinitions.map((group) => ({
		id: group.id,
		name: _resolveGroupName(group.names, language),
		sections: group.sectionIds
			.map((sectionId) => sectionById.get(sectionId))
			.filter((section): section is MenuSection => Boolean(section)),
	}));
}

function _toMenuSection(section: RawMenuSection, language: LanguageCode): MenuSection {
	const sectionName = _translateValue(section.name, language) ?? '';
	const sectionId = createId(_translateValue(section.name, 'ua') ?? sectionName);

	return {
		id: sectionId,
		name: sectionName,
		description: cleanText(_translateValue(section.description, language)),
		items: section.items.map((item) => ({
			id: `${sectionId}-${createId(item.slug)}`,
			slug: item.slug,
			title: _translateValue(item.title, language) ?? item.slug,
			price: item.price,
			description: cleanText(_translateValue(item.description, language)),
			labels: item.labels
				.map((label) => cleanText(_translateValue(label, language)))
				.filter((label): label is string => Boolean(label)),
			image: item.image,
			imageAlt: _translateValue(item.title, language) ?? item.slug,
			soldOut: false,
			displayPrice:
				item.price === null ? _priceFallbackByLanguage[language] : `${item.price} ₴`,
		})),
	};
}

function _resolveGroupName(names: { ua: string; en: string }, language: LanguageCode) {
	return language === 'ua' ? names.ua : names.en;
}

function _translateValue(value: LocalizedValue | null | undefined, language: LanguageCode) {
	if (!value) {
		return null;
	}

	const localized = value[language];

	if (localized) {
		return localized;
	}

	const english = value.en;

	if (english) {
		return english;
	}

	const ukrainian = value.ua;

	if (ukrainian) {
		return ukrainian;
	}

	return Object.values(value).find((entry): entry is string => Boolean(entry)) ?? null;
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
