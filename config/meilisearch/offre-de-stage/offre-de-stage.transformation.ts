import { Meilisearch, Strapi } from "./offre-de-stage.type";
import * as domain from 'domain';

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

export function transformerLesDomaines(domaines: Array<Strapi.OffreDeStage.Domaine>): Array<string> {
	return domaines.map((domaine) => domaine.nom)
		.filter((nomDomaine): nomDomaine is Strapi.OffreDeStage.Domaine.Nom => !!nomDomaine && nomDomaine.length > 0)
}

export function creerLocalisationFiltree(localisation: Strapi.OffreDeStage.Localisation) {
	return [localisation.ville, localisation.region, localisation.departement].filter((localisation): localisation is string => !!localisation);
}

export function transformerOffreDeStage({ entry: stage }: { entry: Strapi.OffreDeStage }): Meilisearch.OffreDeStage {
	return {
		id: stage.id,
		dateDeDebutMin: stage.dateDeDebutMin,
		dateDeDebutMax: stage.dateDeDebutMax,
		description: stage.description,
		dureeEnJour: stage.dureeEnJour,
		dureeEnJourMax: stage.dureeEnJourMax,
		source: stage.source?.toString(),
		teletravailPossible: stage.teletravailPossible,
		titre: stage.titre,
		duree: stage.dureeEnJour ? convertirDansLaBonneUniteTemporelle(stage.dureeEnJour) : undefined,
		domaines: stage.domaines ? transformerLesDomaines(stage.domaines) : [],
		nomEmployeur: stage.employeur?.nom,
		logoUrlEmployeur: stage.employeur?.logoUrl,
		niveauEtude: stage.preRequis?.niveauEtude,
		dureeCategorisee: creerFiltreSurLaDuree(stage.dureeEnJour),
		localisationFiltree: stage.localisation ? creerLocalisationFiltree(stage.localisation) : [],
		localisation: transformerLaLocalisation(stage.localisation),
		slug: stage.slug,
	};
}
