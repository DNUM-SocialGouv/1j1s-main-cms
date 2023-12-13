# Indexation Meilisearch en recette / prod depuis un poste local

---

## Pourquoi cette procédure ?

Actuellement un problème non identifié malgré l'aide des équipes Meilisearch empêche l'indexation totale de certaines collections contenant trop d'éléments.

C'est le cas de la collection des stages par exemple, où seules 10 000 stages peuvent être indexés (soit 2 * BATCH_SIZE)

Ce problème peut également être rencontré en local, sans que on l'en ait identifié la cause. C'est pourquoi il est **indispensable** de tester la procédure sur l'environnement de recette avant de passer à la production.

## Prérequis

Pour lancer une indexation Meilisearch depuis son poste local, il faut avoir suivi une première fois la documentation "Copie des données de recette en local".

## Procédure

### 1 - Recette

#### 1.1 - Modification du .env.docker

Modifier le fichier `.env.docker` pour remplacer les variables `PLUGIN_MEILISEARCH_URL` et `PLUGIN_MEILISEARCH_API_KEY` avec le valeurs correspondant à la recette

#### 1.2 - Création manuelle d'un backup de la base de donnée

- Aller sur l'interface Scalingo et cliquer sur l'instance de recette.
- Dans "Addons", suivre sur le lien vers le dashboard Postgre
- Aller dans "Backups" et cliquer sur le "Make manual backup"
- Attendre la fin du backup

#### 1.3 - Récupération des données de recette et lancement du container

Il faut relancer la commande `npm run docker:populate` pour récupérer la version la plus à jour possible des données

Lancer le container avec `npm run docker:start`

#### 1.4 - Indexation

Aller sur l'interface d'administration de Strapi -> Onglet Meilisearch et indexer la ou les collections

### 2 - Production

#### 2.1 - Modification du populate-with-recette-data.sh

Modifier le fichier `.env.docker` pour remplacer la variable  `SCALINGO_APP`  par `'1j1s-main-cms-prod'`


#### 2.2 - Répeter les opérations précédentes

Répéter les opértations 1.1 à 1.4 pour l'environnement de production 

### 3 - Cleanup 
Ne pas oublier de supprimer les valeurs des variables d'environnement de recette / production une fois terminé
