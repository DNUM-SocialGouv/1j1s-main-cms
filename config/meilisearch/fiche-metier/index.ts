import { transformerFicheMetier } from "./fiche-metier.transformation";

export default {
  settings: {
    filterableAttributes: ["centres_interet", "formations_min_requise", "niveau_acces_min", "secteurs_activite", "status"],
  },
  transformEntry: transformerFicheMetier
};
