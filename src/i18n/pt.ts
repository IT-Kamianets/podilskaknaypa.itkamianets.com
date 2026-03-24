import { Translate } from 'wacom';

export const pt = {
	'Go to homepage': 'Ir para a página inicial',
	'Switch to dark mode': 'Mudar para o modo escuro',
	'Switch to light mode': 'Mudar para o modo claro',
	'Open language menu': 'Abrir menu de idiomas',
	'Switch language to': 'Mudar idioma para',
	Socials: 'Redes sociais',
	'Stay connected with Podilska Knaipa': 'Fique ligado à Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Encontre-nos no Instagram e abra a nossa localização no Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Acompanhe as nossas últimas novidades',
	'See new photos, announcements, and stories from the restaurant.':
		'Veja novas fotos, anúncios e histórias do restaurante.',
	'Open Instagram': 'Abrir Instagram',
	Maps: 'Mapas',
	'Get directions to the restaurant': 'Obter direções para o restaurante',
	'Open the map, check the route, and share the location with friends.':
		'Abra o mapa, confira a rota e partilhe a localização com amigos.',
	'Open Google Maps': 'Abrir Google Maps',
	'Open Podilska Knaipa Instagram page': 'Abrir a página de Instagram da Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Abrir a localização da Podilska Knaipa no Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Galeria',
	'The gallery is currently empty': 'A galeria está vazia no momento',
	'Check back later to see photos from Podilska Knaipa.':
		'Volte mais tarde para ver fotos da Podilska Knaipa.',
	Navigation: 'Navegação',
	'Quick links': 'Links rápidos',
	'Open the main sections of the website from one place.':
		'Abra as principais secções do site a partir de um único lugar.',
	Sales: 'Promoções',
	Articles: 'Artigos',
	Reviews: 'Avaliações',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Esta página está vazia neste momento',
	'Check back later for updates.': 'Volte mais tarde para atualizações.',
	Favorites: 'Favoritos',
	'No saved dishes': 'Nenhum prato guardado',
	'Add items from the menu to favorites, and they will appear here.':
		'Adicione itens do menu aos favoritos e eles aparecerão aqui.',
	'Remove from favorites': 'Remover dos favoritos',
	'Add to favorites': 'Adicionar aos favoritos',
	Unavailable: 'Indisponível',
} as const;

export type PtTranslationKey = keyof typeof pt;

export const ptTranslates: Translate[] = Object.entries(pt).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
