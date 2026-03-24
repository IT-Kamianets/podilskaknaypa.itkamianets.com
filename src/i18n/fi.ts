import { Translate } from 'wacom';

export const fi = {
	'Go to homepage': 'Siirry etusivulle',
	'Switch to dark mode': 'Vaihda tummaan tilaan',
	'Switch to light mode': 'Vaihda vaaleaan tilaan',
	'Open language menu': 'Avaa kielivalikko',
	'Switch language to': 'Vaihda kieleksi',
	Socials: 'Sosiaalinen media',
	'Stay connected with Podilska Knaipa': 'Pysy yhteydessä Podilska Knaipaan',
	'Find us on Instagram and open our location in Google Maps.':
		'Löydät meidät Instagramista ja voit avata sijaintimme Google Mapsissa.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Seuraa uusimpia päivityksiämme',
	'See new photos, announcements, and stories from the restaurant.':
		'Katso uusia kuvia, ilmoituksia ja tarinoita ravintolasta.',
	'Open Instagram': 'Avaa Instagram',
	Maps: 'Kartat',
	'Get directions to the restaurant': 'Reittiohjeet ravintolaan',
	'Open the map, check the route, and share the location with friends.':
		'Avaa kartta, tarkista reitti ja jaa sijainti ystävien kanssa.',
	'Open Google Maps': 'Avaa Google Maps',
	'Open Podilska Knaipa Instagram page': 'Avaa Podilska Knaipan Instagram-sivu',
	'Open Podilska Knaipa location in Google Maps': 'Avaa Podilska Knaipan sijainti Google Mapsissa',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galleria',
	'The gallery is currently empty': 'Galleria on tällä hetkellä tyhjä',
	'Check back later to see photos from Podilska Knaipa.':
		'Tule myöhemmin takaisin katsomaan kuvia Podilska Knaipasta.',
	Navigation: 'Navigointi',
	'Quick links': 'Pikalinkit',
	'Open the main sections of the website from one place.':
		'Avaa sivuston pääosiot yhdestä paikasta.',
	Sales: 'Tarjoukset',
	Articles: 'Artikkelit',
	Reviews: 'Reviews',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Tämä sivu on tällä hetkellä tyhjä',
	'Check back later for updates.': 'Palaa myöhemmin katsomaan päivityksiä.',
	Favorites: 'Suosikit',
	'No saved dishes': 'Ei tallennettuja annoksia',
	'Add items from the menu to favorites, and they will appear here.':
		'Lisää annoksia valikosta suosikkeihin, niin ne näkyvät täällä.',
	'Remove from favorites': 'Poista suosikeista',
	'Add to favorites': 'Lisää suosikkeihin',
	Unavailable: 'Ei saatavilla',
} as const;

export type FiTranslationKey = keyof typeof fi;

export const fiTranslates: Translate[] = Object.entries(fi).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
