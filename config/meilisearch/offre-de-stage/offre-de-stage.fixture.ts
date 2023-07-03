import { Meilisearch, Strapi } from './offre-de-stage.type';

export function uneOffreDeStageStrapi(override?: Partial<Strapi.OffreDeStage>): Strapi.OffreDeStage {
  return {
    id: 1,
    identifiantSource: "identifiant-source",
    titre: "Le titre",
    slug: "titre-suivi-d-identifiant-source",
    source: Strapi.OffreDeStage.Source.JOBTEASER,
    description: "La description",
    dateDeDebut: "2023-12-01T00:00:00.000Z",
    dateDeDebutMin: "2023-12-01T00:00:00.000Z",
    dateDeDebutMax: "2023-12-15T00:00:00.000Z",
    urlDeCandidature: "http://une-compagnie.com/apply/1234",
    teletravailPossible: true,
    sourceCreatedAt: "2023-10-01T00:00:00.000Z",
    sourceUpdatedAt: "2023-10-05T00:00:00.000Z",
    sourcePublishedAt: "2023-11-03T00:00:00.000Z",
    remunerationBase: 723,
    employeur: {
      description: "Une compagnie incroyable",
      email: "recrute@une-compagnie.com",
      logoUrl: "http://une-compagnie.com/logo",
      nom: "Une compagnie",
      siteUrl: "http://une-compagnie.com"
    },
    domaines: [{ nom: Strapi.OffreDeStage.Domaine.Nom.ACHATS }],
    dureeEnJour: 365,
    dureeEnJourMax: 461,
    localisation: {
      adresse: "280 Avenue Germaine Tillion",
      codePostal: "34070",
      departement: "Hérault",
      pays: "France",
      region: "Occitanie",
      ville: "Montpellier",
      latitude: 3.14159,
      longitude: -3.14159,
    },
    preRequis: {
      niveauEtude: "Bac +5"
    },
    createdAt: "2023-10-06T00:00:00.000Z",
    updatedAt: "2023-10-06T00:00:00.000Z",
    publishedAt: "2023-10-06T00:00:00.000Z",
    createdBy: null,
    updatedBy: null,
    ...override,
  };
}

export function uneOffreDeStageMeilisearch(override?: Partial<Meilisearch.OffreDeStage>): Meilisearch.OffreDeStage {
  return {
    id: 1,
    dateDeDebut: "2023-12-01T00:00:00.000Z",
    dateDeDebutMin: "2023-12-01T00:00:00.000Z",
    dateDeDebutMax: "2023-12-15T00:00:00.000Z",
    description: "La description",
    dureeEnJour: 365,
    dureeEnJourMax: 461,
    source: "jobteaser",
    teletravailPossible: true,
    titre: "Le titre",
    duree: "1 ans",
    domaines: ["achats"],
    nomEmployeur: "Une compagnie",
    logoUrlEmployeur: "http://une-compagnie.com/logo",
    niveauEtude: "Bac +5",
    dureeCategorisee: "> 6 mois",
    localisationFiltree: ["Montpellier", "Occitanie", "Hérault"],
    localisation: {
      ville: "Montpellier",
      departement: "Hérault",
      codePostal: "34070",
      region: "Occitanie",
      pays: "France",
      _geo: {
        lat: 3.14159,
        lng: -3.14159,
      }
    },
    slug: "titre-suivi-d-identifiant-source",
    ...override,
  };
}
