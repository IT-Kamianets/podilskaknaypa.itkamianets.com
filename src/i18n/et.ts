import { Translate } from 'wacom';

export const et = {
	'Go to homepage': 'Mine avalehele',
	'Switch to dark mode': 'Lülitu tumedale režiimile',
	'Switch to light mode': 'Lülitu heledale režiimile',
	'Open language menu': 'Ava keelemenüü',
	'Switch language to': 'Vaheta keel keeleks',
	Socials: 'Sotsiaalmeedia',
	'Stay connected with Podilska Knaipa': 'Püsige ühenduses Podilska Knaipaga',
	'Find us on Instagram and open our location in Google Maps.':
		'Leia meid Instagramist ja ava meie asukoht Google Mapsis.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Jälgi meie uusimaid uudiseid',
	'See new photos, announcements, and stories from the restaurant.':
		'Vaata uusi fotosid, teateid ja lugusid restoranist.',
	'Open Instagram': 'Ava Instagram',
	Maps: 'Kaardid',
	'Get directions to the restaurant': 'Juhised restorani',
	'Open the map, check the route, and share the location with friends.':
		'Ava kaart, kontrolli marsruuti ja jaga asukohta sõpradega.',
	'Open Google Maps': 'Ava Google Maps',
	'Open Podilska Knaipa Instagram page': 'Ava Podilska Knaipa Instagrami leht',
	'Open Podilska Knaipa location in Google Maps': 'Ava Podilska Knaipa asukoht Google Mapsis',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galerii',
	'The gallery is currently empty': 'Galerii on praegu tühi',
	'Check back later to see photos from Podilska Knaipa.':
		'Tule hiljem tagasi, et näha Podilska Knaipa fotosid.',
	Navigation: 'Navigeerimine',
	'Quick links': 'Kiirlingid',
	'Open the main sections of the website from one place.':
		'Ava veebisaidi põhiosad ühest kohast.',
	Sales: 'Pakkumised',
	Articles: 'Artiklid',
	Reviews: 'Arvustused',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'See leht on praegu tühi',
	'Check back later for updates.': 'Tule hiljem tagasi, et näha uuendusi.',
	Favorites: 'Lemmikud',
	'No saved dishes': 'Salvestatud roogasid pole',
	'Add items from the menu to favorites, and they will appear here.':
		'Lisa menüüst road lemmikutesse ja need ilmuvad siia.',
	'Remove from favorites': 'Eemalda lemmikutest',
	'Add to favorites': 'Lisa lemmikutesse',
	Unavailable: 'Pole saadaval',
} as const;

export type EtTranslationKey = keyof typeof et;

export const etTranslates: Translate[] = Object.entries(et).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
