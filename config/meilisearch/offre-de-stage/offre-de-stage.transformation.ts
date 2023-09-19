import { Meilisearch, Strapi } from "./offre-de-stage.type";

export function creerFiltreSurLaDuree(nombreDeJours?: number): string {
  if (!nombreDeJours) return "Non renseigné";

	if (nombreDeJours < 30) return "< 1 mois";
	if (nombreDeJours === 30) return "1 mois";
	if (nombreDeJours === 60) return "2 mois";
	if (nombreDeJours === 90) return "3 mois";
	if (nombreDeJours === 120) return "4 mois";
	if (nombreDeJours === 150) return "5 mois";
	if (nombreDeJours === 180) return "6 mois";
	if (nombreDeJours > 180) return "> 6 mois";

	return convertirDansLaBonneUniteTemporelle(nombreDeJours);
}

export function convertirDansLaBonneUniteTemporelle(nombreDeJours: number): string {
	if (nombreDeJours % 365 === 0) return `${nombreDeJours / 365} ans`;
	if (nombreDeJours % 30 === 0) return `${nombreDeJours / 30} mois`;
	if (nombreDeJours % 7 === 0) return `${nombreDeJours / 7} semaines`;

	return `${nombreDeJours} jours`;
}

export function transformerLaLocalisation(localisation?: Strapi.OffreDeStage.Localisation): Meilisearch.OffreDeStage.Localisation {
	return localisation ? {
		ville: localisation.ville,
		departement: localisation.departement,
		codePostal: localisation.codePostal,
		region: localisation.region,
		pays: localisation.pays,
		_geo: {
			lat: localisation.latitude,
			lng: localisation.longitude,
		},
	} : {
		ville: "",
		departement: "",
		codePostal: "",
		region: "",
		pays: "",
		_geo: {
			lat: 0,
			lng: 0,
		},
	};
}

export function transformerLesDomaines(domaines: Array<Strapi.OffreDeStage.Domaine>): Array<Strapi.OffreDeStage.Domaine.Nom> {
	return domaines.map((domaine) => domaine.nom)
		.filter((nomDomaine): nomDomaine is Strapi.OffreDeStage.Domaine.Nom => !!nomDomaine && nomDomaine.length > 0)
}

export function transformerOffreDeStage({ entry }: { entry: Strapi.OffreDeStage }): Meilisearch.OffreDeStage {
	return {
		id: entry.id,
		dateDeDebutMin: entry.dateDeDebutMin,
		dateDeDebutMax: entry.dateDeDebutMax,
		description: entry.description,
		dureeEnJour: entry.dureeEnJour,
		dureeEnJourMax: entry.dureeEnJourMax,
		source: entry.source.toString(),
		teletravailPossible: entry.teletravailPossible,
		titre: entry.titre,
		duree: entry.dureeEnJour ? convertirDansLaBonneUniteTemporelle(entry.dureeEnJour) : undefined,
		domaines: entry.domaines ? transformerLesDomaines(entry.domaines) : [],
		nomEmployeur: entry.employeur?.nom,
		logoUrlEmployeur: entry.employeur?.logoUrl,
		niveauEtude: entry.preRequis?.niveauEtude,
		dureeCategorisee: creerFiltreSurLaDuree(entry.dureeEnJour),
		localisationFiltree: [entry.localisation?.ville, entry.localisation?.region, entry.localisation?.departement],
		localisation: transformerLaLocalisation(entry.localisation),
		slug: entry.slug,
	};
}
