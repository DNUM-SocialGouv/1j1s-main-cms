const LIMITE_MAX_FACETS = 100000;
const LIMITE_MAX_LOGEMENTS = 100000;

function getSurfaceToDisplay(surface, surfaceMax)  {
  if (surfaceMax === undefined) {
    return `${surface}m²`
  } else if (surfaceMax === null) {
    return `${surface}m²`
  } else if (surfaceMax === 0) {
    return `${surface}m²`
  }
  return `de ${surface} à ${surfaceMax} m²`
}

function getDeviseToDisplay(devise)  {
  if (devise === 'euros') {
    return '€'
  }
  return devise
}

function getLocalisationToDisplay(localisation)  {
  const { ville, codePostal } = localisation
  if (ville && codePostal) return codePostal + ' - ' + ville;
  if (codePostal) return codePostal
  return ville;
}

function getSourceUpdatedAtToDisplay(datetime) {
  return datetime.split('T')[0];
}

export const configurationAnnonceDeLogementMeilisearch = {
  entriesQuery: {
    limit: 5000,
  },
  settings: {
    filterableAttributes: [
      "typeBien",
      "type",
      "localisation.ville",
      "localisation.codePostal",
      "prix",
      "surface"
    ],
    searchableAttributes: [
      "localisation.ville",
      "localisation.codePostal",
    ],
    displayedAttributes: [
      "slug",
      "titre",
      "dateDeDisponibilite",
      "dateDeMiseAJour",
      "devise",
      "prix",
      "prixHT",
      "surface",
      "surfaceMax",
      "surfaceAAfficher",
      "type",
      "url",
      "sourceUpdatedAt",
      "localisationAAfficher",
    ],
    pagination: {
      maxTotalHits: LIMITE_MAX_LOGEMENTS
    },
    faceting: {
      maxValuesPerFacet: LIMITE_MAX_FACETS
    },
  },
  transformEntry({ entry }) {
    return {
      ...entry,
      surfaceAAfficher: getSurfaceToDisplay(entry.surface, entry.surfaceMax),
      dateDeMiseAJour: getSourceUpdatedAtToDisplay(entry.sourceUpdatedAt),
      devise: getDeviseToDisplay(entry.devise),
      localisationAAfficher: getLocalisationToDisplay(entry.localisation),
      localisation: entry.localisation && {
        ville: entry.localisation.ville,
        codePostal: entry.localisation.codePostal,
      },
    };
  },
};
