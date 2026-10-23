# Mon parcours professionnel MMI – Sabrina MARTIN

Projet R3.12 – Développement front & intégration (BUT MMI).

## Ouvrir le site
Double-clique sur `index.html` (ou ouvre-le avec Live Server dans VS Code).

## Organisation
```
index.html          structure de la page (conteneurs vides)
css/style.css       mise en forme (couleurs du rapport, thème clair/sombre)
js/app.js           toutes les données + l'affichage en JavaScript
assets/images/      photos et visuels du stage
assets/documents/   catalogue Bernard Print (PDF)
```

## Modifier le contenu
Tout se passe dans `js/app.js`, partie « 1. DONNÉES » :
- `stage` : l'objet qui décrit le stage
- `missions` : le tableau des missions (titre, categorie, description, outils…)
- `realisations` : la galerie. Pour ajouter une réalisation, copie un bloc `{ … }`,
  change les textes et place les images dans `assets/images/`.
- `outils`, `bilan`, `alternance` : les autres rubriques

## Icônes des logiciels
Place les icônes officielles dans `assets/images/icones/` avec ces noms exacts :
`canva.png`, `photoshop.png`, `navlab.png`.
Tant qu'un fichier manque, les initiales (Ca, Ps, Nv) s'affichent à la place.

## Défis de la séance 1
Ouvre la console (F12) : la liste « mission - catégorie » et le nombre de missions s'affichent.
