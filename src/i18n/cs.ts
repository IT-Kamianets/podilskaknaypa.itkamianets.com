import { Translate } from 'wacom';

export const cs = {
	'Go to homepage': 'Přejít na domovskou stránku',
	'Switch to dark mode': 'Přepnout do tmavého režimu',
	'Switch to light mode': 'Přepnout do světlého režimu',
	'Open language menu': 'Otevřít nabídku jazyků',
	'Switch language to': 'Přepnout jazyk na',
	Socials: 'Sociální sítě',
	'Stay connected with Podilska Knaipa': 'Zůstaňte ve spojení s Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Najděte nás na Instagramu a otevřete naši polohu v Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Sledujte naše nejnovější novinky',
	'See new photos, announcements, and stories from the restaurant.':
		'Podívejte se na nové fotky, oznámení a příběhy z restaurace.',
	'Open Instagram': 'Otevřít Instagram',
	Maps: 'Mapy',
	'Get directions to the restaurant': 'Zobrazit trasu do restaurace',
	'Open the map, check the route, and share the location with friends.':
		'Otevřete mapu, zkontrolujte trasu a sdílejte polohu s přáteli.',
	'Open Google Maps': 'Otevřít Google Maps',
	'Open Podilska Knaipa Instagram page': 'Otevřít instagramovou stránku Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Otevřít polohu Podilska Knaipa v Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galerie',
	'The gallery is currently empty': 'Galerie je momentálně prázdná',
	'Check back later to see photos from Podilska Knaipa.':
		'Vraťte se později a podívejte se na fotografie z Podilska Knaipa.',
	Navigation: 'Navigace',
	'Quick links': 'Rychlé odkazy',
	'Open the main sections of the website from one place.':
		'Otevřete hlavní sekce webu z jednoho místa.',
	Sales: 'Akce',
	Articles: 'Články',
	Reviews: 'Recenze',
	Events: 'Události',
	Jobs: 'Práce',
	'This page is currently empty': 'Tato stránka je momentálně prázdná',
	'Check back later for updates.': 'Vraťte se později pro novinky.',
	Favorites: 'Oblíbené',
	'No saved dishes': 'Žádná uložená jídla',
	'Add items from the menu to favorites, and they will appear here.':
		'Přidejte položky z menu do oblíbených a zobrazí se zde.',
	'Remove from favorites': 'Odebrat z oblíbených',
	'Add to favorites': 'Přidat do oblíbených',
	Unavailable: 'Není',
} as const;

export type CsTranslationKey = keyof typeof cs;

export const csTranslates: Translate[] = Object.entries(cs).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
