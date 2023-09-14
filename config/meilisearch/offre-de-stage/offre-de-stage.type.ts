export namespace Meilisearch {
	export interface OffreDeStage {
		id: number;
		domaines: Array<string>;
		source?: string;
		dateDeDebutMin: string;
		dateDeDebutMax: string;
		teletravailPossible?: boolean;
		niveauEtude?: string;
		dureeCategorisee?: string;
		dureeEnJour?: number;
		dureeEnJourMax?: number;
		localisation?: OffreDeStage.Localisation;
		localisationFiltree: Array<string>;
		titre: string;
		nomEmployeur?: string;
		description: string;
		duree?: string;
		logoUrlEmployeur?: string;
		slug: string;
	}

	export namespace OffreDeStage {
		export interface Localisation {
			ville?: string;
			departement?: string;
			codePostal?: string;
			region?: string;
			pays?: string;
			_geo: {
				lat?: number;
				lng?: number;
			}
		}
	}
}

export namespace Strapi {
	export interface OffreDeStage {
		id: number;
		identifiantSource: string;
		titre: string;
		slug: string;
		source?: OffreDeStage.Source;
		description: string;
		dateDeDebutMin: string;
		dateDeDebutMax: string;
		urlDeCandidature?: string;
		teletravailPossible?: boolean;
		sourceCreatedAt: string;
		sourceUpdatedAt: string;
		sourcePublishedAt: string;
		remunerationBase?: number;
		employeur?: OffreDeStage.Employeur;
		domaines?: Array<OffreDeStage.Domaine>;
		preRequis?: OffreDeStage.Competence;
		dureeEnJour?: number;
		dureeEnJourMax?: number;
		localisation?: OffreDeStage.Localisation;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		createdBy: string;
		updatedBy: string;
	}

	export namespace OffreDeStage {
		export enum Source {
			HELLOWORK = "hellowork",
			INTERNE = "interne",
			JOBIJOBA = "jobijoba",
			JOBTEASER = "jobteaser",
			STAGEFR_COMPRESSE = "stagefr-compresse",
			STAGEFR_DECOMPRESSE = "stagefr-decompresse",
			WELCOME_TO_THE_JUNGLE = "welcome to the jungle",
		}

		export interface Employeur {
			nom: string;
			description?: string;
			logoUrl?: string;
			siteUrl?: string;
			email?: string;
		}

		export interface Domaine {
			nom?: Domaine.Nom | null;
		}

		export namespace Domaine {
			export enum Nom {
				ACHATS = "achats",
				ACTIVITES_SOCIALES_ET_CULTURELLES = "activités sociales et culturelles",
				AGRICULTURE = "agriculture",
				ARCHITECTURE_URBANISME_IMMOBILIER = "architecture / urbanisme / immobilier",
				AUDIT = "audit",
				CHIMIE_BIOLOGIE_AGRONOMIE = "chimie / biologie / agronomie",
				COMMERCE = "commerce",
				COMMUNICATION = "communication",
				COMMUNITY_MANAGEMENT = "community management",
				COMPTABILITÉ_CONTRÔLE_DE_GESTION = "comptabilité / contrôle de gestion",
				CONCEPTION_GÉNIE_CIVIL_GÉNIE_INDUSTRIEL = "conception / génie civil / génie industriel",
				CONSEIL = "conseil",
				DESIGN_UX_UI = "design / UX / UI",
				DÉVELOPPEMENT_INFORMATIQUE = "développement informatique",
				DIRECTION_D_ENTREPRISE = "direction d'entreprise",
				ÉNERGIE_MATÉRIAUX_MÉCANIQUE_ÉLECTRONIQUE = "énergie / matériaux / mécanique / électronique",
				ENSEIGNEMENT = "enseignement",
				ENVIRONNEMENT = "environnement",
				ÉVÈNEMENTIEL = "évènementiel",
				ÉTUDES_STATISTIQUES_DATA = "études / statistiques / data",
				FISCALITE_FINANCE_ASSURANCE = "fiscalite / finance / assurance",
				GESTION_DE_PROJET_PRODUIT = "gestion de projet / produit",
				GRAPHISME_ILLUSTRATION = "graphisme / illustration",
				INFRA_RÉSEAUX_TÉLÉCOMS = "infra / réseaux / télécoms",
				HÔTELLERIE_RESTAURATION = "hôtellerie - restauration",
				JOURNALISME_RP_MÉDIAS = "journalisme / rp / médias",
				JURIDIQUE = "juridique",
				LOGISTIQUE = "logistique",
				LUXE_MODE_TEXTILE = "luxe / mode / textile",
				MARKETING = "marketing",
				PRODUCTION_FABRICATION_EXPLOITATION = "production / fabrication / exploitation",
				QUALITÉ_MAINTENANCE = "qualité / maintenance",
				RH_FORMATION = "rh / formation",
				SANTÉ_SERVICES_À_LA_PERSONNE = "santé / services à la personne",
				SECTEUR_PUBLIC = "secteur public",
				RELATION_CLIENT_SUPPORT = "relation client / support",
				TRAVAUX_CHANTIERS = "travaux / chantiers",
				VENTES = "ventes",
				NON_RENSEIGNÉ = "non renseigné",
			}
		}

		export interface Competence {
			niveauEtude?: string;
			profil?: string;
		}

		export interface Localisation {
			latitude?: number;
			longitude?: number;
			ville?: string;
			adresse?: string;
			departement?: string;
			codePostal?: string;
			region?: string;
			pays?: string;
		}
	}
}
