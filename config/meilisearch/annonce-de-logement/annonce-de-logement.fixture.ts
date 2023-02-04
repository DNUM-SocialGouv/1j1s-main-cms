import { Meilisearch, Strapi } from './annonce-de-logement.type';

export function uneAnnonceDeLogementStrapi(override?: Partial<Strapi.AnnonceDeLogement>): Strapi.AnnonceDeLogement {
  return {
    id: "1",
    identifiantSource: "identifiant-source",
    titre: "le titre",
    description: "la description",
    url: "http://some.url",
    source: Strapi.Source.immojeune,
    typeBien: Strapi.TypeBien.T1BIS,
    type: Strapi.TypeLocation.COURTE,
    surface: 25,
    surfaceMax: 30,
    nombreDePieces: 2,
    etage: 6,
    dateDeDisponibilite: "2022-12-12",
    bilanEnergetique: {
      consommationEnergetique: "A",
      emissionDeGaz: "B"
    },
    meuble: true,
    localisation: {
      ville: "Paris",
      codePostal: "75001",
    },
    sourceCreatedAt: "2022-09-01",
    sourceUpdatedAt: "2022-12-12T01:30:00.000Z",
    imagesUrl: [{ value: "http://some.url/1" }, { value: "http://some.url/2" }],
    servicesInclus: [],
    servicesOptionnels: [],
    prixHT: 700,
    prix: 750,
    devise: "euros",
    charge: 50,
    garantie: 600,
    slug: "le-slug",
    createdAt: "string",
    updatedAt: "string",
    publishedAt: "string",
    createdBy: "string",
    updatedBy: "string",
    ...override,
  };
}

export function uneAnnonceDeLogementMeilisearch(override?: Partial<Meilisearch.AnnonceDeLogement>): Meilisearch.AnnonceDeLogement {
  return {
    id: "1",
    slug: "le-slug",
    titre: "le titre",
    dateDeDisponibilite: "2022-12-12",
    dateDeMiseAJour: "2022-12-12",
    devise: "€",
    prix: 750,
    prixHT: 700,
    surface: 25,
    surfaceMax: 30,
    surfaceAAfficher: `de 25 à 30 m²`,
    type: "courte",
    typeBien: "t1bis",
    url: "http://some.url",
    imagesUrl: ["http://some.url/1", "http://some.url/2"],
    sourceUpdatedAt: "2022-12-12T01:30:00.000Z",
    localisationAAfficher: "75001 - Paris",
    localisation: {
      ville: "Paris",
      codePostal: "75001",
    },
    ...override,
  };
}
