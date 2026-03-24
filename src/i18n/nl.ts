import { Translate } from 'wacom';

export const nl = {
	'Go to homepage': 'Ga naar de homepage',
	'Switch to dark mode': 'Schakel naar donkere modus',
	'Switch to light mode': 'Schakel naar lichte modus',
	'Open language menu': 'Taalmenu openen',
	'Switch language to': 'Taal wijzigen naar',
	Socials: 'Sociale media',
	'Stay connected with Podilska Knaipa': 'Blijf verbonden met Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Vind ons op Instagram en open onze locatie in Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Volg onze nieuwste updates',
	'See new photos, announcements, and stories from the restaurant.':
		'Bekijk nieuwe foto’s, aankondigingen en verhalen uit het restaurant.',
	'Open Instagram': 'Instagram openen',
	Maps: 'Kaarten',
	'Get directions to the restaurant': 'Routebeschrijving naar het restaurant',
	'Open the map, check the route, and share the location with friends.':
		'Open de kaart, controleer de route en deel de locatie met vrienden.',
	'Open Google Maps': 'Google Maps openen',
	'Open Podilska Knaipa Instagram page': 'Instagram-pagina van Podilska Knaipa openen',
	'Open Podilska Knaipa location in Google Maps': 'Locatie van Podilska Knaipa openen in Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galerij',
	'The gallery is currently empty': 'De galerij is momenteel leeg',
	'Check back later to see photos from Podilska Knaipa.':
		'Kom later terug om foto’s van Podilska Knaipa te bekijken.',
	Navigation: 'Navigatie',
	'Quick links': 'Snelle links',
	'Open the main sections of the website from one place.':
		'Open de belangrijkste onderdelen van de website vanaf één plek.',
	Sales: 'Aanbiedingen',
	Articles: 'Artikelen',
	Reviews: 'Reviews',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Deze pagina is momenteel leeg',
	'Check back later for updates.': 'Kom later terug voor updates.',
	Favorites: 'Favorieten',
	'No saved dishes': 'Geen opgeslagen gerechten',
	'Add items from the menu to favorites, and they will appear here.':
		'Voeg gerechten uit het menu toe aan favorieten en ze verschijnen hier.',
	'Remove from favorites': 'Uit favorieten verwijderen',
	'Add to favorites': 'Toevoegen aan favorieten',
	Unavailable: 'Niet beschikbaar',
} as const;

export type NlTranslationKey = keyof typeof nl;

export const nlTranslates: Translate[] = Object.entries(nl).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
