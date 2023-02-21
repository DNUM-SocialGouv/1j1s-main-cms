# Changelog

## [1.3.1](https://github.com/DNUM-SocialGouv/1j1s-main-cms/compare/v1.3.0...v1.3.1) (2023-02-21)


### Bug Fixes

* corrige le docker build qui plantait depuis l'ajout de git-notify ([4533d13](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/4533d13953e4441a3c651395fcfa608c03e575cb))

## [1.3.0](https://github.com/DNUM-SocialGouv/1j1s-main-cms/compare/v1.2.3...v1.3.0) (2023-02-09)


### Features

* **stage:** mise a jour droit utilisateur creation offre de stage ([a81cb13](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/a81cb13c43a5e6fe0e027b0fca2f97ece41e3ae4))

## [1.2.3](https://github.com/DNUM-SocialGouv/1j1s-main-cms/compare/v1.2.2...v1.2.3) (2023-02-06)


### Bug Fixes

* **meilisearch:** corriger la taille des batch ([f250c42](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/f250c42995e37045e88866b896c45831616a40d4))

## [1.2.2](https://github.com/DNUM-SocialGouv/1j1s-main-cms/compare/v1.2.1...v1.2.2) (2023-02-06)


### Bug Fixes

* **logements:** Fix typo service terrasse ([4a8ea95](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/4a8ea95858065657ae08a8e2eff0db99524106cb))

## [1.2.1](https://github.com/DNUM-SocialGouv/1j1s-main-cms/compare/v1.2.0...v1.2.1) (2023-02-04)


### Tests

* **meilisearch:** ajout tests offre de stages ([0b11e7a](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/0b11e7a8a6803fc2b4c3d6d526e4badf20f022c2))

## [1.2.0](https://github.com/DNUM-SocialGouv/1j1s-main-cms/compare/v1.1.2...v1.2.0) (2023-02-02)


### Features

* **logements:** Ajoute les services manquants ([7310aca](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/7310acaba44c1b27bb74f0ba2854394b21e93d37))

## [1.1.2](https://github.com/DNUM-SocialGouv/1j1s-main-cms/compare/v1.1.1...v1.1.2) (2023-02-02)


### Bug Fixes

* **sentry:** correction erreur version sentry ([d1a98cb](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/d1a98cb468d774c10ddb83ba56d4c7507ee906d4))

## [1.1.1](https://github.com/DNUM-SocialGouv/1j1s-main-cms/compare/v1.1.0...v1.1.1) (2023-01-31)


### Bug Fixes

* **configuration:** ajout droit création entreprise ([2fcee25](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/2fcee2589029a1790893fa6b83e5e4028fee5b1e))

## [1.1.0](https://github.com/DNUM-SocialGouv/1j1s-main-cms/compare/v1.0.0...v1.1.0) (2023-01-25)


### Features

* **depot-stage:** ajout d'un champ email facultatif dans le composant employeur ([d1c4c3b](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/d1c4c3b18a544cfb53890ef7b48148c38fc81940))

## 1.0.0 (2023-01-25)


### ⚠ BREAKING CHANGES

* **collections:** récupérer les collections

### Features

* **Evenement:** ajout de la collection evenement ([2941a8f](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/2941a8fc7fbe59d2811f1152b2eb1b0fa694d959))
* **Evenement:** ajout de la configuration evenement pour meilisearch ([f7628ba](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/f7628ba491b8a7b3667f5ee37424ccd0c5277ee9))
* **Evenement:** ajout du schema complet ([38511fc](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/38511fc19587cc8055e5191ba22da7554e856e3a))
* **init:** Initialisation de strapi par défaut avec docker ([9cb0223](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/9cb0223bc21b18609be50d3e19338789b7572475))
* **plugin:** ajout attribut imagesUrl ([3970c9c](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/3970c9cd03493654349984c991972c1a704ca055))
* **plugins:** ajout plugin populate deep ([c1bd99d](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/c1bd99df0773116623751a98638ce33128c3a042))


### Bug Fixes

* **logement:** retirer le transformEntry ([1f99551](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/1f99551b3496b030281090897be102ddea9c19c3))
* **logements:** ajout localisation ([8ffd7e6](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/8ffd7e63fad0d641add896a5b6cc87ff50e4a3c5))
* **logements:** ajout typeBien transformEntry ([29ac7e0](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/29ac7e04dea902081a59aa21374141ae32a0ba8d))
* **meilisearch:** ajout id sur la transformation ([22f1a9e](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/22f1a9e9a9e5f964a4d80d5ea9f80e1352bcc8c9))
* **meilisearch:** mise à niveau transformEntry ([463fa96](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/463fa966434ba8cc7735b84c5fc2e7537482d6ae))
* **stages/meilisearch:** ajout du slug ([d537333](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/d53733320945e972f34b74be9cb0c9a296f0d2bb))


### Miscellaneous Chores

* **collections:** récupérer les collections ([fa80cd3](https://github.com/DNUM-SocialGouv/1j1s-main-cms/commit/fa80cd3b93752482c5dcb53165f22958822bbd8b))
