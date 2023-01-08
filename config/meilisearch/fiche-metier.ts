export const configurationFicheMetierMeilisearch = {
  settings: {
    filterableAttributes: ["centres_interet", "formations_min_requise", "niveau_acces_min", "secteurs_activite", "status"],
  },
  transformEntry({ entry }) {
    return {
      id: entry.id,
      nom_metier: entry.nom_metier,
      competences: entry.competences,
      condition_travail: entry.condition_travail,
      nature_travail: entry.nature_travail,
      vie_professionnelle: entry.vie_professionnelle,
      acces_metier: entry.acces_metier,
      accroche_metier: entry.accroche_metier,
      libelle_feminin: entry.libelle_feminin,
      libelle_masculin: entry.libelle_masculin,
      centres_interet: entry.centres_interet && entry.centres_interet.map(({ libelle }) => libelle),
      formations_min_requise: entry.formations_min_requise && entry.formations_min_requise.map(({ libelle }) => libelle),
      niveau_acces_min: entry.niveau_acces_min && entry.niveau_acces_min.map(({ libelle }) => libelle),
      secteurs_activite: entry.secteurs_activite && entry.secteurs_activite.map(({ libelle }) => libelle),
      statuts: entry.statuts && entry.statuts.map(({ libelle }) => libelle)
    };
  }
};
