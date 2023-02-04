export namespace Meilisearch {
  export interface FicheMetier {
    id: string;
    nom_metier: string;
    competences: string;
    condition_travail: string;
    nature_travail: string;
    vie_professionnelle: string;
    acces_metier: string;
    accroche_metier: string;
    libelle_feminin: string;
    libelle_masculin: string;
    centres_interet: Array<string>;
    formations_min_requise: Array<string>;
    niveau_acces_min: Array<string>;
    secteurs_activite: Array<string>;
    statuts: Array<string>;
  }
}

export namespace Strapi {
  export interface FicheMetier {
    id: string;
    nom_metier: string;
    competences: string;
    condition_travail: string;
    nature_travail: string;
    vie_professionnelle: string;
    acces_metier: string;
    accroche_metier: string;
    libelle_feminin: string;
    libelle_masculin: string;
    centres_interet: Array<FicheMetier.CentreDInteret>;
    formations_min_requise: Array<FicheMetier.FormationMinRequise>;
    niveau_acces_min: Array<FicheMetier.NiveauAccesMin>;
    secteurs_activite: Array<FicheMetier.SecteursActivite>;
    statuts: Array<FicheMetier.Statuts>;
    synonymes: string;
  }

  namespace FicheMetier {
    export interface CentreDInteret {
      libelle: string;
    }

    export interface FormationMinRequise {
      libelle: string;
    }

    export interface NiveauAccesMin {
      libelle: string;
    }

    export interface SecteursActivite {
      libelle: string;
    }

    export interface Statuts {
      libelle: string;
    }
  }
}
