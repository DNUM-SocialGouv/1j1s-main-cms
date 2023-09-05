import {
  CollectionTypeSchema,
  StringAttribute,
  RequiredAttribute,
  SetMinMaxLength,
  JSONAttribute,
  DefaultTo,
  RelationAttribute,
  DateTimeAttribute,
  PrivateAttribute,
  EmailAttribute,
  UniqueAttribute,
  PasswordAttribute,
  BooleanAttribute,
  EnumerationAttribute,
  BigIntegerAttribute,
  IntegerAttribute,
  DecimalAttribute,
  SetMinMax,
  TextAttribute,
  SingleTypeSchema,
  RichTextAttribute,
  ComponentAttribute,
  DateAttribute,
  UIDAttribute,
  MediaAttribute,
  ComponentSchema,
  FloatAttribute,
} from '@strapi/strapi';

export interface AdminPermission extends CollectionTypeSchema {
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    subject: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: JSONAttribute & DefaultTo<{}>;
    conditions: JSONAttribute & DefaultTo<[]>;
    role: RelationAttribute<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface AdminUser extends CollectionTypeSchema {
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    username: StringAttribute;
    email: EmailAttribute &
      RequiredAttribute &
      PrivateAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: StringAttribute & PrivateAttribute;
    registrationToken: StringAttribute & PrivateAttribute;
    isActive: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
    roles: RelationAttribute<'admin::user', 'manyToMany', 'admin::role'> &
      PrivateAttribute;
    blocked: BooleanAttribute & PrivateAttribute & DefaultTo<false>;
    preferedLanguage: StringAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
    updatedBy: RelationAttribute<'admin::user', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
  };
}

export interface AdminRole extends CollectionTypeSchema {
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    code: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute;
    users: RelationAttribute<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: RelationAttribute<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
    updatedBy: RelationAttribute<'admin::role', 'oneToOne', 'admin::user'> &
      PrivateAttribute;
  };
}

export interface AdminApiToken extends CollectionTypeSchema {
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    description: StringAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }> &
      DefaultTo<''>;
    type: EnumerationAttribute<['read-only', 'full-access', 'custom']> &
      RequiredAttribute &
      DefaultTo<'read-only'>;
    accessKey: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: DateTimeAttribute;
    permissions: RelationAttribute<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: DateTimeAttribute;
    lifespan: BigIntegerAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface AdminApiTokenPermission extends CollectionTypeSchema {
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 1;
      }>;
    token: RelationAttribute<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUploadFile extends CollectionTypeSchema {
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute & RequiredAttribute;
    alternativeText: StringAttribute;
    caption: StringAttribute;
    width: IntegerAttribute;
    height: IntegerAttribute;
    formats: JSONAttribute;
    hash: StringAttribute & RequiredAttribute;
    ext: StringAttribute;
    mime: StringAttribute & RequiredAttribute;
    size: DecimalAttribute & RequiredAttribute;
    url: StringAttribute & RequiredAttribute;
    previewUrl: StringAttribute;
    provider: StringAttribute & RequiredAttribute;
    provider_metadata: JSONAttribute;
    related: RelationAttribute<'plugin::upload.file', 'morphToMany'>;
    folder: RelationAttribute<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      PrivateAttribute;
    folderPath: StringAttribute &
      RequiredAttribute &
      PrivateAttribute &
      SetMinMax<{
        min: 1;
      }>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUploadFolder extends CollectionTypeSchema {
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
      }>;
    pathId: IntegerAttribute & RequiredAttribute & UniqueAttribute;
    parent: RelationAttribute<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: RelationAttribute<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: RelationAttribute<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: StringAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
      }>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginSlugifySlug extends CollectionTypeSchema {
  info: {
    singularName: 'slug';
    pluralName: 'slugs';
    displayName: 'slug';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    slug: TextAttribute;
    count: IntegerAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsPermission extends CollectionTypeSchema {
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: StringAttribute & RequiredAttribute;
    role: RelationAttribute<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsRole extends CollectionTypeSchema {
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: StringAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 3;
      }>;
    description: StringAttribute;
    type: StringAttribute & UniqueAttribute;
    permissions: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface PluginUsersPermissionsUser extends CollectionTypeSchema {
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: StringAttribute &
      RequiredAttribute &
      UniqueAttribute &
      SetMinMaxLength<{
        minLength: 3;
      }>;
    email: EmailAttribute &
      RequiredAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: StringAttribute;
    password: PasswordAttribute &
      PrivateAttribute &
      SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: StringAttribute & PrivateAttribute;
    confirmationToken: StringAttribute & PrivateAttribute;
    confirmed: BooleanAttribute & DefaultTo<false>;
    blocked: BooleanAttribute & DefaultTo<false>;
    role: RelationAttribute<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiAccessibiliteAccessibilite extends SingleTypeSchema {
  info: {
    singularName: 'accessibilite';
    pluralName: 'accessibilites';
    displayName: 'Accessibilit\u00E9';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titre: StringAttribute;
    contenu: RichTextAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::accessibilite.accessibilite',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::accessibilite.accessibilite',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiActualiteActualite extends SingleTypeSchema {
  info: {
    singularName: 'actualite';
    pluralName: 'actualites';
    displayName: 'Actualit\u00E9';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    listeActualites: ComponentAttribute<'cartes.carte-lien', true>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::actualite.actualite',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::actualite.actualite',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiAnnonceDeLogementAnnonceDeLogement
  extends CollectionTypeSchema {
  info: {
    singularName: 'annonce-de-logement';
    pluralName: 'annonces-de-logement';
    displayName: 'Annonce-de-logement';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    identifiantSource: StringAttribute & RequiredAttribute;
    titre: StringAttribute & RequiredAttribute;
    description: RichTextAttribute & RequiredAttribute;
    url: StringAttribute & RequiredAttribute;
    source: EnumerationAttribute<['immojeune', 'studapart']> &
      RequiredAttribute;
    typeBien: EnumerationAttribute<
      [
        'appartement',
        'chambre',
        'colocation',
        'immeuble',
        'maison',
        'studio',
        't1',
        't1bis',
        't2',
        't3',
        't4',
        't4 et plus',
        'non renseign\u00E9'
      ]
    >;
    type: EnumerationAttribute<
      [
        'colocation',
        'courte',
        'habitation interg\u00E9n\u00E9rationnelle',
        'location',
        'r\u00E9sidence',
        'sous-location',
        'non renseign\u00E9'
      ]
    >;
    surface: IntegerAttribute & RequiredAttribute;
    surfaceMax: IntegerAttribute;
    nombreDePieces: IntegerAttribute &
      RequiredAttribute &
      SetMinMax<{
        min: 1;
      }> &
      DefaultTo<1>;
    etage: IntegerAttribute;
    dateDeDisponibilite: DateAttribute & RequiredAttribute;
    bilanEnergetique: ComponentAttribute<'bilan-energetique.bilan-energetique'>;
    meuble: BooleanAttribute & RequiredAttribute & DefaultTo<false>;
    localisation: ComponentAttribute<'localisation.localisation'> &
      RequiredAttribute;
    sourceCreatedAt: DateTimeAttribute & RequiredAttribute;
    sourceUpdatedAt: DateTimeAttribute & RequiredAttribute;
    imagesUrl: ComponentAttribute<'image-url.image-url', true>;
    servicesInclus: ComponentAttribute<'service-inclus.services-inclus', true>;
    servicesOptionnels: ComponentAttribute<
      'service-optionnel.services-optionnels',
      true
    >;
    prixHT: DecimalAttribute &
      SetMinMax<{
        min: 0;
      }>;
    prix: DecimalAttribute;
    devise: StringAttribute & RequiredAttribute & DefaultTo<'euros'>;
    charge: DecimalAttribute &
      SetMinMax<{
        min: 0;
      }>;
    garantie: DecimalAttribute &
      SetMinMax<{
        min: 0;
      }>;
    slug: UIDAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::annonce-de-logement.annonce-de-logement',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::annonce-de-logement.annonce-de-logement',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiArticleArticle extends CollectionTypeSchema {
  info: {
    singularName: 'article';
    pluralName: 'articles';
    displayName: 'Article';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titre: StringAttribute & RequiredAttribute;
    slug: UIDAttribute<'api::article.article', 'titre'> & RequiredAttribute;
    contenu: RichTextAttribute &
      DefaultTo<"R\u00E8gles d'\u00E9dition de contenu : Ne pas utiliser de titre h1, il ne peut y en avoir qu'un seul par page (le champ titre est pr\u00E9vu pour cela). \u00C9viter au maximum l'utilisation d'images dans le contenu (le champ banni\u00E8re est aussi pr\u00E9vu pour cela).">;
    banniere: MediaAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::article.article',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiConditionsGeneralesDUtilisationConditionsGeneralesDUtilisation
  extends SingleTypeSchema {
  info: {
    singularName: 'conditions-generales-d-utilisation';
    pluralName: 'conditions-generales-d-utilisations';
    displayName: "Conditions g\u00E9n\u00E9rales d'utilisation";
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titre: StringAttribute;
    contenu: RichTextAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::conditions-generales-d-utilisation.conditions-generales-d-utilisation',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::conditions-generales-d-utilisation.conditions-generales-d-utilisation',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiContactCejContactCej extends CollectionTypeSchema {
  info: {
    singularName: 'contact-cej';
    pluralName: 'contact-cejs';
    displayName: 'Contact cej';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    prenom: StringAttribute & RequiredAttribute;
    nom: StringAttribute & RequiredAttribute;
    email: EmailAttribute & RequiredAttribute;
    telephone: StringAttribute & RequiredAttribute;
    age: IntegerAttribute & RequiredAttribute;
    ville: StringAttribute;
    code_postal: StringAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::contact-cej.contact-cej',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::contact-cej.contact-cej',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}
export interface ApiEvenementEvenement extends CollectionTypeSchema {
  info: {
    singularName: 'evenement';
    pluralName: 'evenements';
    displayName: 'Evenement';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    dateDebut: DateTimeAttribute;
    description: TextAttribute;
    idSource: StringAttribute;
    lieu: StringAttribute;
    modaliteInscription: TextAttribute;
    online: BooleanAttribute;
    organismeOrganisateur: StringAttribute;
    titre: StringAttribute;
    type: EnumerationAttribute<
      [
        'seance_information',
        'reunion_information',
        'atelier',
        'job_dating',
        'forum',
        'Conf\u00E9rence'
      ]
    >;
    source: EnumerationAttribute<['tous-mobilises', 'salons-en-ligne']>;
    slug: UIDAttribute<'api::evenement.evenement', 'idSource'>;
    dateFin: DateTimeAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::evenement.evenement',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::evenement.evenement',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiFicheMetierFicheMetier extends CollectionTypeSchema {
  info: {
    singularName: 'fiche-metier';
    pluralName: 'fiche-metiers';
    displayName: 'Fiche m\u00E9tier';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    nom_metier: StringAttribute;
    competences: RichTextAttribute;
    condition_travail: RichTextAttribute;
    secteurs_activite: ComponentAttribute<
      'fiche-metier.secteurs-d-activite',
      true
    >;
    identifiant: StringAttribute;
    centres_interet: ComponentAttribute<'fiche-metier.centres-d-interet', true>;
    niveau_acces_min: ComponentAttribute<
      'fiche-metier.niveau-acces-minimal',
      true
    >;
    nature_travail: RichTextAttribute;
    vie_professionnelle: RichTextAttribute;
    acces_metier: RichTextAttribute;
    statuts: ComponentAttribute<'fiche-metier.statuts-professionnels', true>;
    formations_min_requise: ComponentAttribute<
      'fiche-metier.formations-min-requise',
      true
    >;
    accroche_metier: RichTextAttribute;
    libelle_feminin: StringAttribute;
    libelle_masculin: StringAttribute;
    synonymes: StringAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::fiche-metier.fiche-metier',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::fiche-metier.fiche-metier',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiLesMesuresEmployeursLesMesuresEmployeurs
  extends SingleTypeSchema {
  info: {
    singularName: 'les-mesures-employeurs';
    pluralName: 'toutes-les-mesures-employeurs';
    displayName: 'Les mesures employeurs';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    dispositifs: ComponentAttribute<'cartes.carte-lien', true>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::les-mesures-employeurs.les-mesures-employeurs',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::les-mesures-employeurs.les-mesures-employeurs',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiMentionLegaleMentionLegale extends SingleTypeSchema {
  info: {
    singularName: 'mention-legale';
    pluralName: 'mentions-legales';
    displayName: 'Mentions l\u00E9gales';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titre: StringAttribute;
    contenu: RichTextAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::mention-legale.mention-legale',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::mention-legale.mention-legale',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiMesureJeuneMesureJeune extends SingleTypeSchema {
  info: {
    singularName: 'mesure-jeune';
    pluralName: 'mesures-jeunes';
    displayName: 'Les mesures jeunes';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    vieProfessionnelle: ComponentAttribute<'cartes.carte-lien', true>;
    orienterFormer: ComponentAttribute<'cartes.carte-lien', true>;
    accompagnement: ComponentAttribute<'cartes.carte-lien', true>;
    aidesFinancieres: ComponentAttribute<'cartes.carte-lien', true>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::mesure-jeune.mesure-jeune',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::mesure-jeune.mesure-jeune',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiOffreDeStageOffreDeStage extends CollectionTypeSchema {
  info: {
    singularName: 'offre-de-stage';
    pluralName: 'offres-de-stage';
    displayName: 'Offre-de-stage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    identifiantSource: StringAttribute & RequiredAttribute;
    titre: StringAttribute & RequiredAttribute;
    slug: UIDAttribute;
    source: EnumerationAttribute<
      [
        'hellowork',
        'interne',
        'jobijoba',
        'jobteaser',
        'stagefr-compresse',
        'stagefr-decompresse',
        'welcome to the jungle'
      ]
    >;
    description: RichTextAttribute & RequiredAttribute;
    dateDeDebutMin: DateAttribute & RequiredAttribute;
    dateDeDebutMax: DateAttribute & RequiredAttribute;
    urlDeCandidature: TextAttribute;
    teletravailPossible: BooleanAttribute;
    sourceCreatedAt: DateTimeAttribute & PrivateAttribute;
    sourceUpdatedAt: DateTimeAttribute;
    sourcePublishedAt: DateTimeAttribute & PrivateAttribute;
    remunerationBase: IntegerAttribute;
    employeur: ComponentAttribute<'employeur.employeur'>;
    domaines: ComponentAttribute<'domaine.domaine', true>;
    preRequis: ComponentAttribute<'competence.competence'>;
    dureeEnJour: IntegerAttribute &
      SetMinMax<{
        min: 0;
      }>;
    dureeEnJourMax: IntegerAttribute &
      SetMinMax<{
        min: 0;
      }>;
    localisation: ComponentAttribute<'localisation.localisation'>;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::offre-de-stage.offre-de-stage',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::offre-de-stage.offre-de-stage',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface ApiPolitiqueDeConfidentialitePolitiqueDeConfidentialite
  extends SingleTypeSchema {
  info: {
    singularName: 'politique-de-confidentialite';
    pluralName: 'politique-de-confidentialites';
    displayName: 'Politique de confidentialit\u00E9';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    titre: StringAttribute;
    contenu: RichTextAttribute;
    createdAt: DateTimeAttribute;
    updatedAt: DateTimeAttribute;
    publishedAt: DateTimeAttribute;
    createdBy: RelationAttribute<
      'api::politique-de-confidentialite.politique-de-confidentialite',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
    updatedBy: RelationAttribute<
      'api::politique-de-confidentialite.politique-de-confidentialite',
      'oneToOne',
      'admin::user'
    > &
      PrivateAttribute;
  };
}

export interface BilanEnergetiqueBilanEnergetique extends ComponentSchema {
  info: {
    displayName: 'Bilan Energetique';
  };
  attributes: {
    consommationEnergetique: StringAttribute;
    emissionDeGaz: StringAttribute;
  };
}

export interface CartesCarteLien extends ComponentSchema {
  info: {
    displayName: 'Carte lien';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    titre: StringAttribute & RequiredAttribute;
    contenu: TextAttribute & RequiredAttribute;
    banniere: MediaAttribute & RequiredAttribute;
    url: StringAttribute;
    article: RelationAttribute<
      'cartes.carte-lien',
      'oneToOne',
      'api::article.article'
    >;
    pourQui: RichTextAttribute;
  };
}

export interface CompetenceCompetence extends ComponentSchema {
  info: {
    displayName: 'Competence';
    icon: 'tasks';
    description: '';
  };
  attributes: {
    niveauEtude: EnumerationAttribute<
      ['PREBAC', 'BAC', 'BAC+1', 'BAC+2', 'BAC+3', 'BAC+4', 'BAC+5', 'n/a']
    >;
    profil: StringAttribute;
  };
}

export interface DomaineDomaine extends ComponentSchema {
  info: {
    displayName: 'Domaine';
    icon: 'certificate';
    description: '';
  };
  attributes: {
    nom: EnumerationAttribute<
      [
        'achats',
        'activit\u00E9s sociales et culturelles',
        'agriculture',
        'architecture / urbanisme / immobilier',
        'audit',
        'chimie / biologie / agronomie',
        'commerce',
        'communication',
        'community management',
        'comptabilit\u00E9 / contr\u00F4le de gestion',
        'conception / g\u00E9nie civil / g\u00E9nie industriel',
        'conseil',
        'design / UX / UI',
        'd\u00E9veloppement informatique',
        "direction d'entreprise",
        '\u00E9nergie / mat\u00E9riaux / m\u00E9canique / \u00E9lectronique',
        'enseignement',
        'environnement',
        '\u00E9v\u00E8nementiel',
        '\u00E9tudes / statistiques / data',
        'fiscalite / finance / assurance',
        'gestion de projet / produit',
        'graphisme / illustration',
        'infra / r\u00E9seaux / t\u00E9l\u00E9coms',
        'h\u00F4tellerie - restauration',
        'journalisme / rp / m\u00E9dias',
        'juridique',
        'logistique',
        'luxe / mode / textile',
        'marketing',
        'production / fabrication / exploitation',
        'qualit\u00E9 / maintenance',
        'rh / formation',
        'sant\u00E9 / services \u00E0 la personne',
        'secteur public',
        'relation client / support',
        'travaux / chantiers',
        'ventes',
        'non renseign\u00E9'
      ]
    >;
  };
}

export interface EmployeurEmployeur extends ComponentSchema {
  info: {
    displayName: 'Employeur';
    icon: 'business-time';
    description: '';
  };
  attributes: {
    nom: StringAttribute & RequiredAttribute;
    description: RichTextAttribute;
    logoUrl: StringAttribute;
    siteUrl: StringAttribute;
  };
}

export interface FicheMetierCentresDInteret extends ComponentSchema {
  info: {
    displayName: "Centres d'int\u00E9r\u00EAt";
    description: '';
  };
  attributes: {
    identifiant: StringAttribute;
    libelle: StringAttribute;
  };
}

export interface FicheMetierFormationsMinRequise extends ComponentSchema {
  info: {
    displayName: 'Formations min requise';
    description: '';
  };
  attributes: {
    identifiant: StringAttribute;
    libelle: StringAttribute;
  };
}

export interface FicheMetierNiveauAccesMinimal extends ComponentSchema {
  info: {
    displayName: 'Niveau acc\u00E8s minimal';
    description: '';
  };
  attributes: {
    libelle: StringAttribute;
    identifiant: StringAttribute;
  };
}

export interface FicheMetierSecteursDActivite extends ComponentSchema {
  info: {
    displayName: "Secteurs d'activit\u00E9";
    description: '';
  };
  attributes: {
    identifiant: StringAttribute;
    libelle: StringAttribute;
  };
}

export interface FicheMetierStatutsProfessionnels extends ComponentSchema {
  info: {
    displayName: 'Statuts professionnels';
    description: '';
  };
  attributes: {
    identifiant: StringAttribute;
    id_ideo1: StringAttribute;
    libelle: StringAttribute;
  };
}

export interface ImageUrlImageUrl extends ComponentSchema {
  info: {
    displayName: 'Image Url';
    description: '';
  };
  attributes: {
    value: StringAttribute & RequiredAttribute;
  };
}

export interface LocalisationLocalisation extends ComponentSchema {
  info: {
    displayName: 'Localisation';
    icon: 'search-location';
    description: '';
  };
  attributes: {
    latitude: FloatAttribute;
    longitude: FloatAttribute;
    ville: StringAttribute;
    adresse: TextAttribute;
    departement: StringAttribute;
    codePostal: StringAttribute;
    region: StringAttribute;
    pays: StringAttribute;
  };
}

export interface ServiceInclusServicesInclus extends ComponentSchema {
  info: {
    displayName: 'Service Inclus';
    description: '';
  };
  attributes: {
    nom: EnumerationAttribute<
      [
        'aspirateur',
        'fer \u00E0 repasser',
        'internet',
        'local \u00E0 v\u00E9lo',
        'machine \u00E0 laver',
        'micro-onde',
        'n\u00E9cessaire de nettoyage',
        'parking',
        'salle de bain privative',
        'salle de sport',
        't\u00E9l\u00E9vision',
        'non renseign\u00E9'
      ]
    >;
  };
}

export interface ServiceOptionnelServicesOptionnels extends ComponentSchema {
  info: {
    displayName: 'Service Optionnel';
    description: '';
  };
  attributes: {
    nom: EnumerationAttribute<
      [
        'aspirateur',
        'fer \u00E0 repasser',
        'internet',
        'local \u00E0 v\u00E9lo',
        'machine \u00E0 laver',
        'micro-onde',
        'n\u00E9cessaire de nettoyage',
        'salle de sport',
        't\u00E9l\u00E9vision',
        'non renseign\u00E9'
      ]
    >;
  };
}

declare global {
  namespace Strapi {
    interface Schemas {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::slugify.slug': PluginSlugifySlug;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::accessibilite.accessibilite': ApiAccessibiliteAccessibilite;
      'api::actualite.actualite': ApiActualiteActualite;
      'api::annonce-de-logement.annonce-de-logement': ApiAnnonceDeLogementAnnonceDeLogement;
      'api::article.article': ApiArticleArticle;
      'api::conditions-generales-d-utilisation.conditions-generales-d-utilisation': ApiConditionsGeneralesDUtilisationConditionsGeneralesDUtilisation;
      'api::contact-cej.contact-cej': ApiContactCejContactCej;
      'api::evenement.evenement': ApiEvenementEvenement;
      'api::fiche-metier.fiche-metier': ApiFicheMetierFicheMetier;
      'api::les-mesures-employeurs.les-mesures-employeurs': ApiLesMesuresEmployeursLesMesuresEmployeurs;
      'api::mention-legale.mention-legale': ApiMentionLegaleMentionLegale;
      'api::mesure-jeune.mesure-jeune': ApiMesureJeuneMesureJeune;
      'api::offre-de-stage.offre-de-stage': ApiOffreDeStageOffreDeStage;
      'api::politique-de-confidentialite.politique-de-confidentialite': ApiPolitiqueDeConfidentialitePolitiqueDeConfidentialite;
      'bilan-energetique.bilan-energetique': BilanEnergetiqueBilanEnergetique;
      'cartes.carte-lien': CartesCarteLien;
      'competence.competence': CompetenceCompetence;
      'domaine.domaine': DomaineDomaine;
      'employeur.employeur': EmployeurEmployeur;
      'fiche-metier.centres-d-interet': FicheMetierCentresDInteret;
      'fiche-metier.formations-min-requise': FicheMetierFormationsMinRequise;
      'fiche-metier.niveau-acces-minimal': FicheMetierNiveauAccesMinimal;
      'fiche-metier.secteurs-d-activite': FicheMetierSecteursDActivite;
      'fiche-metier.statuts-professionnels': FicheMetierStatutsProfessionnels;
      'image-url.image-url': ImageUrlImageUrl;
      'localisation.localisation': LocalisationLocalisation;
      'service-inclus.services-inclus': ServiceInclusServicesInclus;
      'service-optionnel.services-optionnels': ServiceOptionnelServicesOptionnels;
    }
  }
}
