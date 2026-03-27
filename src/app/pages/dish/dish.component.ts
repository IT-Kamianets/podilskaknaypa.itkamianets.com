import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import menuData from '../../../menu.json';
import { RawMenuItem, RawMenuSection } from '../../feature/menu/menu.data';

interface DishFact {
	label: string;
	value: string;
}

interface DishSuggestion {
	title: string;
	description: string | null;
	price: string;
	slug: string;
}

interface StaticDishViewModel {
	slug: string;
	sectionName: string;
	title: string;
	description: string | null;
	price: string;
	labels: string[];
	facts: DishFact[];
	suggestions: DishSuggestion[];
}

const _fallbackItem: RawMenuItem = {
	slug: 'static-fallback-dish',
	title: { ua: 'Страва дня', en: 'Dish of the Day' },
	price: null,
	description: {
		ua: 'Опис страви тимчасово недоступний.',
		en: 'Dish description is temporarily unavailable.',
	},
	labels: [],
	image: 'https://podilskaknaypa.itkamianets.com/logo.png',
};

const _fallbackSection: RawMenuSection = {
	name: { ua: 'Меню', en: 'Menu' },
	description: {},
	items: [_fallbackItem],
};

const _sections = menuData as RawMenuSection[];
const _section = _sections[0] ?? _fallbackSection;
const _item = _section.items[0] ?? _fallbackItem;

@Component({
	imports: [RouterLink],
	templateUrl: './dish.component.html',
	styleUrl: './dish.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DishComponent {
	protected readonly dish = _buildDishViewModel(_section, _item);
}

function _buildDishViewModel(section: RawMenuSection, item: RawMenuItem): StaticDishViewModel {
	return {
		slug: item.slug,
		sectionName: _translate(section.name) ?? 'Меню',
		title: _translate(item.title) ?? 'Страва дня',
		description: _cleanText(_translate(item.description)),
		price: item.price === null ? 'Ціну уточнюйте' : `${item.price} ₴`,
		labels: item.labels.map((label) => _translate(label)).filter((label): label is string => Boolean(label)),
		facts: _buildFacts(section, item),
		suggestions: _buildSuggestions(section, item),
	};
}

function _buildFacts(section: RawMenuSection, item: RawMenuItem) {
	const facts: DishFact[] = [
		{
			label: 'Розділ меню',
			value: _translate(section.name) ?? 'Меню',
		},
		{
			label: 'Формат подачі',
			value: _translate(item.labels[0]) ?? 'Порцію уточнюйте у команді ресторану',
		},
		{
			label: 'Особливість',
			value: _translate(item.labels[1]) ?? 'Авторська інтерпретація локальної подачі',
		},
		{
			label: 'Час приготування',
			value: '10-15 хвилин',
		},
		{
			label: 'Середня калорійність',
			value: '320 ккал',
		},
	];

	return facts;
}

function _buildSuggestions(section: RawMenuSection, currentItem: RawMenuItem) {
	return section.items
		.filter((item) => item.slug !== currentItem.slug)
		.slice(0, 3)
		.map((item) => ({
			title: _translate(item.title) ?? 'Страва дня',
			description: _cleanText(_translate(item.description)),
			price: item.price === null ? 'Ціну уточнюйте' : `${item.price} ₴`,
			slug: item.slug,
		}));
}

function _translate(value: RawMenuSection['name'] | RawMenuItem['title'] | RawMenuItem['description'] | RawMenuItem['labels'][number] | undefined) {
	if (!value) {
		return null;
	}

	return value.ua ?? value.en ?? Object.values(value).find((entry): entry is string => Boolean(entry)) ?? null;
}

function _cleanText(value: string | null) {
	if (!value) {
		return null;
	}

	return value.replace(/показати$/i, '').replace(/\s+/g, ' ').replace(/\s([,.!?:;])/g, '$1').trim();
}
