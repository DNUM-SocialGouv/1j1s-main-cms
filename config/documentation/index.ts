export default {
  enabled: true,
  config: {
    "openapi": "3.0.0",
    "info": {
      "version": "1.0.0",
      "title": "Gestionnaire de stage 1 jeune 1 solution",
      "description": "Gestionnaire de contenu et de concatenation de stages 1 jeune 1 solution",
      "termsOfService": "YOUR_TERMS_OF_SERVICE_URL",
      "contact": {
        "name": "l'équipe",
        "email": "OCTO.1j1s@accenture.com",
        "url": "https://www.1jeune1solution.gouv.fr/",
      },
      "license": {
        "name": "MIT",
        'url': "https://github.com/DNUM-SocialGouv/1j1s-stage-orchestrateur-transform-load/blob/main/LICENSE",
      },
    },
    "x-strapi-config": {
      "path": "/documentation",
      "showGeneratedFiles": true,
      "generateDefaultResponse": true,
      "plugins": [
        "email",
        "upload",
        "users-permissions",
      ],
    },
    "servers": [
      {
        "url": "http://localhost/api",
        "description": "Local Server"
      },
      {
        "description": "Integration Server",
        "url": "https://1j1s-stage-content-manager.osc-fr1.scalingo.io/api"
      },
      {
        "description": "Production Server",
        "url": "https://1j1s-stage-content-manager-prod.osc-fr1.scalingo.io/api"
      }
    ],
  },
};
