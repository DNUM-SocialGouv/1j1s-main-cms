import assert from "node:assert";
import {
  convertirDansLaBonneUniteTemporelle,
  creerFiltreSurLaDuree,
  transformerLaLocalisation,
  transformerLesDomaines,
  transformerOffreDeStage
} from "./offre-de-stage.transformation";
import { Meilisearch, Strapi } from "./offre-de-stage.type";
import { uneOffreDeStageMeilisearch, uneOffreDeStageStrapi } from "./offre-de-stage.fixture";

describe("OffreDeStageTransformationTest", () => {
  context("Lorsque je souhaite ajouter une catégorie de filtre sur la durée du stage", () => {
    context("et que la durée du stage est égale à 0", () => {
      it("retourne 'Non renseigné'", () => {
        // When
        const result = creerFiltreSurLaDuree("0");

        // Then
        assert.deepEqual(result, "Non renseigné");
      });
    });

    context("et que la durée du stage est supérieure à 0 et inférieure à 30", () => {
      it("retourne '< 1 mois'", () => {
        // When
        const result = creerFiltreSurLaDuree("29");

        // Then
        assert.deepEqual(result, "< 1 mois");
      });
    });

    context("et que la durée du stage est égale à 30", () => {
      it("retourne '< 1 mois'", () => {
        // When
        const result = creerFiltreSurLaDuree("30");

        // Then
        assert.deepEqual(result, "1 mois");
      });
    });

    context("et que la durée du stage est égale à 60", () => {
      it("retourne '2 mois'", () => {
        // When
        const result = creerFiltreSurLaDuree("60");

        // Then
        assert.deepEqual(result, "2 mois");
      });
    });

    context("et que la durée du stage est égale à 90", () => {
      it("retourne '3 mois'", () => {
        // When
        const result = creerFiltreSurLaDuree("90");

        // Then
        assert.deepEqual(result, "3 mois");
      });
    });

    context("et que la durée du stage est égale à 120", () => {
      it("retourne '4 mois'", () => {
        // When
        const result = creerFiltreSurLaDuree("120");

        // Then
        assert.deepEqual(result, "4 mois");
      });
    });

    context("et que la durée du stage est égale à 150", () => {
      it("retourne '5 mois'", () => {
        // When
        const result = creerFiltreSurLaDuree("150");

        // Then
        assert.deepEqual(result, "5 mois");
      });
    });

    context("et que la durée du stage est égale à 180", () => {
      it("retourne '6 mois'", () => {
        // When
        const result = creerFiltreSurLaDuree("180");

        // Then
        assert.deepEqual(result, "6 mois");
      });
    });

    context("et que la durée du stage est supérieure à 180", () => {
      it("retourne '> 6 mois'", () => {
        // When
        const result = creerFiltreSurLaDuree("181");

        // Then
        assert.deepEqual(result, "> 6 mois");
      });
    });
  });

  context("Lorsque je convertis un nombre de jours", () => {
    context("et qu'il n'est multiple que de 365", () => {
      it("je le convertis en année", () => {
        // Given
        const nombreDeJours = 730;
        const nombreDAnnees = nombreDeJours / 365;

        // When
        const result = convertirDansLaBonneUniteTemporelle(nombreDeJours);

        // Then
        assert.deepEqual(result, `${nombreDAnnees} ans`);
      });
    });

    context("et qu'il n'est multiple que de 30", () => {
      it("je le convertis en mois", () => {
        // Given
        const nombreDeJours = 480;
        const nombreDeMois = nombreDeJours / 30;

        // When
        const result = convertirDansLaBonneUniteTemporelle(nombreDeJours);

        // Then
        assert.deepEqual(result, `${nombreDeMois} mois`);
      });
    });

    context("et qu'il n'est multiple que de 7", () => {
      it("je le convertis en semaines", () => {
        // Given
        const nombreDeJours = 84;
        const nombreDeMois = nombreDeJours / 7;

        // When
        const result = convertirDansLaBonneUniteTemporelle(nombreDeJours);

        // Then
        assert.deepEqual(result, `${nombreDeMois} semaines`);
      });
    });

    context("et qu'il n'est ni multiple de 365, ni multiple de 30, ni multiple de 7", () => {
      it("je le convertis en jours", () => {
        // Given
        const nombreDeJours = 461;

        // When
        const result = convertirDansLaBonneUniteTemporelle(nombreDeJours);

        // Then
        assert.deepEqual(result, `${nombreDeJours} jours`);
      });
    });
  });

  context("Lorsque je convertis la localisation", () => {
    context("et que cette dernière n'est pas renseignée", () => {
      it("retourne un objet vide", () => {
        // Given
        const localisationVide: Meilisearch.OffreDeStage.Localisation = {
          ville: "",
          departement: "",
          codePostal: "",
          region: "",
          pays: "",
          _geo: { lat: 0, lng: 0 }
        };

        // When
        const result = transformerLaLocalisation(undefined);

        // Then
        assert.deepEqual(result, localisationVide);
      });
    });

    context("et que cette dernière est partiellement renseignée", () => {
      it("retourne les champs renseignés", () => {
        // Given
        const localisationAttendue: Meilisearch.OffreDeStage.Localisation = {
          ville: "Montpellier",
          departement: "Hérault",
          codePostal: "34070",
          region: "Occitanie",
          pays: undefined,
          _geo: {
            lat: undefined,
            lng: undefined,
          }
        };

        const localisation: Strapi.OffreDeStage.Localisation = {
          adresse: "280 Avenue Germaine Tillion",
          codePostal: "34070",
          departement: "Hérault",
          pays: undefined,
          region: "Occitanie",
          ville: "Montpellier",
          latitude: undefined,
          longitude: undefined
        };

        // When
        const result = transformerLaLocalisation(localisation);

        // Then
        assert.deepEqual(result, localisationAttendue);
      });
    });

    context("et que cette dernière est complètement renseignée", () => {
      it("retourne tous les champs", () => {
        // Given
        const localisation: Strapi.OffreDeStage.Localisation = {
          adresse: "280 Avenue Germaine Tillion",
          codePostal: "34070",
          departement: "Hérault",
          pays: "France",
          region: "Occitanie",
          ville: "Montpellier",
          latitude: 3.14159,
          longitude: -3.14159,
        };

        const localisationAttendue: Meilisearch.OffreDeStage.Localisation = {
          ville: "Montpellier",
          departement: "Hérault",
          codePostal: "34070",
          region: "Occitanie",
          pays: "France",
          _geo: {
            lat: 3.14159,
            lng: -3.14159,
          }
        };

        // When
        const result = transformerLaLocalisation(localisation);

        // Then
        assert.deepEqual(result, localisationAttendue);
      });
    });
  });

  context("Lorsque je transforme le domaine", () => {
    context("et que le nom n'est pas défini dans les domaines", () => {
      it("retourne un tableau vide", () => {
        // Given
        const offreDeStageStrapi = uneOffreDeStageStrapi({
          domaines: [
            { nom: undefined },
            { nom: null },
          ],
        });

        // When
        const actual = transformerLesDomaines(offreDeStageStrapi);

        // Then
        assert.deepEqual(actual, []);
      });
    });

    context("et que le nom est défini", () => {
      it("retourne un tableau avec les domaines", () => {
        // Given
        const offreDeStageStrapi = uneOffreDeStageStrapi({
          domaines: [
            { nom: Strapi.OffreDeStage.Domaine.Nom.ACHATS },
          ],
        });

        // When
        const actual = transformerLesDomaines(offreDeStageStrapi);

        // Then
        assert.deepEqual(actual, ["achats"]);
      });
    });

    context("et que les noms sont parfois définis et parfois non", () => {
      it("retourne un tableau avec seulement les domaines définis", () => {
        // Given
        const offreDeStageStrapi = uneOffreDeStageStrapi({
          domaines: [
            { nom: Strapi.OffreDeStage.Domaine.Nom.ACHATS },
            { nom: undefined },
          ],
        });

        // When
        const actual = transformerLesDomaines(offreDeStageStrapi);

        // Then
        assert.deepEqual(actual, ["achats"]);
      });
    });
  });

  context("Lorsque je transforme une offre de stage", () => {
    it("retourne une offre de stage", () => {
      // Given
      const offreDeStageMeilisearch = uneOffreDeStageMeilisearch();

      const offreDeStageStrapi = uneOffreDeStageStrapi();

      // When
      const result = transformerOffreDeStage({ entry: offreDeStageStrapi });

      // Then
      assert.deepEqual(result, offreDeStageMeilisearch);
    });
  });
});
