interface LocalisationStageMeilisearch {
  ville: string,
  departement: string,
  codePostal: string,
  region: string,
  pays: string,
  _geo: {
    lat: number,
    lng: number,
  }
}

export interface OffreDeStageMeilisearch {
  id: number;
  domaines: Array<string>;
  source: string;
  dateDeDebut: string;
  teletravailPossible: boolean;
  niveauEtude: string;
  dureeCategorisee: string;
  dureeEnJour: number;
  dureeEnJourMax: number;
  localisation: LocalisationStageMeilisearch
  localisationFiltree: Array<string>;
  titre: string;
  nomEmployeur: string;
  description: string;
  duree: string;
  logoUrlEmployeur: string;
  slug: string;
}

enum Source {
  "hellowork",
  "interne",
  "jobijoba",
  "jobteaser",
  "stagefr-compresse",
  "stagefr-decompresse",
  "welcome to the jungle",
}

interface Employeur {
  nom: string;
  description?: string;
  logoUrl?: string;
  siteUrl?: string;
  email?: string;
}

enum DomaineValue {
  "achats",
  "activités sociales et culturelles",
  "agriculture",
  "architecture / urbanisme / immobilier",
  "audit",
  "chimie / biologie / agronomie",
  "commerce",
  "communication",
  "community management",
  "comptabilité / contrôle de gestion",
  "conception / g\u00E9nie civil / g\u00E9nie industriel",
  "conseil",
  "design / UX / UI",
  "d\u00E9veloppement informatique",
  "direction d'entreprise",
  "\u00E9nergie / mat\u00E9riaux / m\u00E9canique / \u00E9lectronique",
  "enseignement",
  "environnement",
  "\u00E9v\u00E8nementiel",
  "\u00E9tudes / statistiques / data",
  "fiscalite / finance / assurance",
  "gestion de projet / produit",
  "graphisme / illustration",
  "infra / réseaux / télécoms",
  "h\u00F4tellerie - restauration",
  "journalisme / rp / médias",
  "juridique",
  "logistique",
  "luxe / mode / textile",
  "marketing",
  "production / fabrication / exploitation",
  "qualité / maintenance",
  "rh / formation",
  "santé / services à la personne",
  "secteur public",
  "relation client / support",
  "travaux / chantiers",
  "ventes",
  "non renseigné",
}

interface Domaine {
  nom: DomaineValue;
}

interface Competence {
  niveauEtude: string;
  profil?: string;
}

interface Localisation {
  latitude: number;
  longitude: number;
  ville: string;
  adresse: string;
  departement: string;
  codePostal: string;
  region: string;
  pays: string;
}

export interface OffreDeStageEntry {
  id: number;
  identifiantSource: string;
  titre: string;
  slug: string;
  source: Source;
  description: string;
  dateDeDebut: string;
  urlDeCandidature: string;
  teletravailPossible: boolean;
  sourceCreatedAt: string;
  sourceUpdatedAt: string;
  sourcePublishedAt: string;
  remunerationBase: number;
  employeur: Employeur;
  domaines: Array<Domaine>;
  preRequis?: Competence;
  dureeEnJour: number;
  dureeEnJourMax: number;
  localisation: Localisation;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  createdBy: string;
  updatedBy: string;
}
