import { Translate } from 'wacom';

export const it = {
	'Go to homepage': 'Vai alla home page',
	'Switch to dark mode': 'Passa alla modalità scura',
	'Switch to light mode': 'Passa alla modalità chiara',
	'Open language menu': 'Apri il menu delle lingue',
	'Switch language to': 'Cambia lingua in',
	Socials: 'Social',
	'Stay connected with Podilska Knaipa': 'Resta in contatto con Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Trova il nostro profilo su Instagram e apri la nostra posizione su Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Segui i nostri ultimi aggiornamenti',
	'See new photos, announcements, and stories from the restaurant.':
		'Guarda nuove foto, annunci e storie del ristorante.',
	'Open Instagram': 'Apri Instagram',
	Maps: 'Mappe',
	'Get directions to the restaurant': 'Ottieni indicazioni per il ristorante',
	'Open the map, check the route, and share the location with friends.':
		'Apri la mappa, controlla il percorso e condividi la posizione con gli amici.',
	'Open Google Maps': 'Apri Google Maps',
	'Open Podilska Knaipa Instagram page': 'Apri la pagina Instagram di Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Apri la posizione di Podilska Knaipa su Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galleria',
	'The gallery is currently empty': 'La galleria è attualmente vuota',
	'Check back later to see photos from Podilska Knaipa.':
		'Torna più tardi per vedere le foto di Podilska Knaipa.',
	Navigation: 'Navigazione',
	'Quick links': 'Link rapidi',
	'Open the main sections of the website from one place.':
		'Apri le sezioni principali del sito da un unico punto.',
	Sales: 'Offerte',
	Articles: 'Articoli',
	Reviews: 'Recensioni',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Questa pagina è attualmente vuota',
	'Check back later for updates.': 'Torna più tardi per gli aggiornamenti.',
	Favorites: 'Preferiti',
	'No saved dishes': 'Nessun piatto salvato',
	'Add items from the menu to favorites, and they will appear here.':
		'Aggiungi piatti del menu ai preferiti e appariranno qui.',
	'Remove from favorites': 'Rimuovi dai preferiti',
	'Add to favorites': 'Aggiungi ai preferiti',
	Unavailable: 'Non disponibile',
} as const;

export type ItTranslationKey = keyof typeof it;

export const itTranslates: Translate[] = Object.entries(it).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
