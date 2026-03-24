import { Translate } from 'wacom';

export const ga = {
	'Go to homepage': 'Téigh go dtí an leathanach baile',
	'Switch to dark mode': 'Athraigh go mód dorcha',
	'Switch to light mode': 'Athraigh go mód geal',
	'Open language menu': 'Oscail roghchlár teanga',
	'Switch language to': 'Athraigh an teanga go',
	Socials: 'Meáin shóisialta',
	'Stay connected with Podilska Knaipa': 'Fan i dteagmháil le Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Aimsigh muid ar Instagram agus oscail ár suíomh in Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Lean ár nuashonruithe is déanaí',
	'See new photos, announcements, and stories from the restaurant.':
		'Féach ar ghrianghraif nua, fógraí agus scéalta ón mbialann.',
	'Open Instagram': 'Oscail Instagram',
	Maps: 'Léarscáileanna',
	'Get directions to the restaurant': 'Faigh treoracha chuig an mbialann',
	'Open the map, check the route, and share the location with friends.':
		'Oscail an léarscáil, seiceáil an bealach agus roinn an suíomh le cairde.',
	'Open Google Maps': 'Oscail Google Maps',
	'Open Podilska Knaipa Instagram page': 'Oscail leathanach Instagram Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Oscail suíomh Podilska Knaipa in Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Gailearaí',
	'The gallery is currently empty': 'Tá an gailearaí folamh faoi láthair',
	'Check back later to see photos from Podilska Knaipa.':
		'Tar ar ais níos déanaí chun grianghraif de Podilska Knaipa a fheiceáil.',
	Navigation: 'Nascleanúint',
	'Quick links': 'Naisc thapa',
	'Open the main sections of the website from one place.':
		'Oscail príomhranna an tsuímh ghréasáin ó aon áit amháin.',
	Sales: 'Tairiscintí',
	Articles: 'Ailt',
	Reviews: 'Léirmheasanna',
	Events: 'Imeachtaí',
	Jobs: 'Poist',
	'This page is currently empty': 'Tá an leathanach seo folamh faoi láthair',
	'Check back later for updates.': 'Tar ar ais níos déanaí le haghaidh nuashonruithe.',
	Favorites: 'Ceanáin',
	'No saved dishes': 'Níl aon mhiasa sábháilte',
	'Add items from the menu to favorites, and they will appear here.':
		'Cuir míreanna ón roghchlár leis na ceanáin agus taispeánfar anseo iad.',
	'Remove from favorites': 'Bain ó na ceanáin',
	'Add to favorites': 'Cuir leis na ceanáin',
	Unavailable: 'Níl ar fáil',
} as const;

export type GaTranslationKey = keyof typeof ga;

export const gaTranslates: Translate[] = Object.entries(ga).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
