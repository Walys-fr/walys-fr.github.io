# Site Walys

Site vitrine de Walys — Admin · RH · Numérique · Apps Apple.
Hébergé gratuitement sur GitHub Pages, modifiable sans code avec **Pages CMS**.
Aucun cookie, aucune statistique, aucune ressource externe.

---

## ✏️ Modifier le site (au quotidien)

1. Allez sur **https://app.pagescms.org** et connectez-vous avec votre compte GitHub.
2. Ouvrez votre dépôt. Le menu de gauche affiche :
   - **⚙️ Réglages généraux** — e-mail, logo, signature, engagements
   - **🏠 Page d'accueil** — tous les textes de l'accueil
   - **💼 Services** — une fiche par service
   - **📱 Apps** — une fiche par app (présentation, support, confidentialité, icône, captures)
   - **🔒 Politique de confidentialité** et **⚖️ Mentions légales**
3. Modifiez les cases, puis cliquez sur **Save** (Enregistrer).
4. Le site se met à jour tout seul en 1 à 2 minutes.

**Ajouter une app** : *📱 Apps* › bouton d'ajout › remplissez la fiche › *Save*.
Elle apparaît automatiquement sur l'accueil, le catalogue, la page Numérique et le pied de page.

**Ajouter un service** : même principe dans *💼 Services*.

**Quand une app sort sur l'App Store** : dans sa fiche, passez le *Statut* à « Disponible »
et collez le lien dans *Lien App Store*. Le bouton « Télécharger » apparaît partout.

---

## 🍏 Adresses à donner à App Store Connect

Chaque app a une seule page, avec trois onglets. Remplacez `PSEUDO` par votre nom d'utilisateur GitHub
(et ajoutez `/nom-du-depot` après `.github.io` si le dépôt ne s'appelle pas `PSEUDO.github.io`).

| App            | Support URL                                         | Privacy Policy URL                                         |
|----------------|-----------------------------------------------------|------------------------------------------------------------|
| Envelopp€      | `https://PSEUDO.github.io/apps/enveloppe/#support`      | `https://PSEUDO.github.io/apps/enveloppe/#confidentialite`      |
| PraticienKit   | `https://PSEUDO.github.io/apps/praticienkit/#support`   | `https://PSEUDO.github.io/apps/praticienkit/#confidentialite`   |
| Walys Gestion  | `https://PSEUDO.github.io/apps/walys-gestion/#support`  | `https://PSEUDO.github.io/apps/walys-gestion/#confidentialite`  |

Pour une nouvelle app, l'adresse est `…/apps/` suivie du nom de l'app en minuscules, sans accent ni espace
(les espaces deviennent des tirets). Vérifiez-la en ouvrant la fiche sur le site.

---

## 🎨 Icônes et captures d'écran

- **Icône** : image carrée 1024 × 1024, **sans coins arrondis** (le site les arrondit).
  Dans Xcode : *Assets* › *AppIcon* › clic droit sur l'image 1024 › *Show in Finder*.
  Les icônes actuelles sont **provisoires** : remplacez-les dans la fiche de chaque app.
- **Captures** : déposez-les dans le champ *Captures d'écran* de la fiche (jusqu'à 8).
  Les captures préparées pour l'App Store conviennent parfaitement.

---

## 📁 Organisation (pour information)

```
├── _data/            ← Textes de l'accueil et réglages        (modifiés par Pages CMS)
├── _services/        ← Une fiche par service                  (modifiés par Pages CMS)
├── _apps/            ← Une fiche par app                      (modifiés par Pages CMS)
├── confidentialite.md, mentions-legales.md                    (modifiés par Pages CMS)
├── assets/images/    ← Icônes, captures, images téléversées   (modifiés par Pages CMS)
├── assets/logos/     ← Logo Walys
├── _layouts/         ← Mise en page (ne pas modifier)
├── assets/css, assets/js, index.html, apps/index.html, 404.html (ne pas modifier)
├── _config.yml       ← Configuration de GitHub Pages (ne pas modifier)
└── .pages.yml        ← Configuration des formulaires Pages CMS (ne pas modifier)
```
