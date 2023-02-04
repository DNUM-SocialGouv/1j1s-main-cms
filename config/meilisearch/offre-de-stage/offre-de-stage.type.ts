export namespace Meilisearch {
  export interface OffreDeStage {
    id: number;
    domaines: Array<string>;
    source: string;
    dateDeDebut: string;
    teletravailPossible: boolean;
    niveauEtude: string;
    dureeCategorisee: string;
    dureeEnJour: number;
    dureeEnJourMax: number;
    localisation: OffreDeStage.Localisation;
    localisationFiltree: Array<string>;
    titre: string;
    nomEmployeur: string;
    description: string;
    duree: string;
    logoUrlEmployeur: string;
    slug: string;
  }

  export namespace OffreDeStage {
    export interface Localisation {
      ville: string;
      departement: string;
      codePostal: string;
      region: string;
      pays: string;
      _geo: {
        lat: number;
        lng: number;
      }
    }
  }
}

export namespace Strapi {
  export interface OffreDeStage {
    id: number;
    identifiantSource: string;
    titre: string;
    slug: string;
    source: OffreDeStage.Source;
    description: string;
    dateDeDebut: string;
    urlDeCandidature: string;
    teletravailPossible: boolean;
    sourceCreatedAt: string;
    sourceUpdatedAt: string;
    sourcePublishedAt: string;
    remunerationBase: number;
    employeur: OffreDeStage.Employeur;
    domaines: Array<OffreDeStage.Domaine>;
    preRequis?: OffreDeStage.Competence;
    dureeEnJour: number;
    dureeEnJourMax: number;
    localisation: OffreDeStage.Localisation;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    createdBy: string;
    updatedBy: string;
  }

  export namespace OffreDeStage {
    export enum Source {
      HELLOWORK = "hellowork",
      INTERNE = "interne",
      JOBIJOBA = "jobijoba",
      JOBTEASER = "jobteaser",
      STAGEFR_COMPRESSE = "stagefr-compresse",
      STAGEFR_DECOMPRESSE = "stagefr-decompresse",
      WELCOME_TO_THE_JUNGLE = "welcome to the jungle",
    }

    export interface Employeur {
      nom: string;
      description?: string;
      logoUrl?: string;
      siteUrl?: string;
      email?: string;
    }

    export enum DomaineValue {
      "achats" = "achats",
      "activités sociales et culturelles" = "activités sociales et culturelles",
      "agriculture" = "agriculture",
      "architecture / urbanisme / immobilier" = "architecture / urbanisme / immobilier",
      "audit" = "audit",
      "chimie / biologie / agronomie" = "chimie / biologie / agronomie",
      "commerce" = "commerce",
      "communication" = "communication",
      "community management" = "community management",
      "comptabilité / contrôle de gestion" = "comptabilité / contrôle de gestion",
      "conception / génie civil / génie industriel" = "conception / génie civil / génie industriel",
      "conseil" = "conseil",
      "design / UX / UI" = "design / UX / UI",
      "développement informatique" = "développement informatique",
      "direction d'entreprise" = "direction d'entreprise",
      "énergie / matériaux / mécanique / électronique" = "énergie / matériaux / mécanique / électronique",
      "enseignement" = "enseignement",
      "environnement" = "environnement",
      "évènementiel" = "évènementiel",
      "études / statistiques / data" = "études / statistiques / data",
      "fiscalite / finance / assurance" = "fiscalite / finance / assurance",
      "gestion de projet / produit" = "gestion de projet / produit",
      "graphisme / illustration" = "graphisme / illustration",
      "infra / réseaux / télécoms" = "infra / réseaux / télécoms",
      "hôtellerie - restauration" = "hôtellerie - restauration",
      "journalisme / rp / médias" = "journalisme / rp / médias",
      "juridique" = "juridique",
      "logistique" = "logistique",
      "luxe / mode / textile" = "luxe / mode / textile",
      "marketing" = "marketing",
      "production / fabrication / exploitation" = "production / fabrication / exploitation",
      "qualité / maintenance" = "qualité / maintenance",
      "rh / formation" = "rh / formation",
      "santé / services à la personne" = "santé / services à la personne",
      "secteur public" = "secteur public",
      "relation client / support" = "relation client / support",
      "travaux / chantiers" = "travaux / chantiers",
      "ventes" = "ventes",
      "non renseigné" = "non renseigné",
    }

    export interface Domaine {
      nom: DomaineValue;
    }

    export interface Competence {
      niveauEtude: string;
      profil?: string;
    }

    export interface Localisation {
      latitude: number;
      longitude: number;
      ville: string;
      adresse: string;
      departement: string;
      codePostal: string;
      region: string;
      pays: string;
    }
  }
}
