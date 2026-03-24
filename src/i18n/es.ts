import { Translate } from 'wacom';

export const es = {
	'Go to homepage': 'Ir a la página de inicio',
	'Switch to dark mode': 'Cambiar a modo oscuro',
	'Switch to light mode': 'Cambiar a modo claro',
	'Open language menu': 'Abrir menú de idiomas',
	'Switch language to': 'Cambiar idioma a',
	Socials: 'Redes sociales',
	'Stay connected with Podilska Knaipa': 'Mantente conectado con Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Encuéntranos en Instagram y abre nuestra ubicación en Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Sigue nuestras últimas novedades',
	'See new photos, announcements, and stories from the restaurant.':
		'Mira nuevas fotos, anuncios e historias del restaurante.',
	'Open Instagram': 'Abrir Instagram',
	Maps: 'Mapas',
	'Get directions to the restaurant': 'Cómo llegar al restaurante',
	'Open the map, check the route, and share the location with friends.':
		'Abre el mapa, revisa la ruta y comparte la ubicación con amigos.',
	'Open Google Maps': 'Abrir Google Maps',
	'Open Podilska Knaipa Instagram page': 'Abrir la página de Instagram de Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Abrir la ubicación de Podilska Knaipa en Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galería',
	'The gallery is currently empty': 'La galería está vacía por ahora',
	'Check back later to see photos from Podilska Knaipa.':
		'Vuelve más tarde para ver fotos de Podilska Knaipa.',
	Navigation: 'Navegación',
	'Quick links': 'Enlaces rápidos',
	'Open the main sections of the website from one place.':
		'Abre las secciones principales del sitio web desde un solo lugar.',
	Sales: 'Ofertas',
	Articles: 'Artículos',
	Reviews: 'Reviews',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Esta página está vacía por ahora',
	'Check back later for updates.': 'Vuelve más tarde para ver novedades.',
	Favorites: 'Favoritos',
	'No saved dishes': 'No hay platos guardados',
	'Add items from the menu to favorites, and they will appear here.':
		'Añade platos del menú a favoritos y aparecerán aquí.',
	'Remove from favorites': 'Quitar de favoritos',
	'Add to favorites': 'Añadir a favoritos',
	Unavailable: 'No disponible',
} as const;

export type EsTranslationKey = keyof typeof es;

export const esTranslates: Translate[] = Object.entries(es).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
