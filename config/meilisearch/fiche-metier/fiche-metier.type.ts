export interface FicheMetierMeilisearch {
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


interface CentreDInteret {
  libelle: string;
}

interface FormationMinRequise {
  libelle: string;
}

interface NiveauAccesMin {
  libelle: string;
}

interface SecteursActivite {
  libelle: string;
}

interface Statuts {
  libelle: string;
}

export interface FicheMetierEntry {
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
  centres_interet: Array<CentreDInteret>;
  formations_min_requise: Array<FormationMinRequise>;
  niveau_acces_min: Array<NiveauAccesMin>;
  secteurs_activite: Array<SecteursActivite>;
  statuts: Array<Statuts>;
  synonymes: string;
}
