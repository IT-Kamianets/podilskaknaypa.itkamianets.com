import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import menuData from '../../../data/menu.json';
import { RawMenuItem, RawMenuSection } from '../../feature/menu/menu.data';

interface DishFact {
	label: string;
	value: string;
}

interface DishSuggestion {
	title: string;
	description: string | null;
	price: string;
	image: string;
	imageAlt: string;
}

interface StaticDishViewModel {
	sectionName: string;
	title: string;
	description: string | null;
	price: string;
	image: string;
	imageAlt: string;
	labels: string[];
	facts: DishFact[];
	suggestions: DishSuggestion[];
}

const _fallbackItem: RawMenuItem = {
	url: 'static/fallback-dish',
	title: 'Страва дня',
	price: null,
	description: 'Опис страви тимчасово недоступний.',
	labels: [],
	likes: 0,
	image: 'https://podilskaknaypa.itkamianets.com/logo.png',
	imageAlt: 'Подільська Кнайпа',
	soldOut: false,
};

const _fallbackSection: RawMenuSection = {
	name: 'Меню',
	description: null,
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
		sectionName: section.name,
		title: item.title,
		description: _cleanText(item.description),
		price: item.price === null ? 'Ціну уточнюйте' : `${item.price} ₴`,
		image: item.image,
		imageAlt: item.imageAlt,
		labels: item.labels,
		facts: _buildFacts(section, item),
		suggestions: _buildSuggestions(section, item),
	};
}

function _buildFacts(section: RawMenuSection, item: RawMenuItem) {
	const facts: DishFact[] = [
		{
			label: 'Розділ меню',
			value: section.name,
		},
		{
			label: 'Формат подачі',
			value: item.labels[0] ?? 'Порцію уточнюйте у команді ресторану',
		},
		{
			label: 'Особливість',
			value: item.labels[1] ?? 'Авторська інтерпретація локальної подачі',
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
		.filter((item) => item.url !== currentItem.url)
		.slice(0, 3)
		.map((item) => ({
			title: item.title,
			description: _cleanText(item.description),
			price: item.price === null ? 'Ціну уточнюйте' : `${item.price} ₴`,
			image: item.image,
			imageAlt: item.imageAlt,
		}));
}

function _cleanText(value: string | null) {
	if (!value) {
		return null;
	}

	return value.replace(/показати$/i, '').replace(/\s+/g, ' ').replace(/\s([,.!?:;])/g, '$1').trim();
}
