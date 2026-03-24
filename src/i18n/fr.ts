import { Translate } from 'wacom';

export const fr = {
	'Go to homepage': "Aller à la page d'accueil",
	'Switch to dark mode': 'Passer en mode sombre',
	'Switch to light mode': 'Passer en mode clair',
	'Open language menu': 'Ouvrir le menu des langues',
	'Switch language to': 'Passer la langue à',
	Socials: 'Réseaux sociaux',
	'Stay connected with Podilska Knaipa': 'Restez connecté avec Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Rejoignez-nous sur Instagram et ouvrez notre emplacement dans Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Suivez nos dernières actualités',
	'See new photos, announcements, and stories from the restaurant.':
		'Découvrez de nouvelles photos, annonces et histoires du restaurant.',
	'Open Instagram': 'Ouvrir Instagram',
	Maps: 'Cartes',
	'Get directions to the restaurant': 'Itinéraire vers le restaurant',
	'Open the map, check the route, and share the location with friends.':
		'Ouvrez la carte, vérifiez l’itinéraire et partagez l’emplacement avec vos amis.',
	'Open Google Maps': 'Ouvrir Google Maps',
	'Open Podilska Knaipa Instagram page': 'Ouvrir la page Instagram de Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Ouvrir l’emplacement de Podilska Knaipa dans Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galerie',
	'The gallery is currently empty': 'La galerie est actuellement vide',
	'Check back later to see photos from Podilska Knaipa.':
		'Revenez plus tard pour voir des photos de Podilska Knaipa.',
	Navigation: 'Navigation',
	'Quick links': 'Liens rapides',
	'Open the main sections of the website from one place.':
		'Ouvrez les principales sections du site depuis un seul endroit.',
	Sales: 'Promotions',
	Articles: 'Articles',
	Reviews: 'Avis',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Cette page est actuellement vide',
	'Check back later for updates.': 'Revenez plus tard pour les mises à jour.',
	Favorites: 'Favoris',
	'No saved dishes': 'Aucun plat enregistré',
	'Add items from the menu to favorites, and they will appear here.':
		'Ajoutez des plats du menu aux favoris et ils apparaîtront ici.',
	'Remove from favorites': 'Retirer des favoris',
	'Add to favorites': 'Ajouter aux favoris',
	Unavailable: 'Indisponible',
} as const;

export type FrTranslationKey = keyof typeof fr;

export const frTranslates: Translate[] = Object.entries(fr).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
