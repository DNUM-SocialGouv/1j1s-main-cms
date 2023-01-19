import { OffreDeStageEntry, OffreDeStageMeilisearch } from "./offre-de-stage.type";

export function categorisation(timeInString): string {
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

function getLocalisation(localisation) {
  return localisation ? {
    ville: localisation?.ville,
    departement: localisation?.departement,
    codePostal: localisation?.codePostal,
    region: localisation?.region,
    pays: localisation?.pays,
    _geo: {
      lat: localisation?.latitude,
      lng: localisation?.longitude,
    }
  } : {
    ville: "",
    departement: "",
    codePostal: "",
    region: "",
    pays: "",
    _geo: {
      lat: 0,
      lng: 0,
    }
  };
}

export function transformerOffreDeStage({ entry }: { entry: OffreDeStageEntry }): OffreDeStageMeilisearch {
  if (!entry.localisation) {
    console.log(entry.identifiantSource);
  }

  return {
    id: entry.id,
    dateDeDebut: entry.dateDeDebut,
    description: entry.description,
    dureeEnJour: entry.dureeEnJour,
    dureeEnJourMax: entry.dureeEnJourMax,
    source: entry.source.toString(),
    teletravailPossible: entry.teletravailPossible,
    titre: entry.titre,
    duree: convertTime(entry.dureeEnJour),
    domaines: entry.domaines?.map((domaine) => domaine.nom.toString()) || [],
    nomEmployeur: entry.employeur.nom,
    logoUrlEmployeur: entry.employeur.logoUrl,
    niveauEtude: entry.preRequis?.niveauEtude,
    dureeCategorisee: categorisation(entry.dureeEnJour),
    localisationFiltree: [entry.localisation?.ville, entry.localisation?.region, entry.localisation?.departement],
    localisation: getLocalisation(entry.localisation),
    slug: entry.slug,
  };
}
