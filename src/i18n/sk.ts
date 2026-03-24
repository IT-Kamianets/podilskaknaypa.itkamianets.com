import { Translate } from 'wacom';

export const sk = {
	'Go to homepage': 'Prejsť na domovskú stránku',
	'Switch to dark mode': 'Prepnúť do tmavého režimu',
	'Switch to light mode': 'Prepnúť do svetlého režimu',
	'Open language menu': 'Otvoriť ponuku jazykov',
	'Switch language to': 'Prepnúť jazyk na',
	Socials: 'Sociálne siete',
	'Stay connected with Podilska Knaipa': 'Zostaňte v spojení s Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Nájdite nás na Instagrame a otvorte našu polohu v Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Sledujte naše najnovšie novinky',
	'See new photos, announcements, and stories from the restaurant.':
		'Pozrite si nové fotografie, oznámenia a príbehy z reštaurácie.',
	'Open Instagram': 'Otvoriť Instagram',
	Maps: 'Mapy',
	'Get directions to the restaurant': 'Získať trasu do reštaurácie',
	'Open the map, check the route, and share the location with friends.':
		'Otvorte mapu, skontrolujte trasu a zdieľajte polohu s priateľmi.',
	'Open Google Maps': 'Otvoriť Google Maps',
	'Open Podilska Knaipa Instagram page': 'Otvoriť instagramovú stránku Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Otvoriť polohu Podilska Knaipa v Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galéria',
	'The gallery is currently empty': 'Galéria je momentálne prázdna',
	'Check back later to see photos from Podilska Knaipa.':
		'Vráťte sa neskôr a pozrite si fotografie z Podilska Knaipa.',
	Navigation: 'Navigácia',
	'Quick links': 'Rýchle odkazy',
	'Open the main sections of the website from one place.':
		'Otvorte hlavné sekcie webu z jedného miesta.',
	Sales: 'Akcie',
	Articles: 'Články',
	Reviews: 'Recenzie',
	Events: 'Podujatia',
	Jobs: 'Práca',
	'This page is currently empty': 'Táto stránka je momentálne prázdna',
	'Check back later for updates.': 'Vráťte sa neskôr pre novinky.',
	Favorites: 'Obľúbené',
	'No saved dishes': 'Žiadne uložené jedlá',
	'Add items from the menu to favorites, and they will appear here.':
		'Pridajte jedlá z menu do obľúbených a zobrazia sa tu.',
	'Remove from favorites': 'Odstrániť z obľúbených',
	'Add to favorites': 'Pridať do obľúbených',
	Unavailable: 'Nie je',
} as const;

export type SkTranslationKey = keyof typeof sk;

export const skTranslates: Translate[] = Object.entries(sk).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
