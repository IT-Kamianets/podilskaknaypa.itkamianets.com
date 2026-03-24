import { Translate } from 'wacom';

export const ua = {
	'Go to homepage': 'Перейти на головну сторінку',
	'Switch to dark mode': 'Увімкнути темний режим',
	'Switch to light mode': 'Увімкнути світлий режим',
	'Open language menu': 'Відкрити меню мов',
	'Switch language to': 'Перемкнути мову на',
	Socials: 'Соцмережі',
	'Stay connected with Podilska Knaipa': 'Залишайтеся на зв’язку з Подільською Кнайпою',
	'Find us on Instagram and open our location in Google Maps.':
		'Знайдіть нас в Instagram і відкрийте нашу локацію в Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Слідкуйте за нашими оновленнями',
	'See new photos, announcements, and stories from the restaurant.':
		'Дивіться нові фото, анонси та історії з ресторану.',
	'Open Instagram': 'Відкрити Instagram',
	Maps: 'Мапи',
	'Get directions to the restaurant': 'Прокласти маршрут до ресторану',
	'Open the map, check the route, and share the location with friends.':
		'Відкрийте мапу, перевірте маршрут і поділіться локацією з друзями.',
	'Open Google Maps': 'Відкрити Google Maps',
	'Open Podilska Knaipa Instagram page': 'Відкрити Instagram сторінку Подільської Кнайпи',
	'Open Podilska Knaipa location in Google Maps':
		'Відкрити локацію Подільської Кнайпи в Google Maps',
	Quests: 'Квести',
	'There are currently no quests': 'Наразі квестів немає',
	'Check back later for new activities and special offers.':
		'Завітайте пізніше, щоб побачити нові активності та спеціальні пропозиції.',
	Gallery: 'Галерея',
	'The gallery is currently empty': 'Галерея зараз порожня',
	'Check back later to see photos from Podilska Knaipa.':
		'Завітайте пізніше, щоб побачити фото з Подільської Кнайпи.',
} as const;

export type UkrainianTranslationKey = keyof typeof ua;

export const uaTranslates: Translate[] = Object.entries(ua).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
