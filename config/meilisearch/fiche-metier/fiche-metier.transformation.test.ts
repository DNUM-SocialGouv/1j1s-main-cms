import assert from "node:assert";
import { transformerFicheMetier } from "./fiche-metier.transformation";
import { uneFicheMetierStrapi, uneFicheMetierMeilisearch } from "./fiche-metier.fixture";

describe("FicheMetierTransformation", () => {
  describe("Lorsque je transforme la fiche métier", () => {
    describe("avec des valeurs non-renseignées", () => {
      describe("et qu'il s'agit du centre d'intérêt", () => {
        it("retourne une fiche métier sans centres d’intérêt", () => {
          // Given
          const entry = uneFicheMetierStrapi({ centres_interet: undefined });

          // When
          const result = transformerFicheMetier({ entry });

          // Then
          assert.deepEqual(result, uneFicheMetierMeilisearch({ centres_interet: undefined }));
        });
      });

      describe("et qu'il s'agit de la formation minimale requise", () => {
        it("retourne une fiche métier sans formation minimale requise", () => {
          // Given
          const entry = uneFicheMetierStrapi({ formations_min_requise: undefined });

          // When
          const result = transformerFicheMetier({ entry });

          // Then
          assert.deepEqual(result, uneFicheMetierMeilisearch({ formations_min_requise: undefined }));
        });
      });

      describe("et qu'il s'agit du niveau d'accès minimum requise", () => {
        it("retourne une fiche métier sans niveau d'accès requis", () => {
          // Given
          const ficheMetierStrapi = uneFicheMetierStrapi({ niveau_acces_min: undefined });

          // When
          const result = transformerFicheMetier({ entry: ficheMetierStrapi });

          // Then
          assert.deepEqual(result, uneFicheMetierMeilisearch({ niveau_acces_min: undefined }));
        });
      });

      describe("et qu'il s'agit du secteur d'activité", () => {
        it("retourne une fiche métier sans secteur d'activité", () => {
          // Given
          const ficheMetierStrapi = uneFicheMetierStrapi({ secteurs_activite: undefined });

          // When
          const result = transformerFicheMetier({ entry: ficheMetierStrapi });

          // Then
          assert.deepEqual(result, uneFicheMetierMeilisearch({ secteurs_activite: undefined }));
        });
      });

      describe("et qu'il s'agit du statut", () => {
        it("retourne une fiche métier sans statut", () => {
          // Given
          const ficheMetierStrapi = uneFicheMetierStrapi({ statuts: undefined });

          // When
          const result = transformerFicheMetier({ entry: ficheMetierStrapi });

          // Then
          assert.deepEqual(result, uneFicheMetierMeilisearch({ statuts: undefined }));
        });
      });
    });

    describe("avec toutes les valeurs renseignées", () => {
      it("retourne une fiche métier pour l'indexation", () => {
        // Given
        const ficheMetierStrapi = uneFicheMetierStrapi();

        // When
        const result = transformerFicheMetier({ entry: ficheMetierStrapi });

        // Then
        assert.deepEqual(result, uneFicheMetierMeilisearch());
      });
    });
  });
});
