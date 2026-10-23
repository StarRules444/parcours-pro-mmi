/* ==========================================================
   MON PARCOURS PROFESSIONNEL MMI — Sabrina MARTIN
   R3.12 Développement front & intégration

   Toutes les informations du site sont rangées ici, dans des
   objets et des tableaux. Le HTML ne contient que des
   conteneurs vides que les fonctions plus bas remplissent.

   Plan du fichier :
     1. Données (stage, missions, réalisations, outils, bilan, alternance)
     2. Petites fonctions utiles
     3. Affichage de chaque rubrique
     4. Défis de la séance 1 (console)
     5. Lancement
   ========================================================== */


/* ----------------------------------------------------------
   1. DONNÉES
   ---------------------------------------------------------- */

// Activité 4 — l'objet stage
const stage = {
  entreprise: "Bernard Print",
  secteur: "Imprimerie – impression et personnalisation",
  lieu: "Les Abymes, Guadeloupe",
  adresse: "Centre commercial de Boisripeau",
  periode: "Juin 2025",
  poste: "Stagiaire BUT MMI (1re année)",
  service: "Atelier d'impression et accueil de la boutique",
  missionPrincipale:
    "participer à la création des maquettes, à l'impression et à la remise des commandes personnalisées des clients.",
  presentation:
    "Bernard Print est une imprimerie moderne qui accompagne ses clients dans la conception et la personnalisation de supports de communication. Elle crée des produits uniques sur mesure, aussi bien pour les particuliers que pour les professionnels.",
  activites: [
    "Impression sur textile (t-shirts, serviettes…)",
    "Personnalisation d'objets (tasses, porte-clés, badges…)",
    "Création de maquettes graphiques",
    "Impression de supports papier (cartes de visite, flyers, affiches…)"
  ]
};

// Activité 5 — le tableau des missions (au moins 5 missions réelles)
const missions = [
  {
    titre: "Création du catalogue de l'entreprise",
    categorie: "Création graphique",
    dates: ["4 juin"],
    description:
      "Conception d'un catalogue qui présente les produits et les personnalisations proposés par Bernard Print, partagé en ligne grâce à un QR code.",
    outils: ["Canva"],
    competences: ["Mise en page", "Créativité"],
    difficultes: "Présenter beaucoup de produits différents de façon claire et lisible.",
    resultats: "Un catalogue consultable en ligne par les clients."
  },
  {
    titre: "Maquettes de tasses personnalisées",
    categorie: "Création graphique",
    dates: ["10 juin", "11 juin", "16 juin"],
    description:
      "Création de visuels pour des tasses à partir des demandes des clients, dont un modèle spécial fête des pères.",
    outils: ["Canva", "Adobe Photoshop"],
    competences: ["Création graphique", "Écoute du client"],
    difficultes: "Respecter la demande du client tout en adaptant le visuel à la forme de la tasse.",
    resultats: "Maquettes validées puis imprimées sur tasse."
  },
  {
    titre: "Maquettes de cartes d'anniversaire et de porte-clé",
    categorie: "Création graphique",
    dates: ["10 juin", "11 juin"],
    description:
      "Conception de cartes d'anniversaire et d'un porte-clé personnalisé selon les envies des clients.",
    outils: ["Canva", "Adobe Photoshop"],
    competences: ["Création graphique", "Mise en page"],
    difficultes: "Travailler sur de petits formats où chaque détail compte.",
    resultats: "Visuels prêts à être imprimés."
  },
  {
    titre: "Impression sur t-shirts et serviettes",
    categorie: "Impression",
    dates: ["4 juin", "6 juin"],
    description:
      "Impression des visuels des clients sur textile : préparation du visuel, placement sur le support puis pressage.",
    outils: ["NAVLAB", "Presse à chaud"],
    competences: ["Techniques d'impression textile", "Rigueur"],
    difficultes: "Bien centrer et aligner le visuel : une erreur fait perdre du temps et du matériel.",
    resultats: "Textiles personnalisés remis aux clients."
  },
  {
    titre: "Impression sur tasses",
    categorie: "Impression",
    dates: ["11 juin"],
    description: "Impression des maquettes validées sur des tasses personnalisées.",
    outils: ["Presse à tasse"],
    competences: ["Techniques d'impression sur objet", "Précision"],
    difficultes: "Obtenir des couleurs fidèles à la maquette.",
    resultats: "Tasses personnalisées prêtes pour les clients."
  },
  {
    titre: "Découpe et finition",
    categorie: "Façonnage",
    dates: ["6 juin", "10 juin", "16 juin"],
    description:
      "Découpage de flyers, de cartes de visite et de cartes servant à fabriquer des badges.",
    outils: ["Matériel de découpe"],
    competences: ["Précision", "Soin de la finition"],
    difficultes: "Garder une découpe nette et régulière sur de grandes quantités.",
    resultats: "Supports finis, prêts à être remis."
  },
  {
    titre: "Accueil des clients et caisse",
    categorie: "Relation client",
    dates: ["4 juin", "périodes calmes"],
    description:
      "Accueil, orientation et encaissement des clients, remise et récupération des commandes, petites impressions A4 à la demande.",
    outils: ["Caisse", "Imprimante"],
    competences: ["Aisance relationnelle", "Service client"],
    difficultes: "Passer rapidement d'une tâche d'atelier à l'accueil d'un client.",
    resultats: "Des clients orientés et des commandes remises dans les temps."
  },
  {
    titre: "Teintage de vitres",
    categorie: "Autres prestations",
    dates: ["6 juin"],
    description: "Teintage des vitres d'une cliente de la galerie commerciale.",
    outils: ["Film teinté"],
    competences: ["Polyvalence", "Minutie"],
    difficultes: "Une mission très différente de l'impression, à découvrir sur le moment.",
    resultats: "Prestation réalisée pour une cliente voisine."
  }
];

// Mes réalisations — pour en ajouter une, copie un bloc { … },
// change les textes et place les images dans assets/images/
// (images : la première sert de vignette, les autres s'affichent
// dans la visionneuse)
const realisations = [
  {
    titre: "Catalogue Bernard Print",
    type: "Document",
    description:
      "Catalogue de 12 pages qui présente toute l'offre de l'imprimerie : impression numérique, imagerie, gravure laser et personnalisation d'objets.",
    images: ["assets/images/catalogue-couverture.jpg"],
    outils: ["Canva"],
    document: "assets/documents/catalogue-bernard-print.pdf",
    vedette: true
  },
  {
    titre: "Flyer « Point d'accueil numérique »",
    type: "Affiche",
    description:
      "Flyer qui présente les services d'accompagnement numérique et les autres services de la boutique. Il a aussi été utilisé dans les bureaux de la police municipale.",
    images: ["assets/images/flyer-point-accueil.jpg"],
    outils: ["Canva"]
  },
  {
    titre: "Affiche « En mémoire de… »",
    type: "Affiche",
    description:
      "Affiche qui présente les t-shirts personnalisés et les ardoises mortuaires pour rendre hommage à un proche.",
    images: ["assets/images/affiche-en-memoire.jpg"],
    outils: ["Canva"]
  },
  {
    titre: "Tasse fête des pères « Le Terrier des Lapinous »",
    type: "Maquette",
    description:
      "Visuel d'une tasse spéciale fête des pères : une photo encadrée avec « Le Terrier des Lapinous » d'un côté, un cœur « Bonne fête » de l'autre.",
    images: ["assets/images/tasse-fete-des-peres.jpg"],
    outils: ["Canva", "Adobe Photoshop"]
  },
  {
    titre: "Cartes d'invitation – 70 ans",
    type: "Maquette",
    description:
      "Invitations pour un déjeuner d'anniversaire : une carte « Happy Birthday » avec emplacement photo et texte d'invitation, et une carte florale « Anniversaire 70 ans ».",
    images: [
      "assets/images/invitation-happy-birthday.jpg",
      "assets/images/invitation-70-ans.jpg"
    ],
    outils: ["Canva"]
  }
];

// Mes outils (logiciels)
// icone : le fichier à placer dans assets/images/icones/
// Si l'image est absente, les initiales s'affichent à la place.
const outils = [
  {
    nom: "Canva",
    initiale: "Ca",
    icone: "assets/images/icones/canva.png",
    utilisation: "Création du catalogue, des affiches et des maquettes (tasses, cartes d'invitation)."
  },
  {
    nom: "Adobe Photoshop",
    initiale: "Ps",
    icone: "assets/images/icones/photoshop.png",
    utilisation: "Retouche des visuels et préparation des fichiers avant impression."
  },
  {
    nom: "NAVLAB",
    initiale: "Nv",
    icone: "assets/images/icones/navlab.png",
    utilisation: "Impression des visuels sur les t-shirts."
  }
];

// Matériel découvert à l'atelier
const materiel = ["Presse à chaud", "Presse à tasse", "Machines d'impression", "Matériel de découpe", "Caisse"];

// Mon bilan
const bilan = {
  appris:
    "Le fonctionnement d'une imprimerie au quotidien et les étapes pour obtenir un rendu de qualité. Le métier demande à la fois de la créativité, de la rigueur et un bon contact avec le client.",
  difficulte:
    "Certaines journées étaient très chargées, d'autres très calmes, avec peu de tâches.",
  solution:
    "J'ai profité des moments calmes pour observer l'organisation interne : la gestion des commandes et la façon dont l'équipe s'adapte à l'affluence.",
  autonomie: 3, // de 1 à 5
  autonomieTexte:
    "Les logiciels et les machines, je les ai utilisés de manière encadrée par mon tuteur. J'ai gagné en autonomie sur l'accueil, la remise des commandes et les petites impressions.",
  fierte:
    "Le catalogue de l'entreprise : un vrai support utilisé par Bernard Print et partagé à ses clients.",
  approfondir:
    "La création graphique et la préparation des fichiers pour l'impression, pour aller vers le métier de graphiste.",
  competences: {
    "Techniques": [
      "Techniques d'impression (textile, papier, objets)",
      "Découpe et finition",
      "Création de maquettes",
      "Logiciels de création et de mise en page"
    ],
    "Organisation": ["Gestion du temps", "Polyvalence", "Rigueur et précision"],
    "Relationnel": ["Accueil et conseil client", "Travail en équipe", "Suivi et satisfaction client"]
  }
};

// Ma préparation à l'alternance
const alternance = [
  {
    titre: "Domaines visés",
    elements: ["Communication visuelle", "Création graphique", "Direction artistique"]
  },
  {
    titre: "Missions souhaitées",
    elements: [
      "Créer des visuels print et réseaux sociaux",
      "Concevoir des identités visuelles",
      "Préparer des fichiers pour l'impression"
    ]
  },
  {
    titre: "Outils à mieux maîtriser",
    elements: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma"]
  },
  {
    titre: "Compétences à développer",
    elements: [
      "Préparation des fichiers d'impression (CMJN, fonds perdus)",
      "HTML, CSS et JavaScript"
    ]
  }
];


/* ----------------------------------------------------------
   2. PETITES FONCTIONS UTILES
   ---------------------------------------------------------- */

// Crée un élément HTML avec une classe et un texte (le texte est
// inséré avec textContent : aucun risque d'injecter du HTML)
function creer(balise, classe, texte) {
  const element = document.createElement(balise);
  if (classe) element.className = classe;
  if (texte !== undefined) element.textContent = texte;
  return element;
}

// Remplit une liste <ul> avec un tableau de textes
function remplirListe(ul, tableau, classeItem) {
  ul.innerHTML = "";
  tableau.forEach(function (texte) {
    ul.appendChild(creer("li", classeItem, texte));
  });
}

// Crée une rangée d'étiquettes (outils, compétences…)
function creerTags(tableau) {
  const ul = creer("ul", "tags");
  remplirListe(ul, tableau);
  return ul;
}

// Accorde « mission » au pluriel si besoin
function pluriel(nombre, mot) {
  return nombre + " " + mot + (nombre > 1 ? "s" : "");
}


/* ----------------------------------------------------------
   3. AFFICHAGE DE CHAQUE RUBRIQUE
   ---------------------------------------------------------- */

function afficherAccueil() {
  document.getElementById("hero-periode").textContent = stage.periode;
  document.getElementById("hero-intro").textContent =
    "Sabrina MARTIN. Retour sur mon stage chez " + stage.entreprise +
    ", imprimerie aux Abymes, et ce que j'en retiens pour mon alternance.";

  // Quelques chiffres calculés à partir des données
  const nbCategories = listerCategories().length;
  const chiffres = [
    { valeur: missions.length, label: "missions" },
    { valeur: realisations.length, label: "réalisations" },
    { valeur: outils.length, label: "logiciels" },
    { valeur: nbCategories, label: "catégories" }
  ];
  const ul = document.getElementById("hero-chiffres");
  chiffres.forEach(function (c) {
    const li = creer("li");
    li.appendChild(creer("strong", "", c.valeur));
    li.appendChild(creer("span", "", c.label));
    ul.appendChild(li);
  });
}

function afficherStage() {
  const fiche = document.getElementById("fiche-stage");
  const lignes = [
    ["Entreprise", stage.entreprise],
    ["Secteur", stage.secteur],
    ["Lieu", stage.lieu + " – " + stage.adresse],
    ["Période", stage.periode],
    ["Poste", stage.poste],
    ["Équipe", stage.service]
  ];
  lignes.forEach(function (ligne) {
    const div = creer("div", "fiche__ligne");
    div.appendChild(creer("dt", "", ligne[0]));
    div.appendChild(creer("dd", "", ligne[1]));
    fiche.appendChild(div);
  });

  document.getElementById("stage-presentation").textContent = stage.presentation;
  document.getElementById("stage-mission").textContent = stage.missionPrincipale;
  remplirListe(document.getElementById("stage-activites"), stage.activites);
}

// Renvoie la liste des catégories sans doublon
function listerCategories() {
  const categories = [];
  missions.forEach(function (mission) {
    if (!categories.includes(mission.categorie)) categories.push(mission.categorie);
  });
  return categories;
}

// Affiche les boutons de filtre (Toutes + une par catégorie)
function afficherFiltres() {
  const zone = document.getElementById("filtres-missions");
  const choix = ["Toutes"].concat(listerCategories());

  choix.forEach(function (categorie) {
    const bouton = creer("button", "filtre", categorie);
    bouton.type = "button";
    bouton.dataset.categorie = categorie;
    bouton.setAttribute("aria-pressed", categorie === "Toutes" ? "true" : "false");

    // Événement : au clic, on filtre les missions
    bouton.addEventListener("click", function () {
      zone.querySelectorAll(".filtre").forEach(function (b) {
        b.setAttribute("aria-pressed", "false");
      });
      bouton.setAttribute("aria-pressed", "true");
      afficherMissions(categorie);
    });

    zone.appendChild(bouton);
  });
}

// Affiche les missions (toutes, ou seulement une catégorie)
function afficherMissions(categorieChoisie) {
  const liste = document.getElementById("liste-missions");
  liste.innerHTML = "";

  const missionsAffichees = missions.filter(function (mission) {
    return categorieChoisie === "Toutes" || mission.categorie === categorieChoisie;
  });

  missionsAffichees.forEach(function (mission) {
    const li = creer("li", "mission");
    li.dataset.categorie = mission.categorie;

    const entete = creer("div", "mission__entete");
    entete.appendChild(creer("span", "pill", mission.categorie));
    entete.appendChild(creer("span", "mission__dates", mission.dates.join(" · ")));
    li.appendChild(entete);

    li.appendChild(creer("h3", "mission__titre", mission.titre));
    li.appendChild(creer("p", "mission__description", mission.description));
    li.appendChild(creerTags(mission.outils));

    // Détails repliables : compétences, difficultés, résultats
    const details = creer("details", "mission__details");
    details.appendChild(creer("summary", "", "Compétences, difficultés, résultats"));
    const dl = creer("dl");
    [
      ["Compétences", mission.competences.join(", ")],
      ["Difficultés", mission.difficultes],
      ["Résultats", mission.resultats]
    ].forEach(function (ligne) {
      dl.appendChild(creer("dt", "", ligne[0]));
      dl.appendChild(creer("dd", "", ligne[1]));
    });
    details.appendChild(dl);
    li.appendChild(details);

    liste.appendChild(li);
  });

  // Défi n°2, mais affiché sur la page
  const compteur = document.getElementById("compteur-missions");
  if (categorieChoisie === "Toutes") {
    compteur.textContent = pluriel(missions.length, "mission") + " réalisées";
  } else {
    compteur.textContent = missionsAffichees.length + " sur " + missions.length + " · " + categorieChoisie;
  }
}

function afficherRealisations() {
  const galerie = document.getElementById("galerie");
  galerie.innerHTML = "";
  realisations.forEach(function (r) {
    galerie.appendChild(creerCarteRealisation(r));
  });
}

function creerCarteRealisation(r) {
  const carte = creer("article", "realisation");
  if (r.vedette) carte.classList.add("realisation--vedette");

  // Vignette cliquable (première image)
  const cadre = creer("button", "realisation__cadre");
  cadre.type = "button";
  cadre.setAttribute("aria-label", "Agrandir : " + r.titre);
  const img = creer("img");
  img.src = r.images[0];
  img.alt = r.titre;
  cadre.appendChild(img);
  if (r.images.length > 1) {
    cadre.appendChild(creer("span", "realisation__nb", r.images.length + " visuels"));
  }
  cadre.addEventListener("click", function () {
    ouvrirVisionneuse(r);
  });
  carte.appendChild(cadre);

  const corps = creer("div", "realisation__corps");
  corps.appendChild(creer("span", "pill", r.type));
  corps.appendChild(creer("h3", "", r.titre));
  corps.appendChild(creer("p", "", r.description));
  if (r.outils.length > 0) corps.appendChild(creerTags(r.outils));

  // Lien vers un document PDF (ex. : le catalogue)
  if (r.document) {
    const lien = creer("a", "bouton bouton--petit", "Voir le catalogue (PDF)");
    lien.href = r.document;
    lien.target = "_blank";
    lien.rel = "noopener";
    corps.appendChild(lien);
  }

  carte.appendChild(corps);
  return carte;
}

// Visionneuse : affiche une image en grand + les miniatures s'il y en a plusieurs
function ouvrirVisionneuse(r) {
  const visionneuse = document.getElementById("visionneuse");
  if (typeof visionneuse.showModal !== "function") return;

  const grande = document.getElementById("visionneuse-image");
  grande.src = r.images[0];
  grande.alt = r.titre;
  document.getElementById("visionneuse-type").textContent = r.type;
  document.getElementById("visionneuse-titre").textContent = r.titre;
  document.getElementById("visionneuse-description").textContent = r.description;

  const miniatures = document.getElementById("visionneuse-miniatures");
  miniatures.innerHTML = "";
  if (r.images.length > 1) {
    r.images.forEach(function (source, i) {
      const bouton = creer("button", "miniature");
      bouton.type = "button";
      bouton.setAttribute("aria-label", "Visuel " + (i + 1));
      bouton.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      const mini = creer("img");
      mini.src = source;
      mini.alt = "";
      bouton.appendChild(mini);
      bouton.addEventListener("click", function () {
        grande.src = source;
        miniatures.querySelectorAll(".miniature").forEach(function (b) {
          b.setAttribute("aria-pressed", "false");
        });
        bouton.setAttribute("aria-pressed", "true");
      });
      miniatures.appendChild(bouton);
    });
  }

  visionneuse.showModal();
}

function preparerVisionneuse() {
  const visionneuse = document.getElementById("visionneuse");
  document.getElementById("visionneuse-fermer").addEventListener("click", function () {
    visionneuse.close();
  });
  // Clic en dehors de l'image = fermeture
  visionneuse.addEventListener("click", function (e) {
    if (e.target === visionneuse) visionneuse.close();
  });
}

function afficherOutils() {
  const zone = document.getElementById("liste-outils");
  outils.forEach(function (outil) {
    const carte = creer("article", "outil");

    // Icône de l'application ; si le fichier manque, on garde les initiales
    const logo = creer("span", "outil__logo", outil.initiale);
    const icone = creer("img", "outil__icone");
    icone.src = outil.icone;
    icone.alt = "";
    icone.addEventListener("load", function () {
      logo.textContent = "";
      logo.classList.add("outil__logo--image");
      logo.appendChild(icone);
    });
    carte.appendChild(logo);

    const texte = creer("div");
    texte.appendChild(creer("h3", "", outil.nom));
    texte.appendChild(creer("p", "", outil.utilisation));
    carte.appendChild(texte);
    zone.appendChild(carte);
  });
  remplirListe(document.getElementById("liste-materiel"), materiel);
}

function afficherBilan() {
  const zone = document.getElementById("bilan-contenu");

  const blocs = [
    { titre: "Ce que j'ai appris", texte: bilan.appris },
    { titre: "Une difficulté", texte: bilan.difficulte, suite: "Comment je l'ai gérée : " + bilan.solution },
    { titre: "Mon niveau d'autonomie", texte: bilan.autonomieTexte, jauge: bilan.autonomie },
    { titre: "La réalisation dont je suis la plus fière", texte: bilan.fierte },
    { titre: "Ce que je souhaite approfondir", texte: bilan.approfondir }
  ];

  blocs.forEach(function (bloc) {
    const article = creer("article", "bilan__bloc");
    article.appendChild(creer("h3", "", bloc.titre));

    if (bloc.jauge) {
      const jauge = creer("div", "jauge");
      jauge.setAttribute("role", "img");
      jauge.setAttribute("aria-label", "Autonomie : " + bloc.jauge + " sur 5");
      for (let i = 1; i <= 5; i++) {
        jauge.appendChild(creer("span", i <= bloc.jauge ? "jauge__point jauge__point--plein" : "jauge__point"));
      }
      jauge.appendChild(creer("span", "jauge__valeur", bloc.jauge + "/5"));
      article.appendChild(jauge);
    }

    article.appendChild(creer("p", "", bloc.texte));
    if (bloc.suite) article.appendChild(creer("p", "bilan__suite", bloc.suite));
    zone.appendChild(article);
  });

  // Compétences : on parcourt l'objet avec Object.keys
  const competences = document.getElementById("competences");
  Object.keys(bilan.competences).forEach(function (famille) {
    const colonne = creer("div", "competences__famille");
    colonne.appendChild(creer("h4", "", famille));
    const ul = creer("ul", "liste-puces");
    remplirListe(ul, bilan.competences[famille]);
    colonne.appendChild(ul);
    competences.appendChild(colonne);
  });
}

function afficherAlternance() {
  const zone = document.getElementById("alternance-contenu");
  alternance.forEach(function (bloc) {
    const article = creer("article", "alternance__bloc");
    article.appendChild(creer("h3", "", bloc.titre));
    const ul = creer("ul", "liste-puces");
    remplirListe(ul, bloc.elements);
    article.appendChild(ul);
    zone.appendChild(article);
  });
}

function afficherPied() {
  document.getElementById("pied-texte").textContent =
    "Un grand merci à toute l'équipe de " + stage.entreprise +
    " et à mon tuteur de stage pour leur accueil et leur accompagnement.";
}


/* ----------------------------------------------------------
   4. DÉFIS DE LA SÉANCE 1 (ouvre la console : F12)
   ---------------------------------------------------------- */

function defisConsole() {
  console.log("=== " + stage.entreprise + " · " + stage.periode + " ===");

  // Défi n°1 : nom et catégorie de chaque mission
  missions.forEach(function (mission) {
    console.log(mission.titre + " - " + mission.categorie);
  });

  // Défi n°2 : nombre de missions réalisées
  console.log(missions.length + " missions réalisées");
}


/* ----------------------------------------------------------
   5. LANCEMENT
   ---------------------------------------------------------- */

afficherAccueil();
afficherStage();
afficherFiltres();
afficherMissions("Toutes");
afficherRealisations();
preparerVisionneuse();
afficherOutils();
afficherBilan();
afficherAlternance();
afficherPied();
defisConsole();
