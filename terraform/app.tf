module "main_cms_app" {
  source  = "scalingo-community/app/scalingo"
  version = "0.3.2"

  stack = "scalingo-22"

  name = var.nom_de_l_application

  containers = {
    web = {
      size   = terraform.workspace == "production" ? "L" : "L"
      amount = terraform.workspace == "production" ? 2 : 1
      autoscaler = terraform.workspace == "production" ? {
        min_containers = 2
        max_containers = 4
        metric         = "cpu"
        target         = 0.8
      } : null
    }
  }

  github_integration = {
    repo_url            = "https://github.com/DNUM-SocialGouv/1j1s-main-cms"
    branch              = var.branche_git
    auto_deploy_enabled = (terraform.workspace == "default") ? true : false
  }

  environment = local.envs_du_fichier_env

  addons = [
    {
      provider          = "postgresql"
      plan              = terraform.workspace == "production" ? "postgresql-business-1024" : "postgresql-starter-1024"
      database_features = []
    }
  ]

  domain      = var.nom_de_domaine
  router_logs = true

  log_drains = (var.logstash_uri != null) ? [
    {
      type = "elk"
      url  = sensitive(var.logstash_uri)
    }
  ] : null
}
