import { Translate } from 'wacom';

export const mt = {
	'Go to homepage': 'Mur fil-paġna ewlenija',
	'Switch to dark mode': 'Aqleb għall-modalità skura',
	'Switch to light mode': 'Aqleb għall-modalità ċara',
	'Open language menu': 'Iftaħ il-menu tal-lingwi',
	'Switch language to': 'Aqleb il-lingwa għal',
	Socials: 'Midja soċjali',
	'Stay connected with Podilska Knaipa': 'Ibqa’ konness ma’ Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Sibna fuq Instagram u iftaħ il-post tagħna fuq Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Segwi l-aġġornamenti l-aktar reċenti tagħna',
	'See new photos, announcements, and stories from the restaurant.':
		'Ara ritratti ġodda, avviżi u stejjer mir-ristorant.',
	'Open Instagram': 'Iftaħ Instagram',
	Maps: 'Mapep',
	'Get directions to the restaurant': 'Ikseb direzzjonijiet għar-ristorant',
	'Open the map, check the route, and share the location with friends.':
		'Iftaħ il-mappa, iċċekkja r-rotta u aqsam il-post mal-ħbieb.',
	'Open Google Maps': 'Iftaħ Google Maps',
	'Open Podilska Knaipa Instagram page': 'Iftaħ il-paġna Instagram ta’ Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Iftaħ il-post ta’ Podilska Knaipa fuq Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Gallerija',
	'The gallery is currently empty': 'Il-gallerija bħalissa vojta',
	'Check back later to see photos from Podilska Knaipa.':
		'Erġa’ lura aktar tard biex tara ritratti ta’ Podilska Knaipa.',
	Navigation: 'Navigazzjoni',
	'Quick links': 'Links veloċi',
	'Open the main sections of the website from one place.':
		'Iftaħ it-taqsimiet ewlenin tas-sit minn post wieħed.',
	Sales: 'Offerti',
	Articles: 'Artikli',
	Reviews: 'Reviżjonijiet',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Din il-paġna bħalissa vojta',
	'Check back later for updates.': 'Erġa’ lura aktar tard għall-aġġornamenti.',
	Favorites: 'Favoriti',
	'No saved dishes': 'M’hemmx platti salvati',
	'Add items from the menu to favorites, and they will appear here.':
		'Żid platti mill-menu mal-favoriti u jidhru hawnhekk.',
	'Remove from favorites': 'Neħħi mill-favoriti',
	'Add to favorites': 'Żid mal-favoriti',
	Unavailable: 'Mhux disponibbli',
} as const;

export type MtTranslationKey = keyof typeof mt;

export const mtTranslates: Translate[] = Object.entries(mt).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
