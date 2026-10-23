/* ==========================================================
   DONNÉES — Mon parcours professionnel MMI (Sabrina MARTIN)

   Ce fichier ne contient QUE des données : objets et tableaux.
   Les calculs sont dans traitements.js, l'affichage dans
   affichage.js et le lancement / les événements dans app.js.

   Sommaire :
     1. Compétences MMI
     2. Projets (études de cas)
     3. Frise de parcours
     4. Stage de BUT1 (stage, missions, réalisations, outils, bilan)
     5. Projection professionnelle
     6. Contact et transparence
   ========================================================== */


/* ----------------------------------------------------------
   1. COMPÉTENCES MMI
   Chaque preuve renvoie à un projet (par son id) ou à un lien.
   ---------------------------------------------------------- */
const competences = [
  {
    id: "comprendre",
    nom: "Comprendre",
    intitule:
      "Comprendre les écosystèmes, les besoins des utilisateurs et les dispositifs de communication numérique",
    justification:
      "Avant de créer, je pars du public. Pour Petit Sauveteur, il fallait parler à des enfants : je me suis demandé ce qu'ils savent déjà, ce qui retient leur attention et quels mots ils comprennent. Chez Bernard Print, le contact avec les clients au comptoir m'a appris à écouter une demande avant de proposer une maquette.",
    preuves: [
      {
        projet: "petit-sauveteur",
        texte: "Vidéo pensée pour des enfants : vocabulaire simple, gestes montrés pas à pas, format court."
      },
      {
        projet: "catalogue-bernard-print",
        texte: "Prestations classées en familles pour que les clients trouvent vite ce qu'ils cherchent."
      }
    ]
  },
  {
    id: "concevoir",
    nom: "Concevoir",
    intitule:
      "Concevoir ou co-concevoir une réponse stratégique pertinente à une problématique complexe",
    justification:
      "Sur Bouj Dous, nous avons construit la réponse avant de dessiner : un persona, un ton (civique, jamais moralisateur), un territoire émotionnel, puis un système graphique qui fonctionne sur tous les supports. J'ai compris qu'un bon visuel découle d'une stratégie claire.",
    preuves: [
      {
        projet: "bouj-dous",
        texte: "Persona, mots-clés « Lisible, Digne, Apaisé » et storyboard décliné sur 6 formats."
      }
    ]
  },
  {
    id: "exprimer",
    nom: "Exprimer",
    intitule: "Exprimer un message avec les médias numériques pour informer et communiquer",
    justification:
      "C'est la compétence où je me sens le plus à l'aise : faire passer un message par l'image, en print comme en vidéo. Je choisis les couleurs, la typographie et le rythme en fonction de ce que le public doit retenir.",
    preuves: [
      {
        projet: "bouj-dous",
        texte: "Affiche A3 « Lari-la ba tout moun » réalisée sur Illustrator, lisibilité testée à 3 mètres."
      },
      {
        projet: "carre-tropical",
        texte: "Réels montés sur CapCut qui racontent l'ambiance d'un événement en quelques secondes."
      },
      {
        projet: "catalogue-bernard-print",
        texte: "Mise en page d'un catalogue de 12 pages et de supports de communication."
      }
    ]
  },
  {
    id: "developper",
    nom: "Développer",
    intitule: "Développer pour le web et les médias numériques",
    justification:
      "Je vise le graphisme, mais savoir intégrer mes maquettes et comprendre le fonctionnement d'un site m'aide à dialoguer avec les développeurs et à concevoir des visuels réalistes pour le web.",
    preuves: [
      {
        projet: "portail-r312",
        texte: "Ce portail : données en JavaScript, cartes générées, filtres, navigation au clavier."
      },
      {
        titre: "Mon portfolio en ligne",
        lien: "https://sabrina-martin-butmmi.netlify.app/",
        texte: "Site multipage avec thèmes jour, nuit et océan, version français / anglais et formulaire de contact."
      }
    ]
  },
  {
    id: "entreprendre",
    nom: "Entreprendre",
    intitule: "Entreprendre dans le secteur du numérique",
    justification:
      "Le stage puis l'alternance m'ont appris à travailler pour un vrai client : respecter les délais, faire valider avant de publier, et mesurer les résultats. Chez Carré Tropical, mes réels ont eu un effet visible sur les comptes de l'entreprise.",
    preuves: [
      {
        projet: "carre-tropical",
        texte: "Réel de l'inauguration du jardin de Kervino : 49 000 vues sur Instagram et 38 400 sur TikTok."
      },
      {
        projet: "catalogue-bernard-print",
        texte: "Stage en imprimerie : création, impression, accueil et encaissement des clients."
      }
    ]
  }
];


/* ----------------------------------------------------------
   2. PROJETS — études de cas
   annee : BUT1, BUT2 ou BUT3 (sert au filtre « Année »)
   competences : ids du tableau competences ci-dessus
   media : une image ou une vidéo (avec son texte alternatif)
   ---------------------------------------------------------- */
const projets = [
  {
    id: "catalogue-bernard-print",
    titre: "Catalogue Bernard Print",
    annee: "BUT1",
    periode: "Juin 2025",
    cadre: "Stage",
    type: "Print",
    competences: ["exprimer", "entreprendre", "comprendre"],
    outils: ["Canva"],
    media: {
      type: "image",
      src: "assets/images/catalogue-couverture.jpg",
      alt: "Couverture rose du catalogue Bernard Print avec le logo de l'imprimerie"
    },
    lien: { texte: "Voir le catalogue (PDF)", url: "assets/documents/catalogue-bernard-print.pdf" },
    resume: "Un catalogue de 12 pages pour présenter toute l'offre de l'imprimerie.",
    contexte:
      "Stage de BUT1 chez Bernard Print, imprimerie des Abymes (Guadeloupe) qui propose impression numérique, imagerie, gravure laser et personnalisation d'objets.",
    objectif: "Donner aux clients une vue d'ensemble claire des prestations, en boutique et en ligne.",
    role: "Conception et mise en page du catalogue, en lien avec l'équipe de l'imprimerie.",
    demarche: [
      "Inventaire de toutes les prestations proposées",
      "Classement en quatre familles : impression numérique, imagerie, gravure laser, personnalisation d'objets",
      "Sommaire paginé, puis une page par famille avec visuels, formats et finitions",
      "Page finale avec les contacts et les réseaux sociaux"
    ],
    resultat: "Un catalogue de 12 pages diffusé par l'entreprise en PDF.",
    difficultes:
      "Rendre lisible une offre très large et harmoniser des visuels d'origines différentes.",
    retour:
      "Le classement par familles rend le catalogue facile à parcourir. Aujourd'hui, je le referais sur InDesign avec une grille plus stricte et des styles, et je préparerais un fichier prêt pour l'imprimeur (CMJN, fonds perdus)."
  },
  {
    id: "petit-sauveteur",
    titre: "Petit Sauveteur",
    annee: "BUT2",
    periode: "Mars – juin 2026",
    cadre: "Service civique",
    type: "Vidéo",
    competences: ["comprendre", "exprimer"],
    outils: ["CapCut"],
    media: null,
    resume: "Une vidéo pour sensibiliser les enfants aux gestes de premiers secours.",
    contexte:
      "Service civique au sein de l'association Émergences Secourisme, qui forme aux premiers secours et intervient auprès des enfants et des adultes.",
    objectif:
      "Apprendre aux enfants les bons réflexes face à un accident, avec une vidéo adaptée à leur âge.",
    role:
      "Réalisation de la vidéo dans le cadre de ma mission de community manager (flyers, catalogue de formations, photo et vidéo).",
    demarche: [
      "Comprendre le public : attention courte, vocabulaire simple, besoin d'exemples concrets",
      "Choisir les gestes essentiels à montrer",
      "Écrire un script court, puis tourner",
      "Monter avec un rythme rapide et des textes à l'écran"
    ],
    resultat: "Une vidéo de sensibilisation utilisée par l'association.",
    difficultes: "Simplifier les gestes sans les déformer et garder l'attention des enfants jusqu'au bout.",
    retour:
      "Partir du public a guidé tous mes choix. La prochaine fois, je testerais une première version auprès de quelques enfants avant le montage final."
  },
  {
    id: "bouj-dous",
    titre: "Bouj Dous",
    annee: "BUT2",
    periode: "Juillet 2026",
    cadre: "SAÉ 4 Créa 1",
    type: "Campagne",
    competences: ["concevoir", "exprimer"],
    outils: ["Adobe Illustrator"],
    media: {
      type: "image",
      src: "assets/images/bouj-dous-affiche.jpg",
      alt: "Affiche Bouj Dous : rue de Pointe-à-Pitre illustrée où piétons, cycliste, scootériste et voiture se croisent, titre « Lari-la ba tout moun »"
    },
    resume: "Une campagne de sécurité routière et de mobilités douces pour la Ville de Pointe-à-Pitre.",
    contexte:
      "SAÉ de BUT2 en groupe de quatre : une cheffe de projet, une designer graphique (moi), un responsable audiovisuel et motion design, un développeur web. Commande pédagogique de la Ville de Pointe-à-Pitre.",
    objectif:
      "Inviter piétons, cyclistes, scootéristes et automobilistes à mieux cohabiter, avec un ton civique et bienveillant, jamais moralisateur.",
    role:
      "Design graphique : logo « Bouj Dous », système de pictogrammes des usagers, charte, affiche A3, flyer et déclinaisons réseaux sociaux.",
    demarche: [
      "Persona : un commerçant du centre-ville qui se déplace en scooter",
      "Mots-clés visuels : Lisible, Digne, Apaisé",
      "Moodboard ancré à Pointe-à-Pitre : architecture créole, madras, la Darse",
      "Palette bleu canard et orange, typographies Montserrat et Atkinson Hyperlegible",
      "Storyboard sur 6 formats et test de lisibilité de l'affiche à 3 mètres"
    ],
    resultat:
      "Une identité de campagne, une affiche, un flyer et un kit réseaux sociaux, présentés en soutenance le 8 juillet 2026.",
    difficultes:
      "Concilier un ancrage local fort avec une lisibilité maximale, et accorder mes visuels avec le motion design.",
    retour:
      "Le système bichrome rend la campagne reconnaissable sur tous les supports. Si c'était à refaire, je ferais tester l'affiche par de vrais usagers de Pointe-à-Pitre."
  },
  {
    id: "carre-tropical",
    titre: "Réels Carré Tropical",
    annee: "BUT2",
    periode: "5 juin – 4 septembre 2026",
    cadre: "Alternance",
    type: "Vidéo",
    competences: ["entreprendre", "exprimer"],
    outils: ["CapCut", "Canva"],
    media: {
      type: "video",
      src: "assets/videos/carre-tropical-all-day-in.mp4",
      poster: "assets/images/carre-tropical-poster.jpg",
      alt: "Réel All Day In : l'équipe Carré Tropical anime le public d'un festival, jeux et danses dans la foule"
    },
    resume: "Des réels qui racontent les événements d'une agence dédiée à la culture créole.",
    contexte:
      "Alternance chez Carré Tropical, agence événementielle antillaise qui crée des jeux culturels créoles, organise des événements et vend des cadeaux culturels.",
    objectif:
      "Augmenter la visibilité des comptes Carré Tropical, CarréBooth Magique et Fon Lèspri Koko avec des contenus qui donnent envie de participer.",
    role:
      "Community manager : création de visuels, gestion des réseaux (Instagram, TikTok, Facebook, YouTube Shorts), tournage et montage des réels.",
    demarche: [
      "Filmer les moments forts sur place",
      "Trier les rushs et construire une petite histoire",
      "Monter sur CapCut",
      "Faire valider par le gérant",
      "Publier le jour même ou un à deux jours après l'événement"
    ],
    resultat:
      "Inauguration du jardin de Kervino : 49 000 vues et 790 j'aime sur Instagram, 38 400 vues et 1 531 j'aime sur TikTok. All Day In : 15 500 vues sur Instagram. Publicité CarréBooth : 29 800 vues et plus de demandes pour la prestation.",
    difficultes:
      "Oser aller vers le public pour filmer, et trouver des idées les jours de panne d'inspiration.",
    retour:
      "All Day In m'a donné confiance pour filmer au cœur de la foule. Quand l'inspiration manquait, demander l'avis des collègues et du gérant m'a débloquée. Je veux maintenant mieux préparer mes tournages avec une liste de plans."
  },
  {
    id: "portail-r312",
    titre: "Ce portail professionnel",
    annee: "BUT3",
    periode: "Septembre – octobre 2026",
    cadre: "Ressource R3.12",
    type: "Site web",
    competences: ["developper"],
    outils: ["HTML / CSS", "JavaScript", "Git", "Netlify"],
    media: {
      type: "image",
      src: "assets/images/portail-apercu.jpg",
      alt: "Capture de l'accueil du portail : titre « Mon parcours professionnel MMI » et photo en arche"
    },
    resume: "Une application web qui présente mon stage, mes projets et mon parcours.",
    contexte:
      "Projet fil rouge de la ressource R3.12 (développement front et intégration) : passer d'un site statique à une application dont le contenu est géré en JavaScript.",
    objectif: "Valoriser mon stage de BUT1 et mon parcours, et préparer mon entrée dans la vie professionnelle.",
    role: "Contenus, direction graphique, intégration, tests et mise en ligne.",
    demarche: [
      "Transformer le rapport de stage en données (objets et tableaux)",
      "Séparer données, traitements et affichage dans trois fichiers",
      "Générer les cartes, les filtres et la frise en JavaScript",
      "Tester au clavier et sur trois largeurs d'écran, puis publier sur Netlify"
    ],
    resultat: "Un portail en ligne, versionné avec Git, qui évolue à chaque séance.",
    difficultes: "Rendre chaque module utilisable au clavier et lisible sur mobile.",
    retour:
      "Je reprends l'identité visuelle de mon rapport pour garder une cohérence. Une prochaine étape serait d'ajouter mon alternance de BUT3 dès qu'elle commence."
  }
];


/* ----------------------------------------------------------
   3. FRISE DE PARCOURS
   date : sert à trier les jalons (format AAAA-MM-JJ)
   ---------------------------------------------------------- */
const jalons = [
  {
    date: "2024-09-01",
    periode: "Septembre 2024",
    type: "Formation",
    titre: "Entrée en BUT MMI",
    lieu: "IUT de la Guadeloupe, Saint-Claude",
    description:
      "Début du BUT Métiers du Multimédia et de l'Internet, après un bac général au lycée Félix Proto (Les Abymes)."
  },
  {
    date: "2025-06-16",
    periode: "Juin 2025",
    type: "Stage",
    titre: "Stage de BUT1 chez Bernard Print",
    lieu: "Les Abymes",
    description:
      "Découverte d'une imprimerie : maquettes, impression sur textile et objets, découpe, accueil des clients.",
    projet: "catalogue-bernard-print"
  },
  {
    date: "2025-09-01",
    periode: "Septembre 2025",
    type: "Formation",
    titre: "Passage en BUT2",
    lieu: "IUT de la Guadeloupe",
    description:
      "Approfondissement du design graphique, de l'UX, de la culture artistique et du motion design."
  },
  {
    date: "2026-06-30",
    periode: "Mars – juin 2026",
    type: "Expérience",
    titre: "Service civique chez Émergences Secourisme",
    lieu: "Guadeloupe",
    description:
      "Community manager (flyers, catalogue de formations, photo et vidéo) et sensibilisation aux premiers secours auprès d'enfants et d'adultes.",
    projet: "petit-sauveteur"
  },
  {
    date: "2026-07-08",
    periode: "Juillet 2026",
    type: "SAÉ",
    titre: "SAÉ 4 Créa 1 « Bouj Dous »",
    lieu: "IUT de la Guadeloupe",
    description:
      "Campagne de sécurité routière pour la Ville de Pointe-à-Pitre, en groupe de quatre. Soutenance le 8 juillet 2026.",
    projet: "bouj-dous"
  },
  {
    date: "2026-09-04",
    periode: "5 juin – 4 septembre 2026",
    type: "Alternance",
    titre: "Alternance chez Carré Tropical",
    lieu: "Guadeloupe",
    description:
      "Community manager : visuels, réseaux sociaux, tournage et montage de réels pour trois comptes de l'agence.",
    projet: "carre-tropical"
  },
  {
    date: "2026-09-14",
    periode: "Septembre 2026",
    type: "Formation",
    titre: "Entrée en BUT3",
    lieu: "IUT de la Guadeloupe",
    description:
      "Dernière année du BUT MMI : création de ce portail en R3.12 et recherche d'une alternance.",
    projet: "portail-r312"
  }
];


/* ----------------------------------------------------------
   4. STAGE DE BUT1
   ---------------------------------------------------------- */
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

// Réalisations du stage (affichées dans les missions correspondantes)
const realisations = [
  {
    id: "catalogue",
    titre: "Catalogue Bernard Print",
    type: "Document",
    description:
      "Catalogue de 12 pages : impression numérique, imagerie, gravure laser et personnalisation d'objets.",
    images: ["assets/images/catalogue-couverture.jpg"],
    alt: "Couverture du catalogue Bernard Print",
    document: "assets/documents/catalogue-bernard-print.pdf"
  },
  {
    id: "flyer",
    titre: "Flyer « Point d'accueil numérique »",
    type: "Affiche",
    description:
      "Flyer qui présente les services d'accompagnement numérique et les autres services de la boutique. Il a aussi été utilisé dans les bureaux de la police municipale.",
    images: ["assets/images/flyer-point-accueil.jpg"],
    alt: "Flyer bleu et rose listant les services du point d'accueil numérique"
  },
  {
    id: "affiche",
    titre: "Affiche « En mémoire de… »",
    type: "Affiche",
    description:
      "Affiche qui présente les t-shirts personnalisés et les ardoises mortuaires pour rendre hommage à un proche.",
    images: ["assets/images/affiche-en-memoire.jpg"],
    alt: "Affiche sur fond de ciel avec deux t-shirts personnalisés et une ardoise"
  },
  {
    id: "tasse",
    titre: "Tasse fête des pères « Le Terrier des Lapinous »",
    type: "Maquette",
    description:
      "Visuel d'une tasse spéciale fête des pères : une photo encadrée avec « Le Terrier des Lapinous » d'un côté, un cœur « Bonne fête » de l'autre.",
    images: ["assets/images/tasse-fete-des-peres.jpg"],
    alt: "Maquette de tasse : emplacement photo et texte rouge d'un côté, cœur « Bonne fête » de l'autre"
  },
  {
    id: "invitations",
    titre: "Cartes d'invitation – 70 ans",
    type: "Maquette",
    description:
      "Invitations pour un déjeuner d'anniversaire : une carte « Happy Birthday » avec emplacement photo et texte d'invitation, et une carte florale « Anniversaire 70 ans ».",
    images: [
      "assets/images/invitation-happy-birthday.jpg",
      "assets/images/invitation-70-ans.jpg"
    ],
    alt: "Cartes d'invitation d'anniversaire fleuries"
  }
];

// Missions du stage (au moins 5) — realisations : ids du tableau ci-dessus
const missions = [
  {
    titre: "Création du catalogue et de supports de communication",
    categorie: "Création graphique",
    dates: ["4 juin"],
    description:
      "Conception du catalogue de l'entreprise, d'un flyer et d'une affiche pour présenter ses services.",
    outils: ["Canva"],
    competences: ["Mise en page", "Créativité"],
    difficultes: "Présenter beaucoup de produits différents de façon claire et lisible.",
    resultats: "Un catalogue en ligne et des supports utilisés par l'entreprise.",
    realisations: ["catalogue", "flyer", "affiche"]
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
    resultats: "Maquettes validées puis imprimées sur tasse.",
    realisations: ["tasse"]
  },
  {
    titre: "Maquettes de cartes d'anniversaire et de porte-clé",
    categorie: "Création graphique",
    dates: ["10 juin", "11 juin"],
    description: "Conception de cartes d'anniversaire et d'un porte-clé personnalisé selon les envies des clients.",
    outils: ["Canva", "Adobe Photoshop"],
    competences: ["Création graphique", "Mise en page"],
    difficultes: "Travailler sur de petits formats où chaque détail compte.",
    resultats: "Visuels prêts à être imprimés.",
    realisations: ["invitations"]
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
    resultats: "Textiles personnalisés remis aux clients.",
    realisations: []
  },
  {
    titre: "Impression sur tasses",
    categorie: "Impression",
    dates: ["11 juin"],
    description: "Impression des maquettes validées sur des tasses personnalisées.",
    outils: ["Presse à tasse"],
    competences: ["Techniques d'impression sur objet", "Précision"],
    difficultes: "Obtenir des couleurs fidèles à la maquette.",
    resultats: "Tasses personnalisées prêtes pour les clients.",
    realisations: []
  },
  {
    titre: "Découpe et finition",
    categorie: "Façonnage",
    dates: ["6 juin", "10 juin", "16 juin"],
    description: "Découpage de flyers, de cartes de visite et de cartes servant à fabriquer des badges.",
    outils: ["Matériel de découpe"],
    competences: ["Précision", "Soin de la finition"],
    difficultes: "Garder une découpe nette et régulière sur de grandes quantités.",
    resultats: "Supports finis, prêts à être remis.",
    realisations: []
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
    resultats: "Des clients orientés et des commandes remises dans les temps.",
    realisations: []
  },
  {
    titre: "Teintage de vitres",
    categorie: "Autres prestations",
    dates: ["6 juin"],
    description: "Teintage des vitres d'une cliente de la galerie commerciale.",
    outils: ["Film teinté"],
    competences: ["Polyvalence", "Minutie"],
    difficultes: "Une mission très différente de l'impression, à découvrir sur le moment.",
    resultats: "Prestation réalisée pour une cliente voisine.",
    realisations: []
  }
];

// Logiciels utilisés pendant le stage
// icone : fichier dans assets/images/icones/ (sinon les initiales s'affichent)
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

const materiel = ["Presse à chaud", "Presse à tasse", "Machines d'impression", "Matériel de découpe", "Caisse"];

const bilan = {
  appris:
    "Le fonctionnement d'une imprimerie au quotidien et les étapes pour obtenir un rendu de qualité. Le métier demande à la fois de la créativité, de la rigueur et un bon contact avec le client.",
  difficulte: "Certaines journées étaient très chargées, d'autres très calmes, avec peu de tâches.",
  solution:
    "J'ai profité des moments calmes pour observer l'organisation interne : la gestion des commandes et la façon dont l'équipe s'adapte à l'affluence.",
  autonomie: 3, // de 1 à 5
  autonomieTexte:
    "Les logiciels et les machines, je les ai utilisés de manière encadrée par mon tuteur. J'ai gagné en autonomie sur l'accueil, la remise des commandes et les petites impressions.",
  fierte: "Le catalogue de l'entreprise : un vrai support utilisé par Bernard Print et partagé à ses clients.",
  approfondir:
    "La création graphique et la préparation des fichiers pour l'impression, pour aller vers le métier de graphiste.",
  competences: {
    Techniques: [
      "Techniques d'impression (textile, papier, objets)",
      "Découpe et finition",
      "Création de maquettes",
      "Logiciels de création et de mise en page"
    ],
    Organisation: ["Gestion du temps", "Polyvalence", "Rigueur et précision"],
    Relationnel: ["Accueil et conseil client", "Travail en équipe", "Suivi et satisfaction client"]
  }
};


/* ----------------------------------------------------------
   5. PROJECTION PROFESSIONNELLE
   ---------------------------------------------------------- */
const projection = {
  metier: "Graphiste dans une agence de communication ou un service communication, aux Antilles",
  pourquoi:
    "Dans tous mes projets, ce que je préfère, c'est concevoir des visuels, en print comme en digital. Mon expérience de community manager est un vrai atout : une graphiste qui connaît les réseaux sociaux crée des contenus adaptés à chaque format.",
  etape: "Prochaine étape : une alternance de BUT3 qui mêle graphisme et community management.",
  acquis: [
    "Supports print : catalogue, flyer, affiche, cartes",
    "Identité de campagne : logo, charte, pictogrammes (Bouj Dous)",
    "Vidéo courte pour les réseaux : tournage, montage, publication",
    "Travail avec un client : demande, validation, délais",
    "Canva, Photoshop, Illustrator, CapCut et bases HTML / CSS / JavaScript"
  ],
  ecarts: [
    "InDesign et la mise en page de documents de plusieurs pages",
    "La préparation des fichiers pour l'imprimeur (CMJN, fonds perdus, 300 dpi)",
    "Un portfolio plus centré sur le graphisme",
    "Une première expérience en agence, avec plusieurs clients en parallèle"
  ],
  actions: [
    {
      quand: "D'ici décembre 2026",
      action:
        "Trouver mon alternance de BUT3 : candidatures ciblées vers des agences et services communication de Guadeloupe et de Martinique, en mettant en avant graphisme et réseaux sociaux."
    },
    {
      quand: "Décembre 2026",
      action:
        "Refaire le catalogue Bernard Print sur InDesign en exercice personnel : grille, styles, export PDF prêt pour l'impression."
    },
    {
      quand: "Janvier – février 2027",
      action:
        "Créer ma check-list d'impression (CMJN, 300 dpi, fonds perdus, polices vectorisées) et la faire relire par l'équipe de Bernard Print."
    },
    {
      quand: "Mars 2027",
      action: "Recentrer mon portfolio sur le graphisme avec trois études de cas détaillées."
    },
    {
      quand: "Avril – mai 2027",
      action: "Préparer une certification Adobe Certified Professional (Illustrator ou InDesign)."
    },
    {
      quand: "Juin – septembre 2027",
      action:
        "Après le BUT : candidater à des postes de graphiste junior avec mon portfolio et les recommandations de mes tuteurs."
    }
  ]
};


/* ----------------------------------------------------------
   6. CONTACT ET TRANSPARENCE
   ---------------------------------------------------------- */
const contact = {
  nom: "Sabrina MARTIN",
  statut: "Étudiante en BUT MMI 3 · future graphiste",
  email: "martinsabrina0203@gmail.com",
  portfolio: "https://sabrina-martin-butmmi.netlify.app/"
};

const transparence = {
  credits: [
    "Textes, visuels et vidéos : Sabrina MARTIN, sauf mention contraire.",
    "Bouj Dous : projet de groupe (SAÉ 4 Créa 1). Mes camarades sont désignés par leur rôle, sans leur nom.",
    "Blason de la Ville de Pointe-à-Pitre : fourni dans le cadre pédagogique de la SAÉ.",
    "Polices Playfair Display, League Spartan et Jost : Google Fonts, licence SIL Open Font License.",
    "Motif de lignes en fond : créé pour ce site, d'après mon rapport de stage.",
    "Développement réalisé avec l'aide d'un assistant IA (Claude, d'Anthropic) ; contenus relus et validés par moi."
  ],
  sources: [
    { texte: "Mon rapport de stage de BUT1 (Bernard Print, juin 2025)" },
    { texte: "Consignes R3.12 « Mon parcours professionnel MMI »" },
    { texte: "Référentiel de compétences du BUT MMI" },
    { texte: "Site de Bernard Print", url: "https://www.bernardprint.fr/" }
  ],
  droits: [
    "Les visuels de Bernard Print et la vidéo de Carré Tropical sont publiés avec l'autorisation des entreprises.",
    "La vidéo All Day In a été tournée lors d'un événement public et déjà diffusée par Carré Tropical sur ses réseaux.",
    "Aucune donnée personnelle de tiers : numéros masqués sur l'invitation, emplacement photo vide sur la maquette de tasse.",
    "Les coordonnées des entreprises ne sont pas reprises ; seul le site public de Bernard Print est lié.",
    "Les statistiques de Carré Tropical viennent des comptes de l'entreprise pendant mon alternance."
  ]
};
