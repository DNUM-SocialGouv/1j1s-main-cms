const LIMITE_MAX_FACETS = 100000;
const LIMITE_MAX_STAGES = 100000;

function categorisation(timeInString): string {
  const time = Number(timeInString);
  if (time === 0) {
    return "Non renseigné";
  }
  if (time < 30 && time !== 0) {
    return "< 1 mois";
  }
  if (time === 30) {
    return "1 mois";
  }
  if (time === 60) {
    return "2 mois";
  }
  if (time === 90) {
    return "3 mois";
  }
  if (time === 120) {
    return "4 mois";
  }
  if (time === 150) {
    return "5 mois";
  }
  if (time === 180) {
    return "6 mois";
  }
  if (time > 180) {
    return "> 6 mois";
  }
  return convertTime(timeInString);
}

function convertTime(timeInString): string {
  const time = Number(timeInString);
  if (time % 365 === 0) {
    return `${time / 365} ans`;
  }
  if (time % 30 === 0) {
    return `${time / 30} mois`;
  }
  if (time % 7 === 0) {
    return `${time / 7} semaines`;
  }
  return `${time} jours`;
}

export const configurationOffreDeStageMeilisearch = {
  entriesQuery: {
    limit: 5000,
  },
  settings: {
    filterableAttributes: [
      "domaines",
      "source",
      "dateDeDebut",
      "teletravailPossible",
      "niveauEtude",
      "dureeCategorisee",
      "dureeEnJour",
      "dureeEnJourMax",
      "localisation.ville",
      "localisation.region",
      "localisation.departement",
      "localisationFiltree"],
    searchableAttributes: [
      "titre",
      "description",
      "domaines",
      "nomEmployeur",
      "localisation.ville",
      "localisation.region",
      "localisation.departement",
      "duree",
    ],
    sortableAttributes: ["dateDeDebut"],
    displayedAttributes: [
      "titre",
      "domaines",
      "dateDeDebut",
      "source",
      "nomEmployeur",
      "dureeCategorisee",
      "localisationFiltree",
      "slug"
    ],
    pagination: {
      maxTotalHits: LIMITE_MAX_STAGES
    },
    // facetings https://docs.meilisearch.com/reference/api/settings.html#get-settings
    faceting: {
      maxValuesPerFacet: LIMITE_MAX_FACETS
    },
    synonyms: {
      ingenieur: ["\"6 mois\""],
      "fin d'etudes": ["\"6 mois\"", "\"3 mois\"", "\"2 mois\""],
      "dut": ["\"3 mois\"", "\"2 mois\""]
    },
  },
  transformEntry({ entry }) {
    return {
      ...entry,
      duree: convertTime(entry.dureeEnJour),
      domaines: entry && entry.domaines && entry.domaines.map(({ nom }) => nom),
      nomEmployeur: entry && entry.employeur && entry.employeur.nom,
      logoUrlEmployeur: entry && entry.employeur && entry.employeur.logoUrl,
      niveauEtude: entry.preRequis && entry.preRequis.niveauEtude,
      dureeCategorisee: categorisation(entry.dureeEnJour),
      localisationFiltree: [entry.localisation?.ville, entry.localisation?.region, entry.localisation?.departement],
      localisation: entry.localisation && {
        ville: entry.localisation.ville,
        departement: entry.localisation.departement,
        codePostal: entry.localisation.codePostal,
        region: entry.localisation.region,
        pays: entry.localisation.pays,
        _geo: {
          lat: entry.localisation.latitude,
          lng: entry.localisation.longitude,
        }
      },
    };
  },
};
