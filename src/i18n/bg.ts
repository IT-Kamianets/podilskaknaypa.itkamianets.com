import { Translate } from 'wacom';

export const bg = {
	'Go to homepage': 'Към началната страница',
	'Switch to dark mode': 'Превключване към тъмен режим',
	'Switch to light mode': 'Превключване към светъл режим',
	'Open language menu': 'Отваряне на менюто за езици',
	'Switch language to': 'Превключване на езика на',
	Socials: 'Социални мрежи',
	'Stay connected with Podilska Knaipa': 'Останете свързани с Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Намерете ни в Instagram и отворете нашата локация в Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Следете най-новите ни новини',
	'See new photos, announcements, and stories from the restaurant.':
		'Вижте нови снимки, съобщения и истории от ресторанта.',
	'Open Instagram': 'Отвори Instagram',
	Maps: 'Карти',
	'Get directions to the restaurant': 'Упътване до ресторанта',
	'Open the map, check the route, and share the location with friends.':
		'Отворете картата, проверете маршрута и споделете локацията с приятели.',
	'Open Google Maps': 'Отвори Google Maps',
	'Open Podilska Knaipa Instagram page': 'Отвори Instagram страницата на Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Отвори локацията на Podilska Knaipa в Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Галерия',
	'The gallery is currently empty': 'Галерията в момента е празна',
	'Check back later to see photos from Podilska Knaipa.':
		'Проверете отново по-късно, за да видите снимки от Podilska Knaipa.',
	Navigation: 'Навигация',
	'Quick links': 'Бързи връзки',
	'Open the main sections of the website from one place.':
		'Отворете основните секции на уебсайта от едно място.',
	Sales: 'Промоции',
	Articles: 'Статии',
	Reviews: 'Отзиви',
	Events: 'Събития',
	Jobs: 'Работа',
	'This page is currently empty': 'Тази страница в момента е празна',
	'Check back later for updates.': 'Проверете отново по-късно за новини.',
	Favorites: 'Любими',
	'No saved dishes': 'Няма запазени ястия',
	'Add items from the menu to favorites, and they will appear here.':
		'Добавете ястия от менюто в любими и те ще се появят тук.',
	'Remove from favorites': 'Премахни от любими',
	'Add to favorites': 'Добави в любими',
	Unavailable: 'Няма',
} as const;

export type BgTranslationKey = keyof typeof bg;

export const bgTranslates: Translate[] = Object.entries(bg).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
