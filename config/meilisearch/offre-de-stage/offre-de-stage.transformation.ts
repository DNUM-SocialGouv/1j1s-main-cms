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

export function transformerOffreDeStage({ entry }: { entry: OffreDeStageEntry }): OffreDeStageMeilisearch {
  return {
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
    localisation: {
      ville: entry.localisation?.ville,
      departement: entry.localisation?.departement,
      codePostal: entry.localisation?.codePostal,
      region: entry.localisation?.region,
      pays: entry.localisation?.pays,
      _geo: {
        lat: entry.localisation?.latitude,
        lng: entry.localisation?.longitude,
      }
    }
  };
}
