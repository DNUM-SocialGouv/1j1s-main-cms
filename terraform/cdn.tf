data "cloudflare_zone" "zone" {
  account_id = "6150db30a41adef4af3b396df6c4b315"
  name       = "1jeune1solution.gouv.fr"
}

resource "cloudflare_record" "domaine" {
  for_each = toset(var.nom_de_domaine != null ? [var.nom_de_domaine] : [])

  zone_id = data.cloudflare_zone.zone.id
  name    = trimsuffix(var.nom_de_domaine, ".1jeune1solution.gouv.fr")
  value   = module.main_cms_app.origin_domain
  type    = "CNAME"
  ttl     = 1
  proxied = contains(["default", "production"], terraform.workspace) ? true : false
  tags    = ["managed-by:terraform", "app:main-cms", "env:${local.nom_environnement}"]
}
