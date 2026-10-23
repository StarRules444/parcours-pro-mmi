# Mon parcours professionnel MMI – Sabrina MARTIN

Portail professionnel réalisé dans le cadre de la ressource **R3.12 – Développement front & intégration** (BUT MMI).
Il présente mes compétences MMI, cinq études de cas du BUT1 au BUT3, ma frise de parcours, mon stage de BUT1 chez Bernard Print et ma projection professionnelle.

- **Dépôt GitHub** : _à compléter_ (ex. `https://github.com/<mon-compte>/parcours-pro-mmi`)
- **Site publié (Netlify)** : _à compléter_ (ex. `https://parcours-pro-sabrina-martin.netlify.app`)

## Installation

Aucune installation ni dépendance : c'est un site statique en HTML, CSS et JavaScript.

1. Cloner le dépôt : `git clone <url-du-dépôt>`
2. Ouvrir `index.html` dans un navigateur (ou avec l'extension Live Server de VS Code).

### Mise en ligne sur Netlify

- **Méthode simple** : sur app.netlify.com, « Add new site » → « Deploy manually », puis glisser-déposer le dossier du projet.
- **Méthode liée à GitHub** : « Add new site » → « Import an existing project » → choisir le dépôt. Pas de commande de build, dossier de publication : la racine (`/`). Chaque `git push` met le site à jour.

## Structure

```
index.html            structure HTML sémantique (sections, nav, dialogues)
css/style.css         mise en forme : variables, thème clair / sombre, responsive
js/donnees.js         DONNÉES : compétences, projets, jalons, stage, projection, crédits
js/traitements.js     TRAITEMENTS : filtrer, trier, chercher (aucun accès au HTML)
js/affichage.js       AFFICHAGE : fonctions qui génèrent le HTML à partir des données
js/app.js             LANCEMENT : état de la page et gestion des événements
assets/images/        visuels des projets, photo, motif de fond, icônes des logiciels
assets/videos/        réel Carré Tropical (MP4 compressé)
assets/documents/     catalogue Bernard Print (PDF)
```

Les scripts sont chargés dans cet ordre : `donnees.js` → `traitements.js` → `affichage.js` → `app.js`.

## Fonctionnalités

| Module | Ce qu'on peut faire |
|---|---|
| Compétences | Choisir l'une des 5 compétences MMI (onglets, flèches du clavier) pour afficher ma justification et mes preuves, avec un lien vers chaque étude de cas et un bouton qui filtre les projets. |
| Projets et réalisations | Cartes générées depuis le tableau `projets`. Filtres par **année**, **compétence**, **type** et **outil**, nombre de résultats, état « Aucun projet correspondant » et bouton de réinitialisation. Chaque carte ouvre l'étude de cas complète (contexte, objectif, rôle, démarche, résultat, difficultés, retour critique). |
| Parcours | Frise de 7 étapes datées (BUT1 → BUT3), triée en JavaScript. Navigation à la souris, au clavier (flèches, Début, Fin) ou avec les boutons précédent / suivant. Horizontale sur ordinateur, verticale sur mobile. |
| Stage de BUT1 | Fiche entreprise, missions filtrables par catégorie, réalisations visibles dans le détail de chaque mission, outils, bilan. |
| Projection | Métier visé, acquis, écarts et actions datées sur 6 à 12 mois. |
| Contact et transparence | Adresse e-mail (lien + bouton copier), crédits, sources, droits et confidentialité. |

Défis de la séance 1 : la console (F12) affiche chaque mission avec sa catégorie et le nombre de missions.

## Accessibilité et tests

- Balises sémantiques (`header`, `nav`, `main`, `section`, `article`, `address`, `footer`, `dialog`), titres hiérarchisés.
- Lien « Aller au contenu », focus visible sur tous les éléments, navigation complète au clavier, fenêtres fermables avec Échap (le focus revient sur le bouton d'origine).
- Textes alternatifs sur les images ; vidéo avec contrôles et description.
- Contrastes vérifiés (texte courant et texte accentué au-dessus de 4,5:1).
- Testé à **375 px**, **768 px** et **1280 px** de large, en thème clair et sombre : aucun défilement horizontal, aucun contenu masqué.

## Limites

- Les filtres ne sont pas conservés dans l'adresse de la page : un rechargement les réinitialise.
- Les polices viennent de Google Fonts : sans connexion, des polices de secours s'affichent.
- La vidéo (environ 5 Mo) peut être lente à charger sur une petite connexion.
- Le projet Petit Sauveteur n'a pas encore de visuel.
- Les icônes des logiciels doivent être placées dans `assets/images/icones/` (`canva.png`, `photoshop.png`, `navlab.png`) ; sinon les initiales s'affichent.
- Contenu à mettre à jour quand mon alternance de BUT3 commencera.

## Crédits et droits

- Textes, visuels et vidéos : Sabrina MARTIN, sauf mention contraire.
- Visuels Bernard Print et vidéo Carré Tropical publiés avec l'autorisation des entreprises.
- Bouj Dous : projet de groupe de SAÉ ; mes camarades sont cités par leur rôle, sans leur nom.
- Polices Playfair Display, League Spartan et Jost (SIL Open Font License).
- Développement réalisé avec l'aide d'un assistant IA (Claude, d'Anthropic) ; contenus relus et validés par moi.
