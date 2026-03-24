import { Translate } from 'wacom';

export const el = {
	'Go to homepage': 'Μετάβαση στην αρχική σελίδα',
	'Switch to dark mode': 'Μετάβαση σε σκοτεινή λειτουργία',
	'Switch to light mode': 'Μετάβαση σε φωτεινή λειτουργία',
	'Open language menu': 'Άνοιγμα μενού γλωσσών',
	'Switch language to': 'Αλλαγή γλώσσας σε',
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
} as const;

export type ElTranslationKey = keyof typeof el;

export const elTranslates: Translate[] = Object.entries(el).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
