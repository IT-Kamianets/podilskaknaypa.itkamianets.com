import { Translate } from 'wacom';

export const hr = {
	'Go to homepage': 'Idi na početnu stranicu',
	'Switch to dark mode': 'Prebaci na tamni način rada',
	'Switch to light mode': 'Prebaci na svijetli način rada',
	'Open language menu': 'Otvori izbornik jezika',
	'Switch language to': 'Promijeni jezik na',
	Socials: 'Društvene mreže',
	'Stay connected with Podilska Knaipa': 'Ostanite povezani s Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Pronađite nas na Instagramu i otvorite našu lokaciju u Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Pratite naše najnovije objave',
	'See new photos, announcements, and stories from the restaurant.':
		'Pogledajte nove fotografije, najave i priče iz restorana.',
	'Open Instagram': 'Otvori Instagram',
	Maps: 'Karte',
	'Get directions to the restaurant': 'Upute do restorana',
	'Open the map, check the route, and share the location with friends.':
		'Otvorite kartu, provjerite rutu i podijelite lokaciju s prijateljima.',
	'Open Google Maps': 'Otvori Google Maps',
	'Open Podilska Knaipa Instagram page': 'Otvori Instagram stranicu Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Otvori lokaciju Podilska Knaipa u Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galerija',
	'The gallery is currently empty': 'Galerija je trenutno prazna',
	'Check back later to see photos from Podilska Knaipa.':
		'Navratite kasnije kako biste vidjeli fotografije iz Podilska Knaipa.',
	Navigation: 'Navigacija',
	'Quick links': 'Brze poveznice',
	'Open the main sections of the website from one place.':
		'Otvorite glavne sekcije web stranice s jednog mjesta.',
	Sales: 'Akcije',
	Articles: 'Članci',
	Reviews: 'Recenzije',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Ova stranica je trenutno prazna',
	'Check back later for updates.': 'Navratite kasnije za novosti.',
	Favorites: 'Favoriti',
	'No saved dishes': 'Nema spremljenih jela',
	'Add items from the menu to favorites, and they will appear here.':
		'Dodajte jela iz jelovnika u favorite i pojavit će se ovdje.',
	'Remove from favorites': 'Ukloni iz favorita',
	'Add to favorites': 'Dodaj u favorite',
	Unavailable: 'Nema',
} as const;

export type HrTranslationKey = keyof typeof hr;

export const hrTranslates: Translate[] = Object.entries(hr).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
