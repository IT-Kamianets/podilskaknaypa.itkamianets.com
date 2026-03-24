import { Translate } from 'wacom';

export const ro = {
	'Go to homepage': 'Mergi la pagina principală',
	'Switch to dark mode': 'Comută la modul întunecat',
	'Switch to light mode': 'Comută la modul luminos',
	'Open language menu': 'Deschide meniul de limbi',
	'Switch language to': 'Schimbă limba în',
	Socials: 'Rețele sociale',
	'Stay connected with Podilska Knaipa': 'Rămâneți conectați cu Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Găsiți-ne pe Instagram și deschideți locația noastră în Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Urmăriți cele mai noi actualizări',
	'See new photos, announcements, and stories from the restaurant.':
		'Vedeți fotografii noi, anunțuri și povești din restaurant.',
	'Open Instagram': 'Deschide Instagram',
	Maps: 'Hărți',
	'Get directions to the restaurant': 'Indicații către restaurant',
	'Open the map, check the route, and share the location with friends.':
		'Deschideți harta, verificați traseul și partajați locația cu prietenii.',
	'Open Google Maps': 'Deschide Google Maps',
	'Open Podilska Knaipa Instagram page': 'Deschide pagina de Instagram Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Deschide locația Podilska Knaipa în Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galerie',
	'The gallery is currently empty': 'Galeria este momentan goală',
	'Check back later to see photos from Podilska Knaipa.':
		'Reveniți mai târziu pentru a vedea fotografii de la Podilska Knaipa.',
	Navigation: 'Navigare',
	'Quick links': 'Linkuri rapide',
	'Open the main sections of the website from one place.':
		'Deschideți principalele secțiuni ale site-ului dintr-un singur loc.',
	Sales: 'Promoții',
	Articles: 'Articole',
	Reviews: 'Recenzii',
	Events: 'Evenimente',
	Jobs: 'Locuri de muncă',
	'This page is currently empty': 'Această pagină este momentan goală',
	'Check back later for updates.': 'Reveniți mai târziu pentru actualizări.',
	Favorites: 'Favorite',
	'No saved dishes': 'Nu există preparate salvate',
	'Add items from the menu to favorites, and they will appear here.':
		'Adăugați preparate din meniu la favorite și vor apărea aici.',
	'Remove from favorites': 'Elimină din favorite',
	'Add to favorites': 'Adaugă la favorite',
	Unavailable: 'Indisponibil',
} as const;

export type RoTranslationKey = keyof typeof ro;

export const roTranslates: Translate[] = Object.entries(ro).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
