# CMS principal 1Jeune1Solution
Ce projet est le cms principal d'1Jeune1Solution.
Il s'agit de la version typescript.
Les cms stages et contenus statiques seront rapatriés ulterieurement.

Afin de faciliter les choses, tout est dockerisé sur ce projet.


## `develop`
Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### liste des commandes
| action                                                                                                                       | Commande                      |
|------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| Lancer le projet                                                                                                             | `npm run docker:start`        | 
| Lancer le projet avec les logs                                                                                               | `npm run docker:start::log`   | 
| Relancer le projet après un changement dans les dépendances (mise à jour ou nouveau plugin)                                  | `npm run docker:new-component` | 
| killer le projet                                                                                                             | `npm run docker:down`         | 
| killer le projet et supprimer les données **/!\ ATTENTION**: cette commande supprimera tous vos volumes dockers non utilisés | `npm run docker:clean`        | 
| Stopper le projet                                                                                                            | `npm run docker:stop`         | 
| Lancer le projet manuellement avec base externe                                                                              | `npm run dev`                 | 

``
## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

## Creation d’un Collection Type

Après avoir lancé Strapi en local il va falloir générer un nouveau Content-Type dans l'interface avec le plugin Content-Type Builder
- Seléctionner `+` Create new collection type
- Configurer la nouvelle Collection selon votre besoin
- Une fois votre Collection déclarée il va falloir gérer la synchronisation de la config dans la codebase: dans `config/config-sync/core-stores-config-files-to-exclude.ts` ajouter la configuration liée à votre nouvelle Collection: `"core-store.plugin_content_manager_configuration_content_types::api::[Collection].[Collection]"`
- Maintenant ajouter les droits des utilisateurs sur votre nouvelle Collection: dans `config/config-sync/files/user-role.public.json`. Par exemple pour les droits de lecture ajouter:
```
{
  "action": "api::[Collection].[Collection].find"
},
{
  "action": "api::[Collection].[Collection].findOne"
}
```
- Votre nouvelle Collection est utilisable.