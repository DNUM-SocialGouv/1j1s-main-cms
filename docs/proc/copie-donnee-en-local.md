# Copie des données de recette en local

---

Le script `populate-with-recette-data.sh` à la racine a été mis en place pour la copie des données du CMS de recette vers le CMS conteneurisé.
Ci-dessous l'explication du fonctionnement de ce script. 

## Prérequis

Afin de pouvoir exécuter le script, il faut avoir copié le contenu de `.env.docker' dans '.env'.

Ensuite, vous devez avoir en votre possession une clef vous permettant de vous connecter sur l'environnement depuis lequel l'on veut copier.
Pour la générer : il suffit de se connecter sur son compte Scalingo et générer un API Token. 


Cette clef (API Token) est à remplir dans la variable d'environnement `SCALINGO_API_TOKEN` dans `.env`.

Pour manipuler les conteneurs et applications sur Scalingo, il vous faudra [installer leur CLI](https://doc.scalingo.com/platform/cli/start#install-scalingo-cli)

Vous pouvez exécuter la commande suivante pour installer ou mettre à jour `Scalingo CLI`:

```/bin/bash
$ curl -O https://cli-dl.scalingo.com/install && bash install
```

## Explication de la procédure

### Variables d'environnement utiles

```/bin/bash
# populate-with-recette-data.sh

export SCALINGO_APP='1j1s-main-cms'
export SCALINGO_REGION='osc-fr1'
export ADDON_NAME='postgresql'
export SCALINGO_DB_USER='<l'utilisateur db prod>'
```

```/bin/bash
# .env

SCALINGO_API_TOKEN='<la clef API de Scalingo>'
```

### Connexion

Dans un premier temps, il faut se connecter avec la clef récupérée ci-dessus.
Une vérification est faite en amont pour arrêter le script s'il n'y a pas de `.env` local.

```/bin/bash
if [ -f .env ]
then
  export $(cat .env | xargs)
else
  exit 1
fi

scalingo login --api-token ${API_TOKEN}
```

### Téléchargement de la Backup

Pour télécharger la dernière backup de la BDD en recette, on lance les commandes suivantes :

```/bin/bash
addon_id=$(scalingo addons | grep $ADDON_NAME | cut -d'|' -f3 | tr -d ' ')
mkdir -p tmp && cd tmp
scalingo --addon ${addon_id} backups-download --output ./backup
tar -xvf ./backup
for filename in *.pgsql; do eval mv \"$filename\" \"backup.pgsql\"; done
cd ..
```

A ce stade, nous avons un fichier `backup.psql` dans le dossier `tmp` qui contient la BDD de recette.  

### Monter la backup dans le conteneur local

Une fois le téléchargement terminé, il suffit de lancer le docker de BDD en lui chargeant le fichier.

```/bin/bash
docker compose down -v
docker compose --env-file .env.docker up -d db
sleep 5
docker compose exec db psql -U ${DATABASE_USERNAME} -d ${DATABASE_NAME} -c "CREATE USER ${SCALINGO_DB_USER} SUPERUSER;"
docker compose cp ./tmp/backup.pgsql db:/tmp/backup.pgsql
docker compose exec db pg_restore -U ${SCALINGO_DB_USER} -d ${DATABASE_NAME} /tmp/backup.pgsql
```
