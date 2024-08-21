---
sidebar_label: Que faire si l'indexation des données Meilisearch reste bloquée à 10000 données dans Strapi ?
sidebar_position: 3
---


# Lorsque l'indexation depuis Strapi échoue : lancer l'indexation depuis un strapi branché à Meilisearch version locale

  

_21 Août 2024_

:::info Contexte
Si vous avez suivi la procédure de resynchronisation et qu'à l'appui sur "update" la valeur du nombre de données indexée reste bloquée à 10000 : L'anomalie provient du plugin Meilisearch Cloud utilisé qui limite à 10000 indexations. Lorsque l’ETL effectue son travail d’upsert des contenus à charger sur Strapi, celui-ci impacte le nombre d'éléments d’une collection (offre de stage, annonces de logements…) et modifie nombre d’entre eux. Puis, le plugin Meilisearch, au travers d’une réaction à un évènement propagé par Strapi, envoie un document à indexer dans Meilisearch.
:::

## Explication de la procédure
Une désynchronisation entre le contenu indexé par Meilisearch et le contenu présent en base de données est donc quotidiennement présente. Pour résoudre le problème nous avons mis en place une solution de contournement en lançant l'indexation depuis un strapi branché à Meilisearch version locale, connecté aux url de Recette ou Prod.

* Réaliser une copie des données Meilisearch en local. [Voir la section copie des données du CMS en local](../tuto/copie-donnee-en-local)
* Lancer l'indexation depuis la version locale 
* Vérifier que l'indexation n'est plus bloquée à 10000 entrées

---