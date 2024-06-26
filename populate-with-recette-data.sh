#!/bin/bash
export SCALINGO_APP='1j1s-main-cms'
export SCALINGO_REGION='osc-fr1'
export ADDON_NAME='postgresql'
export DATABASE_URL='postgres://database-user:database-password@1j1s-main-content-manager-db:5432/cms-principal'

if [ -f .env ]
then
  export $(cat .env | xargs)
else
  >&2 echo "error: No .env found"
  exit 1
fi

scalingo login --api-token ${SCALINGO_API_TOKEN}

addon_id=$(scalingo addons | grep $ADDON_NAME | cut -d'|' -f3 | tr -d ' ')
mkdir -p tmp && cd tmp
scalingo --addon ${addon_id} backups-download --output ./backup
tar -xvf ./backup
for filename in *.pgsql; do eval mv \"$filename\" \"backup.pgsql\"; done
cd ..

docker compose down -v
docker compose --env-file .env.docker up -d db
sleep 5
docker compose cp ./tmp/backup.pgsql db:/tmp/backup.pgsql
docker compose exec db pg_restore --no-privileges --no-owner -d "${DATABASE_URL}" /tmp/backup.pgsql
rm tmp/backup tmp/backup.pgsql
