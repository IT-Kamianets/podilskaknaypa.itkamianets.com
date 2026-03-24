import { Translate } from 'wacom';

export const hu = {
	'Go to homepage': 'Ugrás a kezdőlapra',
	'Switch to dark mode': 'Váltás sötét módra',
	'Switch to light mode': 'Váltás világos módra',
	'Open language menu': 'Nyelvi menü megnyitása',
	'Switch language to': 'Nyelv váltása erre',
	Socials: 'Közösségi oldalak',
	'Stay connected with Podilska Knaipa': 'Maradjon kapcsolatban a Podilska Knaipával',
	'Find us on Instagram and open our location in Google Maps.':
		'Találjon meg minket Instagramon, és nyissa meg a helyünket a Google Mapsben.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Kövesse legújabb híreinket',
	'See new photos, announcements, and stories from the restaurant.':
		'Nézzen meg új fotókat, bejelentéseket és történeteket az étteremből.',
	'Open Instagram': 'Instagram megnyitása',
	Maps: 'Térképek',
	'Get directions to the restaurant': 'Útvonalterv az étteremhez',
	'Open the map, check the route, and share the location with friends.':
		'Nyissa meg a térképet, ellenőrizze az útvonalat, és ossza meg a helyet barátaival.',
	'Open Google Maps': 'Google Maps megnyitása',
	'Open Podilska Knaipa Instagram page': 'A Podilska Knaipa Instagram-oldalának megnyitása',
	'Open Podilska Knaipa location in Google Maps': 'A Podilska Knaipa helyének megnyitása a Google Mapsben',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galéria',
	'The gallery is currently empty': 'A galéria jelenleg üres',
	'Check back later to see photos from Podilska Knaipa.':
		'Nézzen vissza később, hogy megtekintse a Podilska Knaipa fotóit.',
	Navigation: 'Navigáció',
	'Quick links': 'Gyorshivatkozások',
	'Open the main sections of the website from one place.':
		'Nyissa meg a weboldal fő részeit egy helyről.',
	Sales: 'Akciók',
	Articles: 'Cikkek',
	Reviews: 'Reviews',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Ez az oldal jelenleg üres',
	'Check back later for updates.': 'Nézzen vissza később a frissítésekért.',
	Favorites: 'Kedvencek',
	'No saved dishes': 'Nincsenek mentett ételek',
	'Add items from the menu to favorites, and they will appear here.':
		'Adjon ételeket a menüből a kedvencekhez, és itt jelennek meg.',
	'Remove from favorites': 'Eltávolítás a kedvencekből',
	'Add to favorites': 'Hozzáadás a kedvencekhez',
	Unavailable: 'Nincs',
} as const;

export type HuTranslationKey = keyof typeof hu;

export const huTranslates: Translate[] = Object.entries(hu).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
