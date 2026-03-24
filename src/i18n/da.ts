import { Translate } from 'wacom';

export const da = {
	'Go to homepage': 'Gå til forsiden',
	'Switch to dark mode': 'Skift til mørk tilstand',
	'Switch to light mode': 'Skift til lys tilstand',
	'Open language menu': 'Åbn sprogmenuen',
	'Switch language to': 'Skift sprog til',
	Socials: 'Sociale medier',
	'Stay connected with Podilska Knaipa': 'Hold forbindelsen med Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Find os på Instagram, og åbn vores placering i Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Følg vores seneste opdateringer',
	'See new photos, announcements, and stories from the restaurant.':
		'Se nye billeder, annonceringer og historier fra restauranten.',
	'Open Instagram': 'Åbn Instagram',
	Maps: 'Kort',
	'Get directions to the restaurant': 'Få rutevejledning til restauranten',
	'Open the map, check the route, and share the location with friends.':
		'Åbn kortet, tjek ruten, og del placeringen med venner.',
	'Open Google Maps': 'Åbn Google Maps',
	'Open Podilska Knaipa Instagram page': 'Åbn Podilska Knaipas Instagram-side',
	'Open Podilska Knaipa location in Google Maps': 'Åbn Podilska Knaipas placering i Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galleri',
	'The gallery is currently empty': 'Galleriet er tomt lige nu',
	'Check back later to see photos from Podilska Knaipa.':
		'Kom tilbage senere for at se billeder fra Podilska Knaipa.',
	Navigation: 'Navigation',
	'Quick links': 'Hurtige links',
	'Open the main sections of the website from one place.':
		'Åbn webstedets vigtigste sektioner fra ét sted.',
	Sales: 'Tilbud',
	Articles: 'Artikler',
	Reviews: 'Anmeldelser',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Denne side er tom lige nu',
	'Check back later for updates.': 'Kom tilbage senere for opdateringer.',
	Favorites: 'Favoritter',
	'No saved dishes': 'Ingen gemte retter',
	'Add items from the menu to favorites, and they will appear here.':
		'Tilføj retter fra menuen til favoritter, så vises de her.',
	'Remove from favorites': 'Fjern fra favoritter',
	'Add to favorites': 'Tilføj til favoritter',
	Unavailable: 'Udsolgt',
} as const;

export type DaTranslationKey = keyof typeof da;

export const daTranslates: Translate[] = Object.entries(da).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
