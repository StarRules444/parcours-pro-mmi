/* ==========================================================
   AFFICHAGE — fonctions qui construisent le HTML.
   Elles reçoivent des données (déjà triées / filtrées par
   traitements.js) et les écrivent dans la page.
   Les clics sont gérés dans app.js grâce aux attributs data-*.
   ========================================================== */


/* ---------- Petits outils ---------- */

// Crée un élément avec une classe et un texte (textContent : pas d'injection HTML)
function creer(balise, classe, texte) {
  const element = document.createElement(balise);
  if (classe) element.className = classe;
  if (texte !== undefined) element.textContent = texte;
  return element;
}

function remplirListe(ul, tableau) {
  ul.innerHTML = "";
  tableau.forEach(function (texte) {
    ul.appendChild(creer("li", "", texte));
  });
}

function creerTags(tableau, classe) {
  const ul = creer("ul", classe || "tags");
  remplirListe(ul, tableau);
  return ul;
}

// Bouton qui ouvre l'étude de cas d'un projet (géré dans app.js)
function creerBoutonProjet(idProjet, texte) {
  const bouton = creer("button", "lien-action", texte);
  bouton.type = "button";
  bouton.dataset.ouvrirProjet = idProjet;
  return bouton;
}

function nomCompetence(id) {
  const competence = trouverParId(competences, id);
  return competence ? competence.nom : id;
}


/* ---------- Accueil ---------- */

function afficherAccueil(chiffres) {
  const ul = document.getElementById("hero-chiffres");
  ul.innerHTML = "";
  chiffres.forEach(function (c) {
    const li = creer("li");
    li.appendChild(creer("strong", "", c.valeur));
    li.appendChild(creer("span", "", c.label));
    ul.appendChild(li);
  });
}


/* ---------- 1. Compétences ---------- */

function afficherOngletsCompetences(liste) {
  const zone = document.getElementById("onglets-competences");
  zone.innerHTML = "";
  liste.forEach(function (competence, i) {
    const onglet = creer("button", "onglet");
    onglet.type = "button";
    onglet.id = "onglet-" + competence.id;
    onglet.setAttribute("role", "tab");
    onglet.setAttribute("aria-controls", "panneau-competence");
    onglet.dataset.competence = competence.id;
    onglet.appendChild(creer("span", "onglet__nom", competence.nom));
    onglet.appendChild(creer("span", "onglet__nb", pluriel(competence.preuves.length, "preuve")));
    zone.appendChild(onglet);
    if (i === 0) onglet.setAttribute("aria-selected", "true");
  });
}

function afficherCompetence(competence) {
  // État des onglets : un seul sélectionné, les autres hors tabulation
  document.querySelectorAll("#onglets-competences .onglet").forEach(function (onglet) {
    const actif = onglet.dataset.competence === competence.id;
    onglet.setAttribute("aria-selected", actif ? "true" : "false");
    onglet.tabIndex = actif ? 0 : -1;
  });

  const panneau = document.getElementById("panneau-competence");
  panneau.setAttribute("aria-labelledby", "onglet-" + competence.id);
  panneau.innerHTML = "";

  const entete = creer("div", "competence__entete");
  entete.appendChild(creer("h3", "competence__nom", competence.nom));
  entete.appendChild(creer("p", "competence__intitule", competence.intitule));
  panneau.appendChild(entete);

  const corps = creer("div", "competence__corps");

  const justification = creer("div", "competence__justification");
  justification.appendChild(creer("h4", "", "Ma justification"));
  justification.appendChild(creer("p", "", competence.justification));
  corps.appendChild(justification);

  const preuves = creer("div", "competence__preuves");
  preuves.appendChild(creer("h4", "", "Mes preuves"));
  const ol = creer("ol", "preuves");
  competence.preuves.forEach(function (preuve) {
    const li = creer("li", "preuve");
    if (preuve.projet) {
      const projet = trouverParId(projets, preuve.projet);
      li.appendChild(creer("strong", "preuve__titre", projet.titre));
      li.appendChild(creer("span", "preuve__meta", projet.annee + " · " + projet.cadre));
      li.appendChild(creer("p", "", preuve.texte));
      li.appendChild(creerBoutonProjet(projet.id, "Lire l'étude de cas"));
    } else {
      li.appendChild(creer("strong", "preuve__titre", preuve.titre));
      li.appendChild(creer("p", "", preuve.texte));
      const lien = creer("a", "lien-action", "Ouvrir le site");
      lien.href = preuve.lien;
      lien.target = "_blank";
      lien.rel = "noopener";
      lien.setAttribute("aria-label", "Ouvrir " + preuve.titre + " (nouvel onglet)");
      li.appendChild(lien);
    }
    ol.appendChild(li);
  });
  preuves.appendChild(ol);

  const voir = creer("button", "bouton bouton--contour", "Voir les projets « " + competence.nom + " »");
  voir.type = "button";
  voir.dataset.filtrerCompetence = competence.id;
  preuves.appendChild(voir);

  corps.appendChild(preuves);
  panneau.appendChild(corps);
}


/* ---------- 2. Projets ---------- */

// Remplit un menu déroulant de filtre
function remplirSelect(idSelect, valeurs, libelleTous, libelles) {
  const select = document.getElementById(idSelect);
  select.innerHTML = "";
  const tous = creer("option", "", libelleTous);
  tous.value = "";
  select.appendChild(tous);
  valeurs.forEach(function (valeur) {
    const option = creer("option", "", libelles ? libelles(valeur) : valeur);
    option.value = valeur;
    select.appendChild(option);
  });
}

function creerMediaProjet(projet) {
  const media = creer("div", "projet__media");
  if (!projet.media) {
    // Pas encore de visuel : un aplat typographique
    media.classList.add("projet__media--vide");
    media.setAttribute("aria-hidden", "true");
    media.appendChild(creer("span", "", projet.type));
    return media;
  }
  const img = creer("img");
  img.src = projet.media.type === "video" ? projet.media.poster : projet.media.src;
  img.alt = projet.media.alt;
  media.appendChild(img);
  if (projet.media.type === "video") {
    media.appendChild(creer("span", "projet__badge", "▶ Vidéo"));
  }
  return media;
}

function afficherProjets(liste, total) {
  const grille = document.getElementById("grille-projets");
  grille.innerHTML = "";

  liste.forEach(function (projet) {
    const carte = creer("article", "projet");
    carte.appendChild(creerMediaProjet(projet));

    const corps = creer("div", "projet__corps");
    corps.appendChild(creer("p", "projet__meta", projet.annee + " · " + projet.periode + " · " + projet.cadre));
    corps.appendChild(creer("h3", "projet__titre", projet.titre));
    corps.appendChild(creer("p", "projet__resume", projet.resume));

    const chips = creer("ul", "chips");
    chips.setAttribute("aria-label", "Compétences");
    projet.competences.forEach(function (id) {
      chips.appendChild(creer("li", "pill", nomCompetence(id)));
    });
    corps.appendChild(chips);

    const outilsListe = creerTags(projet.outils);
    outilsListe.setAttribute("aria-label", "Outils");
    corps.appendChild(outilsListe);

    const bouton = creer("button", "bouton bouton--petit", "Lire l'étude de cas");
    bouton.type = "button";
    bouton.dataset.ouvrirProjet = projet.id;
    bouton.setAttribute("aria-label", "Lire l'étude de cas : " + projet.titre);
    corps.appendChild(bouton);

    carte.appendChild(corps);
    grille.appendChild(carte);
  });

  // Nombre de résultats + état vide
  const compteur = document.getElementById("resultats-projets");
  compteur.textContent = liste.length === total
    ? pluriel(total, "projet")
    : pluriel(liste.length, "projet") + " sur " + total;
  document.getElementById("projets-vide").hidden = liste.length > 0;
  grille.hidden = liste.length === 0;
}

// Remplit la fenêtre « étude de cas »
function afficherEtudeDeCas(projet) {
  document.getElementById("etude-meta").textContent =
    projet.annee + " · " + projet.periode + " · " + projet.cadre + " · " + projet.type;
  document.getElementById("etude-titre").textContent = projet.titre;

  const media = document.getElementById("etude-media");
  media.innerHTML = "";
  if (projet.media && projet.media.type === "video") {
    const video = creer("video");
    video.src = projet.media.src;
    video.poster = projet.media.poster;
    video.controls = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.setAttribute("aria-label", projet.media.alt);
    media.appendChild(video);
    media.appendChild(creer("p", "etude__legende", projet.media.alt));
  } else if (projet.media) {
    const img = creer("img");
    img.src = projet.media.src;
    img.alt = projet.media.alt;
    media.appendChild(img);
  }
  media.hidden = !projet.media;

  const contenu = document.getElementById("etude-contenu");
  contenu.innerHTML = "";
  const rubriques = [
    ["Contexte", projet.contexte],
    ["Objectif", projet.objectif],
    ["Mon rôle", projet.role],
    ["Démarche", projet.demarche],
    ["Résultat", projet.resultat],
    ["Difficultés", projet.difficultes],
    ["Retour critique", projet.retour]
  ];
  rubriques.forEach(function (rubrique) {
    const bloc = creer("section", "etude__bloc");
    bloc.appendChild(creer("h3", "", rubrique[0]));
    if (Array.isArray(rubrique[1])) {
      const ol = creer("ol", "etude__etapes");
      remplirListe(ol, rubrique[1]);
      bloc.appendChild(ol);
    } else {
      bloc.appendChild(creer("p", "", rubrique[1]));
    }
    contenu.appendChild(bloc);
  });

  const pied = creer("div", "etude__pied");
  pied.appendChild(creerTags(projet.competences.map(nomCompetence), "chips chips--pill"));
  pied.appendChild(creerTags(projet.outils));
  if (projet.lien) {
    const lien = creer("a", "bouton bouton--petit", projet.lien.texte);
    lien.href = projet.lien.url;
    lien.target = "_blank";
    lien.rel = "noopener";
    pied.appendChild(lien);
  }
  contenu.appendChild(pied);
}


/* ---------- 3. Frise ---------- */

function afficherFrise(listeJalons) {
  const frise = document.getElementById("frise");
  frise.innerHTML = "";
  listeJalons.forEach(function (jalon, i) {
    const li = creer("li", "frise__item");
    const bouton = creer("button", "jalon");
    bouton.type = "button";
    bouton.id = "jalon-" + i;
    bouton.dataset.index = i;
    bouton.dataset.type = jalon.type;
    bouton.setAttribute("aria-controls", "jalon-detail");
    bouton.appendChild(creer("span", "jalon__date", jalon.periode));
    bouton.appendChild(creer("span", "jalon__titre", jalon.titre));
    bouton.appendChild(creer("span", "jalon__type", jalon.type));
    li.appendChild(bouton);
    frise.appendChild(li);
  });
}

function afficherJalon(jalon, index, total) {
  document.querySelectorAll("#frise .jalon").forEach(function (bouton) {
    const actif = Number(bouton.dataset.index) === index;
    bouton.setAttribute("aria-current", actif ? "step" : "false");
    bouton.tabIndex = actif ? 0 : -1;
  });

  const detail = document.getElementById("jalon-detail");
  detail.innerHTML = "";
  detail.appendChild(creer("p", "jalon-detail__position", "Étape " + (index + 1) + " sur " + total + " · " + jalon.type));
  detail.appendChild(creer("h3", "", jalon.titre));
  detail.appendChild(creer("p", "jalon-detail__meta", jalon.periode + " · " + jalon.lieu));
  detail.appendChild(creer("p", "", jalon.description));
  if (jalon.projet) {
    const projet = trouverParId(projets, jalon.projet);
    detail.appendChild(creerBoutonProjet(projet.id, "Étude de cas : " + projet.titre));
  }

  document.getElementById("frise-precedent").disabled = index === 0;
  document.getElementById("frise-suivant").disabled = index === total - 1;
}


/* ---------- 4. Stage de BUT1 ---------- */

function afficherStage(infos) {
  const fiche = document.getElementById("fiche-stage");
  fiche.innerHTML = "";
  [
    ["Entreprise", infos.entreprise],
    ["Secteur", infos.secteur],
    ["Lieu", infos.lieu + " – " + infos.adresse],
    ["Période", infos.periode],
    ["Poste", infos.poste],
    ["Équipe", infos.service]
  ].forEach(function (ligne) {
    const div = creer("div", "fiche__ligne");
    div.appendChild(creer("dt", "", ligne[0]));
    div.appendChild(creer("dd", "", ligne[1]));
    fiche.appendChild(div);
  });
  document.getElementById("stage-presentation").textContent = infos.presentation;
  document.getElementById("stage-mission").textContent = infos.missionPrincipale;
  remplirListe(document.getElementById("stage-activites"), infos.activites);
}

function afficherFiltresMissions(categories) {
  const zone = document.getElementById("filtres-missions");
  zone.innerHTML = "";
  ["Toutes"].concat(categories).forEach(function (categorie) {
    const bouton = creer("button", "filtre", categorie);
    bouton.type = "button";
    bouton.dataset.categorie = categorie;
    bouton.setAttribute("aria-pressed", categorie === "Toutes" ? "true" : "false");
    zone.appendChild(bouton);
  });
}

function creerMiniatureRealisation(realisation) {
  const bouton = creer("button", "mini-realisation");
  bouton.type = "button";
  bouton.dataset.realisation = realisation.id;
  bouton.setAttribute("aria-label", "Agrandir : " + realisation.titre);
  const img = creer("img");
  img.src = realisation.images[0];
  img.alt = "";
  bouton.appendChild(img);
  bouton.appendChild(creer("span", "mini-realisation__titre", realisation.titre));
  return bouton;
}

function afficherMissions(liste, total, categorie) {
  const zone = document.getElementById("liste-missions");
  zone.innerHTML = "";

  liste.forEach(function (mission) {
    const li = creer("li", "mission");

    const entete = creer("div", "mission__entete");
    entete.appendChild(creer("span", "pill", mission.categorie));
    entete.appendChild(creer("span", "mission__dates", mission.dates.join(" · ")));
    li.appendChild(entete);
    li.appendChild(creer("h4", "mission__titre", mission.titre));
    li.appendChild(creer("p", "", mission.description));
    li.appendChild(creerTags(mission.outils));

    // Détails repliables : réalisations (conseil de la prof), compétences, difficultés, résultats
    const aDesRealisations = mission.realisations.length > 0;
    const details = creer("details", "mission__details");
    details.appendChild(creer("summary", "",
      aDesRealisations ? "Réalisations, compétences, difficultés, résultats" : "Compétences, difficultés, résultats"));

    if (aDesRealisations) {
      const galerie = creer("div", "mission__realisations");
      mission.realisations.forEach(function (id) {
        galerie.appendChild(creerMiniatureRealisation(trouverParId(realisations, id)));
      });
      details.appendChild(galerie);
    }

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
    zone.appendChild(li);
  });

  document.getElementById("compteur-missions").textContent = categorie === "Toutes"
    ? pluriel(total, "mission") + " réalisées"
    : liste.length + " sur " + total + " · " + categorie;
}

// Visionneuse des réalisations du stage (image + miniatures)
function afficherVisionneuse(realisation) {
  const grande = document.getElementById("visionneuse-image");
  grande.src = realisation.images[0];
  grande.alt = realisation.alt;
  document.getElementById("visionneuse-type").textContent = realisation.type;
  document.getElementById("visionneuse-titre").textContent = realisation.titre;
  document.getElementById("visionneuse-description").textContent = realisation.description;

  const miniatures = document.getElementById("visionneuse-miniatures");
  miniatures.innerHTML = "";
  if (realisation.images.length > 1) {
    realisation.images.forEach(function (source, i) {
      const bouton = creer("button", "miniature");
      bouton.type = "button";
      bouton.dataset.source = source;
      bouton.setAttribute("aria-label", "Visuel " + (i + 1) + " sur " + realisation.images.length);
      bouton.setAttribute("aria-pressed", i === 0 ? "true" : "false");
      const mini = creer("img");
      mini.src = source;
      mini.alt = "";
      bouton.appendChild(mini);
      miniatures.appendChild(bouton);
    });
  }

  const lien = document.getElementById("visionneuse-lien");
  lien.hidden = !realisation.document;
  if (realisation.document) lien.href = realisation.document;
}

function afficherOutils(listeOutils, listeMateriel) {
  const zone = document.getElementById("liste-outils");
  zone.innerHTML = "";
  listeOutils.forEach(function (outil) {
    const carte = creer("article", "outil");
    const logo = creer("span", "outil__logo", outil.initiale);
    logo.setAttribute("aria-hidden", "true");
    const icone = creer("img", "outil__icone");
    icone.alt = "";
    icone.addEventListener("load", function () {
      logo.textContent = "";
      logo.classList.add("outil__logo--image");
      logo.appendChild(icone);
    });
    icone.src = outil.icone; // si le fichier manque, les initiales restent
    carte.appendChild(logo);
    const texte = creer("div");
    texte.appendChild(creer("h4", "", outil.nom));
    texte.appendChild(creer("p", "", outil.utilisation));
    carte.appendChild(texte);
    zone.appendChild(carte);
  });
  remplirListe(document.getElementById("liste-materiel"), listeMateriel);
}

function afficherBilan(donneesBilan) {
  const zone = document.getElementById("bilan-contenu");
  zone.innerHTML = "";
  [
    { titre: "Ce que j'ai appris", texte: donneesBilan.appris },
    { titre: "Une difficulté", texte: donneesBilan.difficulte, suite: "Comment je l'ai gérée : " + donneesBilan.solution },
    { titre: "Mon niveau d'autonomie", texte: donneesBilan.autonomieTexte, jauge: donneesBilan.autonomie },
    { titre: "La réalisation dont je suis la plus fière", texte: donneesBilan.fierte },
    { titre: "Ce que je souhaite approfondir", texte: donneesBilan.approfondir }
  ].forEach(function (bloc) {
    const article = creer("article", "bilan__bloc");
    article.appendChild(creer("h4", "", bloc.titre));
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

  const competencesZone = document.getElementById("competences-stage");
  competencesZone.innerHTML = "";
  Object.keys(donneesBilan.competences).forEach(function (famille) {
    const colonne = creer("div", "competences-stage__famille");
    colonne.appendChild(creer("h5", "", famille));
    const ul = creer("ul", "liste-puces");
    remplirListe(ul, donneesBilan.competences[famille]);
    colonne.appendChild(ul);
    competencesZone.appendChild(colonne);
  });
}


/* ---------- 5. Projection ---------- */

function afficherProjection(p) {
  document.getElementById("projection-metier").textContent = p.metier;
  document.getElementById("projection-pourquoi").textContent = p.pourquoi;
  document.getElementById("projection-etape").textContent = p.etape;
  remplirListe(document.getElementById("projection-acquis"), p.acquis);
  remplirListe(document.getElementById("projection-ecarts"), p.ecarts);

  const ol = document.getElementById("projection-actions");
  ol.innerHTML = "";
  p.actions.forEach(function (a) {
    const li = creer("li", "action");
    li.appendChild(creer("span", "action__quand", a.quand));
    li.appendChild(creer("p", "", a.action));
    ol.appendChild(li);
  });
}


/* ---------- 6. Contact et transparence ---------- */

function afficherContact(c, t) {
  document.getElementById("contact-statut").textContent = c.statut;
  document.getElementById("contact-email").textContent = c.email;
  const mail = document.getElementById("contact-mailto");
  mail.href = "mailto:" + c.email;

  remplirListe(document.getElementById("liste-credits"), t.credits);
  remplirListe(document.getElementById("liste-droits"), t.droits);

  const sources = document.getElementById("liste-sources");
  sources.innerHTML = "";
  t.sources.forEach(function (s) {
    const li = creer("li");
    if (s.url) {
      const a = creer("a", "", s.texte);
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener";
      li.appendChild(a);
    } else {
      li.textContent = s.texte;
    }
    sources.appendChild(li);
  });
}

function afficherPied(nomEntreprise) {
  document.getElementById("pied-texte").textContent =
    "Un grand merci à toute l'équipe de " + nomEntreprise +
    " et à mon tuteur de stage pour leur accueil et leur accompagnement.";
}
