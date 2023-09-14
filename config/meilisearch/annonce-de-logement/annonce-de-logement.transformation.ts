import { Meilisearch, Strapi } from "./annonce-de-logement.type";

export function transformerAnnonceDeLogement({ entry }: { entry: Strapi.AnnonceDeLogement }): Meilisearch.AnnonceDeLogement {
	return {
		id: entry.id,
		slug: entry.slug,
		titre: entry.titre,
		dateDeDisponibilite: entry.dateDeDisponibilite,
		dateDeMiseAJour: getSourceUpdatedAtToDisplay(entry.sourceUpdatedAt),
		devise: getDeviseToDisplay(entry.devise),
		prix: entry.prix,
		prixHT: entry.prixHT,
		surface: entry.surface,
		surfaceMax: entry.surfaceMax ?? 0,
		surfaceAAfficher: getSurfaceToDisplay(entry.surface, entry.surfaceMax),
		type: entry.type,
		typeBien: entry.typeBien,
		url: entry.url,
		imagesUrl: entry.imagesUrl?.map(imageUrl => imageUrl.value) || [],
		sourceUpdatedAt: entry.sourceUpdatedAt,
		localisationAAfficher: getLocalisationToDisplay(entry.localisation),
		localisation: {
			ville: entry.localisation.ville || "",
			codePostal: entry.localisation.codePostal || "",
		},
	};
}

export function getSurfaceToDisplay(surface: number, surfaceMax?: number): string {
	if (surfaceMax) {
		return `de ${surface} à ${surfaceMax} m²`;
	}
	return `${surface}m²`;
}

export function getDeviseToDisplay(devise: string): string {
	if (devise === "euros") {
		return "€";
	}
	return devise;
}

export function getLocalisationToDisplay(localisation: Strapi.AnnonceDeLogement.Localisation): string {
	const { ville, codePostal } = localisation;
	if (ville && codePostal) {
		return codePostal + " - " + ville;
	}
	if (codePostal) {
		return String(codePostal);
	}
	if (ville) {
		return ville;
	}
	return "";
}

export function getSourceUpdatedAtToDisplay(datetime: string): string {
	return datetime.split("T")[0];
}
