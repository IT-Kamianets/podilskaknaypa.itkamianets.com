import menuBg from '../../../data/menu.bg.json';
import menuCs from '../../../data/menu.cs.json';
import menuDa from '../../../data/menu.da.json';
import menuDe from '../../../data/menu.de.json';
import menuEl from '../../../data/menu.el.json';
import menuEn from '../../../data/menu.en.json';
import menuEs from '../../../data/menu.es.json';
import menuEt from '../../../data/menu.et.json';
import menuFi from '../../../data/menu.fi.json';
import menuFr from '../../../data/menu.fr.json';
import menuGa from '../../../data/menu.ga.json';
import menuHr from '../../../data/menu.hr.json';
import menuHu from '../../../data/menu.hu.json';
import menuIt from '../../../data/menu.it.json';
import menuLt from '../../../data/menu.lt.json';
import menuLv from '../../../data/menu.lv.json';
import menuMt from '../../../data/menu.mt.json';
import menuNl from '../../../data/menu.nl.json';
import menuPl from '../../../data/menu.pl.json';
import menuPt from '../../../data/menu.pt.json';
import menuRo from '../../../data/menu.ro.json';
import menuSk from '../../../data/menu.sk.json';
import menuSl from '../../../data/menu.sl.json';
import menuSv from '../../../data/menu.sv.json';
import menuUa from '../../../data/menu.json';
import type { LanguageCode } from '../language/language.type';
import type { MenuSection, RawMenuSection } from './menu.data';

const _menuByLanguage: Record<LanguageCode, RawMenuSection[]> = {
	ua: menuUa as RawMenuSection[],
	bg: menuBg as RawMenuSection[],
	hr: menuHr as RawMenuSection[],
	cs: menuCs as RawMenuSection[],
	da: menuDa as RawMenuSection[],
	nl: menuNl as RawMenuSection[],
	en: menuEn as RawMenuSection[],
	et: menuEt as RawMenuSection[],
	fi: menuFi as RawMenuSection[],
	fr: menuFr as RawMenuSection[],
	de: menuDe as RawMenuSection[],
	el: menuEl as RawMenuSection[],
	hu: menuHu as RawMenuSection[],
	ga: menuGa as RawMenuSection[],
	it: menuIt as RawMenuSection[],
	lv: menuLv as RawMenuSection[],
	lt: menuLt as RawMenuSection[],
	mt: menuMt as RawMenuSection[],
	pl: menuPl as RawMenuSection[],
	pt: menuPt as RawMenuSection[],
	ro: menuRo as RawMenuSection[],
	sk: menuSk as RawMenuSection[],
	sl: menuSl as RawMenuSection[],
	es: menuEs as RawMenuSection[],
	sv: menuSv as RawMenuSection[],
};

const _groupDefinitions = [
	{
		id: 'appetizers',
		names: {
			ua: 'Закуски',
			en: 'Appetizers',
		},
		sectionSlugs: ['do-nashogo-pinnogo', 'holodni-zakuski', 'salati', 'garyachi-zakuski'],
	},
	{
		id: 'main',
		names: {
			ua: 'Основне',
			en: 'Main',
		},
		sectionSlugs: ['supi', 'osnovni-stravi', 'tisto', 'burgers', 'pich', 'garniri'],
	},
	{
		id: 'desserts',
		names: {
			ua: 'Солодке',
			en: 'Desserts',
		},
		sectionSlugs: ['deserti', 'hlib-usomu-golova'],
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

export function buildMenuGroups(language: LanguageCode) {
	const rawSections = _menuByLanguage[language] ?? _menuByLanguage.en;
	const menuSections = rawSections.map((section) => _toMenuSection(section, language));
	const sectionBySlug = new Map(
		menuSections.map((section) => [_getSectionSlug(section), section] as const),
	);

	return _groupDefinitions.map((group) => ({
		id: group.id,
		name: language === 'ua' ? group.names.ua : group.names.en,
		sections: group.sectionSlugs
			.map((sectionSlug) => sectionBySlug.get(sectionSlug))
			.filter((section): section is MenuSection => Boolean(section)),
	}));
}

function _toMenuSection(section: RawMenuSection, language: LanguageCode): MenuSection {
	return {
		id: _createId(section.name),
		name: section.name,
		description: _cleanText(section.description),
		items: section.items.map((item) => ({
			...item,
			id: `${_createId(section.name)}-${_createId(item.url)}`,
			description: _cleanText(item.description),
			displayPrice:
				item.price === null ? _priceFallbackByLanguage[language] : `${item.price} ₴`,
		})),
	};
}

function _getSectionSlug(section: MenuSection) {
	return section.items[0]?.url.split('/')[0] ?? section.id;
}

function _cleanText(value: string | null) {
	if (!value) {
		return null;
	}

	return value
		.replace(/показати$/i, '')
		.replace(/\s+/g, ' ')
		.replace(/\s([,.!?:;])/g, '$1')
		.trim();
}

function _createId(value: string) {
	return value
		.toLowerCase()
		.normalize('NFKD')
		.replace(/[\u0300-\u036f]/g, '')
		.replace(/[^a-zа-яіїєґ0-9]+/gi, '-')
		.replace(/^-+|-+$/g, '');
}
