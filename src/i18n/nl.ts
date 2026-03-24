import { Translate } from 'wacom';

export const nl = {
	'Go to homepage': 'Ga naar de homepage',
	'Switch to dark mode': 'Schakel naar donkere modus',
	'Switch to light mode': 'Schakel naar lichte modus',
	'Open language menu': 'Taalmenu openen',
	'Switch language to': 'Taal wijzigen naar',
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

export type NlTranslationKey = keyof typeof nl;

export const nlTranslates: Translate[] = Object.entries(nl).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
