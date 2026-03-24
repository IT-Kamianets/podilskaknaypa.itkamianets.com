import { Translate } from 'wacom';

export const el = {
	'Go to homepage': 'Μετάβαση στην αρχική σελίδα',
	'Switch to dark mode': 'Μετάβαση σε σκοτεινή λειτουργία',
	'Switch to light mode': 'Μετάβαση σε φωτεινή λειτουργία',
	'Open language menu': 'Άνοιγμα μενού γλωσσών',
	'Switch language to': 'Αλλαγή γλώσσας σε',
	Socials: 'Κοινωνικά δίκτυα',
	'Stay connected with Podilska Knaipa': 'Μείνετε συνδεδεμένοι με το Podilska Knaipa',
	'Find us on Instagram and open our location in Google Maps.':
		'Βρείτε μας στο Instagram και ανοίξτε την τοποθεσία μας στο Google Maps.',
	Instagram: 'Instagram',
	'Follow our latest updates': 'Ακολουθήστε τις τελευταίες μας ενημερώσεις',
	'See new photos, announcements, and stories from the restaurant.':
		'Δείτε νέες φωτογραφίες, ανακοινώσεις και ιστορίες από το εστιατόριο.',
	'Open Instagram': 'Άνοιγμα Instagram',
	Maps: 'Χάρτες',
	'Get directions to the restaurant': 'Οδηγίες προς το εστιατόριο',
	'Open the map, check the route, and share the location with friends.':
		'Ανοίξτε τον χάρτη, ελέγξτε τη διαδρομή και μοιραστείτε την τοποθεσία με φίλους.',
	'Open Google Maps': 'Άνοιγμα Google Maps',
	'Open Podilska Knaipa Instagram page': 'Άνοιγμα της σελίδας Instagram του Podilska Knaipa',
	'Open Podilska Knaipa location in Google Maps': 'Άνοιγμα της τοποθεσίας του Podilska Knaipa στο Google Maps',
	Quests: 'Quests',
	'There are currently no quests': 'There are currently no quests',
	'Check back later for new activities and special offers.':
		'Check back later for new activities and special offers.',
	Gallery: 'Γκαλερί',
	'The gallery is currently empty': 'Η γκαλερί είναι προς το παρόν άδεια',
	'Check back later to see photos from Podilska Knaipa.':
		'Επιστρέψτε αργότερα για να δείτε φωτογραφίες από το Podilska Knaipa.',
	Navigation: 'Πλοήγηση',
	'Quick links': 'Γρήγοροι σύνδεσμοι',
	'Open the main sections of the website from one place.':
		'Ανοίξτε τις βασικές ενότητες του ιστότοπου από ένα σημείο.',
	Sales: 'Προσφορές',
	Articles: 'Άρθρα',
	Reviews: 'Κριτικές',
	Events: 'Events',
	Jobs: 'Jobs',
	'This page is currently empty': 'Αυτή η σελίδα είναι προς το παρόν κενή',
	'Check back later for updates.': 'Επιστρέψτε αργότερα για ενημερώσεις.',
	Favorites: 'Αγαπημένα',
	'No saved dishes': 'Δεν υπάρχουν αποθηκευμένα πιάτα',
	'Add items from the menu to favorites, and they will appear here.':
		'Προσθέστε πιάτα από το μενού στα αγαπημένα και θα εμφανίζονται εδώ.',
	'Remove from favorites': 'Αφαίρεση από τα αγαπημένα',
	'Add to favorites': 'Προσθήκη στα αγαπημένα',
	Unavailable: 'Μη διαθέσιμο',
} as const;

export type ElTranslationKey = keyof typeof el;

export const elTranslates: Translate[] = Object.entries(el).map(([sourceText, text]) => ({
	sourceText,
	text,
}));
