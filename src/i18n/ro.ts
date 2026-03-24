import { Translate } from 'wacom';

export const ro = {
	'Go to homepage': 'Mergi la pagina principală',
	'Switch to dark mode': 'Comută la modul întunecat',
	'Switch to light mode': 'Comută la modul luminos',
	'Open language menu': 'Deschide meniul de limbi',
	'Switch language to': 'Schimbă limba în',
	Socials: 'Socials',
	'Stay connected with Podilska Knaipa': 'Stay connected with Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Find us on Instagram and open our location in Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Follow our latest updates',
	'See new photos, announcements, and stories from the restaurant.':
		'See new photos, announcements, and stories from the restaurant.',
	'Open Instagram': 'Open Instagram',
	Maps: 'Maps',
	'Get directions to the restaurant': 'Get directions to the restaurant',
	'Open the map, check the route, and share the location with friends.':
		'Open the map, check the route, and share the location with friends.',
	'Open Google Maps': 'Open Google Maps',
	'Open Podilska Knaipa Instagram page': 'Open Podilska Knaipa Instagram page',
	'Open Podilska Knaipa location in Google Maps': 'Open Podilska Knaipa location in Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Gallery',
	'The gallery is currently empty': 'The gallery is currently empty',
	'Check back later to see photos from Podilska Knaipa.':
		'Check back later to see photos from Podilska Knaipa.',
	Navigation: 'Navigation',
	'Quick links': 'Quick links',
	'Open the main sections of the website from one place.':
		'Open the main sections of the website from one place.',
	Sales: 'Sales',
	Articles: 'Articles',
	Reviews: 'Reviews',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'This page is currently empty',
	'Check back later for updates.': 'Check back later for updates.',
} as const;

export type RoTranslationKey = keyof typeof ro;

export const roTranslates: Translate[] = Object.entries(ro).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
