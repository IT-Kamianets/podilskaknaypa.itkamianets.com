import { Translate } from 'wacom';

export const lt = {
	'Go to homepage': 'Eiti į pagrindinį puslapį',
	'Switch to dark mode': 'Perjungti į tamsųjį režimą',
	'Switch to light mode': 'Perjungti į šviesųjį režimą',
	'Open language menu': 'Atidaryti kalbų meniu',
	'Switch language to': 'Perjungti kalbą į',
	Socials: 'Socialiniai tinklai',
	'Stay connected with Podilska Knaipa': 'Likite susiję su Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Raskite mus Instagrame ir atidarykite mūsų vietą Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Sekite naujausias mūsų žinias',
	'See new photos, announcements, and stories from the restaurant.':
		'Peržiūrėkite naujas nuotraukas, pranešimus ir istorijas iš restorano.',
	'Open Instagram': 'Atidaryti Instagram',
	Maps: 'Žemėlapiai',
	'Get directions to the restaurant': 'Gauti nuorodas į restoraną',
	'Open the map, check the route, and share the location with friends.':
		'Atidarykite žemėlapį, patikrinkite maršrutą ir pasidalykite vieta su draugais.',
	'Open Google Maps': 'Atidaryti Google Maps',
	'Open Podilska Knaipa Instagram page': 'Atidaryti Podilska Knaipa Instagram puslapį',
	'Open Podilska Knaipa location in Google Maps': 'Atidaryti Podilska Knaipa vietą Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galerija',
	'The gallery is currently empty': 'Galerija šiuo metu tuščia',
	'Check back later to see photos from Podilska Knaipa.':
		'Užsukite vėliau ir pamatysite Podilska Knaipa nuotraukas.',
	Navigation: 'Navigacija',
	'Quick links': 'Greitos nuorodos',
	'Open the main sections of the website from one place.':
		'Atidarykite pagrindines svetainės skiltis iš vienos vietos.',
	Sales: 'Akcijos',
	Articles: 'Straipsniai',
	Reviews: 'Reviews',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Šis puslapis šiuo metu tuščias',
	'Check back later for updates.': 'Užsukite vėliau ir pamatysite naujienas.',
	Favorites: 'Mėgstamiausi',
	'No saved dishes': 'Nėra išsaugotų patiekalų',
	'Add items from the menu to favorites, and they will appear here.':
		'Pridėkite patiekalus iš meniu į mėgstamiausius ir jie bus rodomi čia.',
	'Remove from favorites': 'Pašalinti iš mėgstamiausių',
	'Add to favorites': 'Pridėti į mėgstamiausius',
	Unavailable: 'Nėra',
} as const;

export type LtTranslationKey = keyof typeof lt;

export const ltTranslates: Translate[] = Object.entries(lt).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
