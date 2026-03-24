import { Translate } from 'wacom';

export const sl = {
	'Go to homepage': 'Pojdi na domačo stran',
	'Switch to dark mode': 'Preklopi v temni način',
	'Switch to light mode': 'Preklopi v svetli način',
	'Open language menu': 'Odpri meni jezikov',
	'Switch language to': 'Preklopi jezik na',
	Socials: 'Družbena omrežja',
	'Stay connected with Podilska Knaipa': 'Ostanite povezani s Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Najdite nas na Instagramu in odprite našo lokacijo v Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Spremljajte naše najnovejše objave',
	'See new photos, announcements, and stories from the restaurant.':
		'Oglejte si nove fotografije, obvestila in zgodbe iz restavracije.',
	'Open Instagram': 'Odpri Instagram',
	Maps: 'Zemljevidi',
	'Get directions to the restaurant': 'Navodila do restavracije',
	'Open the map, check the route, and share the location with friends.':
		'Odprite zemljevid, preverite pot in delite lokacijo s prijatelji.',
	'Open Google Maps': 'Odpri Google Maps',
	'Open Podilska Knaipa Instagram page': 'Odpri Instagram stran Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Odpri lokacijo Podilska Knaipa v Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galerija',
	'The gallery is currently empty': 'Galerija je trenutno prazna',
	'Check back later to see photos from Podilska Knaipa.':
		'Vrnite se pozneje in si oglejte fotografije iz Podilska Knaipa.',
	Navigation: 'Navigacija',
	'Quick links': 'Hitre povezave',
	'Open the main sections of the website from one place.':
		'Odprite glavne dele spletnega mesta z enega mesta.',
	Sales: 'Akcije',
	Articles: 'Članki',
	Reviews: 'Reviews',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Ta stran je trenutno prazna',
	'Check back later for updates.': 'Vrnite se pozneje za posodobitve.',
	Favorites: 'Priljubljene',
	'No saved dishes': 'Ni shranjenih jedi',
	'Add items from the menu to favorites, and they will appear here.':
		'Dodajte jedi iz menija med priljubljene in prikazane bodo tukaj.',
	'Remove from favorites': 'Odstrani iz priljubljenih',
	'Add to favorites': 'Dodaj med priljubljene',
	Unavailable: 'Ni na voljo',
} as const;

export type SlTranslationKey = keyof typeof sl;

export const slTranslates: Translate[] = Object.entries(sl).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
