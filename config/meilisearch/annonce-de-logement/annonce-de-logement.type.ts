export interface AnnonceDeLogementMeilisearch {
  id: string;
  slug: string;
  titre: string;
  dateDeDisponibilite: string;
  dateDeMiseAJour: string;
  devise: string; //enum
  prix: number;
  prixHT: number;
  surface: number;
  surfaceMax: number;
  surfaceAAfficher: string;
  type: string; // enum
  url: string;
  imagesUrl: Array<string>;
  sourceUpdatedAt: string;
  localisationAAfficher: string;
}

enum TypeBien {
  "appartement",
  "chambre",
  "colocation",
  "immeuble",
  "maison",
  "studio",
  "t1",
  "t1bis",
  "t2",
  "t3",
  "t4",
  "t4 et plus",
  "non renseigné"
}

enum TypeLocation {
  "colocation",
  "courte",
  "habitation interg\u00E9n\u00E9rationnelle",
  "location",
  "r\u00E9sidence",
  "sous-location",
  "non renseigné",
}

interface ImageUrl {
  value: string;
}

interface ServiceInclus {
  nom: string;
}

interface ServiceOptionnel {
  nom: string;
}

interface BilanEnergetique {
  consommationEnergetique: string;
  emissionDeGaz: string;
}

enum Source {
  "immojeune",
  "studapart"
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

export interface AnnonceDeLogementEntry {
  id: string;
  identifiantSource: string;
  titre: string;
  description: string;
  url: string;
  source: Source;
  typeBien: TypeBien;
  type: TypeLocation;
  surface: number;
  surfaceMax: number;
  nombreDePieces: number;
  etage: number;
  dateDeDisponibilite: string;
  bilanEnergetique: BilanEnergetique;
  meuble: boolean;
  localisation: Localisation;
  sourceCreatedAt: string;
  sourceUpdatedAt: string;
  imagesUrl: Array<ImageUrl>;
  servicesInclus: Array<ServiceInclus>;
  servicesOptionnels: Array<ServiceOptionnel>;
  prixHT: number;
  prix: number;
  devise: string;
  charge: number;
  garantie: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  createdBy: string;
  updatedBy: string;
}
