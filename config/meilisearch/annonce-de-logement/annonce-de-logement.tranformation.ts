import { AnnonceDeLogementEntry, AnnonceDeLogementMeilisearch } from "./annonce-de-logement.type";

export function transformerAnnonceDeLogement({ entry }: { entry: AnnonceDeLogementEntry }): AnnonceDeLogementMeilisearch {
  const { surface, surfaceMax } = entry;
  return {
    id: entry.id,
    slug: entry.slug,
    titre: entry.titre,
    dateDeDisponibilite: entry.dateDeDisponibilite,
    dateDeMiseAJour: getSourceUpdatedAtToDisplay(entry.sourceUpdatedAt),
    devise: entry.devise,
    prix: entry.prix,
    prixHT: entry.prixHT,
    surface: surface,
    surfaceMax: surfaceMax,
    surfaceAAfficher: getSurfaceToDisplay(surface, surfaceMax),
    type: entry.type.toString(),
    url: entry.url,
    imagesUrl: entry.imagesUrl?.map(imageUrl => imageUrl.value) || [],
    sourceUpdatedAt: entry.sourceUpdatedAt,
    localisationAAfficher: getLocalisationToDisplay(entry.localisation),
  };
}

function getSurfaceToDisplay(surface, surfaceMax) {
  if (surfaceMax === undefined) {
    return `${surface}m²`;
  } else if (surfaceMax === null) {
    return `${surface}m²`;
  } else if (surfaceMax === 0) {
    return `${surface}m²`;
  }
  return `de ${surface} à ${surfaceMax} m²`;
}

function getDeviseToDisplay(devise) {
  if (devise === "euros") {
    return "€";
  }
  return devise;
}

function getLocalisationToDisplay(localisation) {
  const { ville, codePostal } = localisation;
  if (ville && codePostal) return codePostal + " - " + ville;
  if (codePostal) return codePostal;
  return ville;
}

function getSourceUpdatedAtToDisplay(datetime) {
  return datetime.split("T")[0];
}
