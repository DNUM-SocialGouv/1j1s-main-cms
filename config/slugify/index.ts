import { configurationAnnonceDeLogementSlugify } from "./annonce-de-logement";
import { configurationEvenementSlugify } from "./evenement";
import { configurationOffreDeStageSlugify } from "./offre-de-stage";

export default {
  enabled: true,
  config: {
    contentTypes: {
      "annonce-de-logement": configurationAnnonceDeLogementSlugify,
      "evenement": configurationEvenementSlugify,
      "offre-de-stage": configurationOffreDeStageSlugify,
    },
    slugifyWithCount: true, // DEVNOTE : the count does not work with compound references
  },
};
