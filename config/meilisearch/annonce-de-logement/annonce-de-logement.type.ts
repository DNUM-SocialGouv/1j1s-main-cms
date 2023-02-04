export namespace Meilisearch {
  export interface AnnonceDeLogement {
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
    typeBien: string; // enum
    url: string;
    imagesUrl: Array<string>;
    sourceUpdatedAt: string;
    localisationAAfficher: string;
    localisation: Localisation,
  }

  interface Localisation {
    ville: string,
    codePostal: string,
  }
}

export namespace Strapi {
  export interface AnnonceDeLogement {
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

  export enum TypeBien {
    APPARTEMENT = "appartement",
    CHAMBRE = "chambre",
    COLOCATION = "colocation",
    IMMEUBLE = "immeuble",
    MAISON = "maison",
    STUDIO = "studio",
    T1 = "t1",
    T1BIS = "t1bis",
    T2 = "t2",
    T3 = "t3",
    T4 = "t4",
    T4_ET_PLUS = "t4 et plus",
    NON_RENSEIGNÉ = "non renseigné",
  }

  export enum TypeLocation {
    COLOCATION = "colocation",
    COURTE = "courte",
    HABITATION_INTERGENERATIONNELLE = "habitation intergénérationnelle",
    LOCATION = "location",
    RESIDENCE = "résidence",
    SOUS_LOCATION = "sous-location",
    NON_RENSEIGNE = "non renseigné"
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

  export enum Source {
    "immojeune",
    "studapart"
  }

  interface Localisation {
    latitude?: number;
    longitude?: number;
    ville?: string;
    adresse?: string;
    departement?: string;
    codePostal?: string;
    region?: string;
    pays?: string;
  }
}
