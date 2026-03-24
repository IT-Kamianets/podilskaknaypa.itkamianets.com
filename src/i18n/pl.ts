import { Translate } from 'wacom';

export const pl = {
	'Go to homepage': 'Przejdź do strony głównej',
	'Switch to dark mode': 'Przełącz na tryb ciemny',
	'Switch to light mode': 'Przełącz na tryb jasny',
	'Open language menu': 'Otwórz menu języków',
	'Switch language to': 'Przełącz język na',
	Socials: 'Media społecznościowe',
	'Stay connected with Podilska Knaipa': 'Bądź w kontakcie z Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Znajdź nas na Instagramie i otwórz naszą lokalizację w Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Śledź nasze najnowsze aktualizacje',
	'See new photos, announcements, and stories from the restaurant.':
		'Zobacz nowe zdjęcia, ogłoszenia i relacje z restauracji.',
	'Open Instagram': 'Otwórz Instagram',
	Maps: 'Mapy',
	'Get directions to the restaurant': 'Wyznacz trasę do restauracji',
	'Open the map, check the route, and share the location with friends.':
		'Otwórz mapę, sprawdź trasę i udostępnij lokalizację znajomym.',
	'Open Google Maps': 'Otwórz Google Maps',
	'Open Podilska Knaipa Instagram page': 'Otwórz stronę Instagram Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Otwórz lokalizację Podilska Knaipa w Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galeria',
	'The gallery is currently empty': 'Galeria jest obecnie pusta',
	'Check back later to see photos from Podilska Knaipa.':
		'Zajrzyj później, aby zobaczyć zdjęcia z Podilska Knaipa.',
	Navigation: 'Nawigacja',
	'Quick links': 'Szybkie linki',
	'Open the main sections of the website from one place.':
		'Otwórz główne sekcje strony z jednego miejsca.',
	Sales: 'Promocje',
	Articles: 'Artykuły',
	Reviews: 'Opinie',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Ta strona jest obecnie pusta',
	'Check back later for updates.': 'Zajrzyj później po aktualizacje.',
	Favorites: 'Ulubione',
	'No saved dishes': 'Brak zapisanych dań',
	'Add items from the menu to favorites, and they will appear here.':
		'Dodaj pozycje z menu do ulubionych, a pojawią się tutaj.',
	'Remove from favorites': 'Usuń z ulubionych',
	'Add to favorites': 'Dodaj do ulubionych',
	Unavailable: 'Brak',
} as const;

export type PlTranslationKey = keyof typeof pl;

export const plTranslates: Translate[] = Object.entries(pl).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
