import assert from "node:assert";
import {
  getDeviseToDisplay,
  getLocalisationToDisplay,
  getSourceUpdatedAtToDisplay,
  getSurfaceToDisplay,
  transformerAnnonceDeLogement
} from "./annonce-de-logement.transformation";
import { Source, TypeBien, TypeLocation } from "./annonce-de-logement.type";

let surface: number;
let surfaceMax: number;
let devise: string;
let ville: string;
let codePostal: number;

describe("AnnonceDeLogementTransformation", () => {
  describe("Lorsque je transforme la surface à afficher", () => {
    describe("et que la surfaceMax n'a pas de valeur définie", () => {
      it("affiche la seule surface que nous ayons", () => {
        // Given
        surface = 30;
        surfaceMax = null;

        // When
        const resultat = getSurfaceToDisplay(surface, surfaceMax);

        // Then
        assert.strictEqual(resultat, "30m²");
      });

      it("affiche la seule surface que nous ayons", () => {
        // Given
        surface = 30;
        surfaceMax = undefined;

        // When
        const resultat = getSurfaceToDisplay(surface, surfaceMax);

        // Then
        assert.strictEqual(resultat, "30m²");
      });
    });

    describe("et que la surfaceMax est égale à 0", () => {
      it("affiche la seule surface que nous ayons", () => {
        // Given
        surface = 30;
        surfaceMax = 0;

        // When
        const resultat = getSurfaceToDisplay(surface, surfaceMax);

        // Then
        assert.strictEqual(resultat, "30m²");
      });
    });

    describe("et que la surfaceMax est supérieure à 0", () => {
      it("affiche l'intervalle de surface", () => {
        // Given
        surface = 30;
        surfaceMax = 35;

        // When
        const resultat = getSurfaceToDisplay(surface, surfaceMax);

        // Then
        assert.strictEqual(resultat, "de 30 à 35 m²");
      });
    });

    describe("et que la surface n'a pas de valeur définie", () => {
      it("affiche de undefined à surfaceMax", () => {
        // Given
        surface = undefined;
        surfaceMax = 35;

        // When
        const resultat = getSurfaceToDisplay(surface, surfaceMax);

        // Then
        assert.strictEqual(resultat, "de undefined à 35 m²");
      });

      it("affiche de null à surfaceMax", () => {
        // Given
        surface = null;
        surfaceMax = 35;

        // When
        const resultat = getSurfaceToDisplay(surface, surfaceMax);

        // Then
        assert.strictEqual(resultat, "de null à 35 m²");
      });
    });
  });

  describe("Lorsque je transforme la devise à afficher", () => {
    describe("et que la valeur courante est non définie", () => {
      it("retourne la devise par défaut", () => {
        // Given
        devise = null;

        // When
        const resultat = getDeviseToDisplay(devise);

        // Then
        assert.strictEqual(resultat, "€");
      });

      it("retourne la devise par défaut", () => {
        // Given
        devise = undefined;

        // When
        const resultat = getDeviseToDisplay(devise);

        // Then
        assert.strictEqual(resultat, "€");
      });
    });

    describe("et que la valeur courante est euros", () => {
      it("retourne la devise par défaut", () => {
        // Given
        devise = undefined;

        // When
        const resultat = getDeviseToDisplay(devise);

        // Then
        assert.strictEqual(resultat, "€");
      });
    });
  });

  describe("Lorsque je transforme la localisation à afficher", () => {
    describe("et que la localisation est vide", () => {
      it("Retourne une chaine vide", () => {
        // When
        const resultat = getLocalisationToDisplay({});

        // Then
        assert.strictEqual(resultat, "");
      });
    });

    describe("et que la localisation n'existe pas", () => {
      it("retourne une chaine vide", () => {
        // When
        const undefinedResultat = getLocalisationToDisplay(undefined);
        const nullResultat = getLocalisationToDisplay(null);

        // Then
        assert.strictEqual(undefinedResultat, "");
        assert.strictEqual(nullResultat, "");
      });
    });

    describe("et que la ville et le code postal sont définis", () => {
      it("retourne le code postal suivi de la ville", () => {
        // Given
        ville = "Paris";
        codePostal = 75001;

        // When
        const resultat = getLocalisationToDisplay({ ville, codePostal });

        // Then
        assert.strictEqual(resultat, "75001 - Paris");
      });
    });

    describe("et que seul le code postal est renseigné", () => {
      it("retourne seulement le code postal", () => {
        // Given
        ville = undefined;
        codePostal = 75001;

        // When
        const resultat = getLocalisationToDisplay({ ville, codePostal });

        // Then
        assert.strictEqual(resultat, "75001");
      });
    });

    describe("et que seule la ville est renseignée", () => {
      it("retourne seulement la ville", () => {
        // Given
        ville = "Montpellier";
        codePostal = undefined;

        // When
        const resultat = getLocalisationToDisplay({ ville, codePostal });

        // Then
        assert.strictEqual(resultat, "Montpellier");
      });
    });
  });

  describe("Lorsque je transforme la date de mise à jour par la source", () => {
    describe("et que sa valeur est définie", () => {
      it("retourne uniquement la date", () => {
        // Given
        const dateMiseAJourDeLaSource = "2023-01-01T01:00:00.000Z";

        // When
        const resultat = getSourceUpdatedAtToDisplay(dateMiseAJourDeLaSource);

        // Then
        assert.strictEqual(resultat, "2023-01-01");
      });
    });

    describe("et que sa valeur est non-définie", () => {
      it("retourne une chaîne vide", () => {
        // Given
        const dateMiseAJourDeLaSource = undefined;

        // When
        const resultat = getSourceUpdatedAtToDisplay(dateMiseAJourDeLaSource);

        // Then
        assert.strictEqual(resultat, "");
      });
    });
  });

  describe("Lorsque je transforme l'annonce de logement au complet", () => {
    it("me retourne les informations essentielles uniquement", () => {
      // Given
      const entry = {
        entry: {
          id: "1",
          identifiantSource: "identifiant-source",
          titre: "le titre",
          description: "la description",
          url: "http://some.url",
          source: Source.immojeune,
          typeBien: TypeBien.T1BIS,
          type: TypeLocation.COURTE,
          surface: 25,
          surfaceMax: 30,
          nombreDePieces: 2,
          etage: 6,
          dateDeDisponibilite: "2022-12-12",
          bilanEnergetique: {
            consommationEnergetique: "A",
            emissionDeGaz: "B"
          },
          meuble: true,
          localisation: {
            ville: "Paris",
            codePostal: "75001",
          },
          sourceCreatedAt: "2022-09-01",
          sourceUpdatedAt: "2022-12-12T01:30:00.000Z",
          imagesUrl: [{ value: "http://some.url/1" }, { value: "http://some.url/2" }],
          servicesInclus: [],
          servicesOptionnels: [],
          prixHT: 700,
          prix: 750,
          devise: "euros",
          charge: 50,
          garantie: 600,
          slug: "le-slug",
          createdAt: "string",
          updatedAt: "string",
          publishedAt: "string",
          createdBy: "string",
          updatedBy: "string",
        }
      };
      const expected = {
        id: "1",
        slug: "le-slug",
        titre: "le titre",
        dateDeDisponibilite: "2022-12-12",
        dateDeMiseAJour: "2022-12-12",
        devise: "€",
        prix: 750,
        prixHT: 700,
        surface: 25,
        surfaceMax: 30,
        surfaceAAfficher: `de 25 à 30 m²`,
        type: "courte",
        typeBien: "t1bis",
        url: "http://some.url",
        imagesUrl: ["http://some.url/1", "http://some.url/2"],
        sourceUpdatedAt: "2022-12-12T01:30:00.000Z",
        localisationAAfficher: "75001 - Paris",
        localisation: {
          ville: "Paris",
          codePostal: "75001",
        },
      };

      // When
      const resultat = transformerAnnonceDeLogement(entry);

      // Then
      assert.deepEqual(resultat, expected);
    });
  });
});
