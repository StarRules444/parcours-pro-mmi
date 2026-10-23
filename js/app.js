/* ==========================================================
   APP — lancement de la page et gestion des événements.
   Ordre de chargement (voir index.html) :
     donnees.js → traitements.js → affichage.js → app.js
   ========================================================== */


/* ---------- État de la page ---------- */
const etat = {
  filtres: { annee: "", competence: "", type: "", outil: "" },
  jalonActif: 0,
  categorieMission: "Toutes"
};

const jalonsTries = trierJalons(jalons);


/* ---------- 1. Compétences : onglets au clavier ---------- */

function choisirCompetence(id, donnerLeFocus) {
  afficherCompetence(trouverParId(competences, id));
  if (donnerLeFocus) document.getElementById("onglet-" + id).focus();
}

function preparerCompetences() {
  afficherOngletsCompetences(competences);
  choisirCompetence(competences[0].id, false);

  const zone = document.getElementById("onglets-competences");

  zone.addEventListener("click", function (e) {
    const onglet = e.target.closest(".onglet");
    if (onglet) choisirCompetence(onglet.dataset.competence, false);
  });

  // Flèches gauche / droite, Début / Fin pour passer d'un onglet à l'autre
  zone.addEventListener("keydown", function (e) {
    const ids = competences.map(function (c) { return c.id; });
    const actuel = ids.indexOf(document.activeElement.dataset.competence);
    let suivant = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") suivant = (actuel + 1) % ids.length;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") suivant = (actuel - 1 + ids.length) % ids.length;
    if (e.key === "Home") suivant = 0;
    if (e.key === "End") suivant = ids.length - 1;
    if (suivant !== null) {
      e.preventDefault();
      choisirCompetence(ids[suivant], true);
    }
  });
}


/* ---------- 2. Projets : filtres ---------- */

function mettreAJourProjets() {
  const liste = filtrerProjets(projets, etat.filtres);
  afficherProjets(liste, projets.length);
  document.getElementById("reinitialiser-filtres").disabled = compterFiltresActifs(etat.filtres) === 0;
}

function changerFiltre(cle, valeur) {
  etat.filtres[cle] = valeur;
  document.getElementById("filtre-" + cle).value = valeur;
  mettreAJourProjets();
}

function reinitialiserFiltres() {
  Object.keys(etat.filtres).forEach(function (cle) {
    changerFiltre(cle, "");
  });
}

function preparerProjets() {
  remplirSelect("filtre-annee", valeursUniques(projets, "annee").sort(), "Toutes les années");
  remplirSelect("filtre-competence", competences.map(function (c) { return c.id; }), "Toutes les compétences", nomCompetence);
  remplirSelect("filtre-type", valeursUniques(projets, "type").sort(), "Tous les types");
  remplirSelect("filtre-outil", valeursUniques(projets, "outils").sort(), "Tous les outils");

  Object.keys(etat.filtres).forEach(function (cle) {
    document.getElementById("filtre-" + cle).addEventListener("change", function (e) {
      changerFiltre(cle, e.target.value);
    });
  });

  document.getElementById("reinitialiser-filtres").addEventListener("click", reinitialiserFiltres);
  document.getElementById("reinitialiser-vide").addEventListener("click", function () {
    reinitialiserFiltres();
    document.getElementById("filtre-annee").focus();
  });

  mettreAJourProjets();
}

// Depuis une compétence : filtrer les projets puis y aller
function voirProjetsDeCompetence(id) {
  reinitialiserFiltres();
  changerFiltre("competence", id);
  document.getElementById("projets").scrollIntoView();
  document.getElementById("filtre-competence").focus({ preventScroll: true });
}


/* ---------- Fenêtres (étude de cas, visionneuse) ---------- */

let derniereOrigine = null; // élément à refocaliser à la fermeture

function ouvrirFenetre(id, origine) {
  const fenetre = document.getElementById(id);
  if (typeof fenetre.showModal !== "function") return;
  derniereOrigine = origine || null;
  fenetre.showModal();
}

function preparerFenetres() {
  document.querySelectorAll("dialog").forEach(function (fenetre) {
    fenetre.querySelector("[data-fermer]").addEventListener("click", function () {
      fenetre.close();
    });
    // Clic sur le fond = fermeture
    fenetre.addEventListener("click", function (e) {
      if (e.target === fenetre) fenetre.close();
    });
    fenetre.addEventListener("close", function () {
      const video = fenetre.querySelector("video");
      if (video) video.pause();
      if (derniereOrigine && document.body.contains(derniereOrigine)) derniereOrigine.focus();
    });
  });

  // Miniatures de la visionneuse
  document.getElementById("visionneuse-miniatures").addEventListener("click", function (e) {
    const bouton = e.target.closest(".miniature");
    if (!bouton) return;
    document.getElementById("visionneuse-image").src = bouton.dataset.source;
    this.querySelectorAll(".miniature").forEach(function (b) {
      b.setAttribute("aria-pressed", b === bouton ? "true" : "false");
    });
  });
}

// Un seul écouteur pour tous les boutons générés (délégation d'événements)
function preparerClicsGeneraux() {
  document.addEventListener("click", function (e) {
    const boutonProjet = e.target.closest("[data-ouvrir-projet]");
    if (boutonProjet) {
      afficherEtudeDeCas(trouverParId(projets, boutonProjet.dataset.ouvrirProjet));
      ouvrirFenetre("etude-de-cas", boutonProjet);
      return;
    }
    const boutonCompetence = e.target.closest("[data-filtrer-competence]");
    if (boutonCompetence) {
      voirProjetsDeCompetence(boutonCompetence.dataset.filtrerCompetence);
      return;
    }
    const boutonRealisation = e.target.closest("[data-realisation]");
    if (boutonRealisation) {
      afficherVisionneuse(trouverParId(realisations, boutonRealisation.dataset.realisation));
      ouvrirFenetre("visionneuse", boutonRealisation);
    }
  });
}


/* ---------- 3. Frise au clavier ---------- */

function choisirJalon(index, donnerLeFocus) {
  etat.jalonActif = index;
  afficherJalon(jalonsTries[index], index, jalonsTries.length);
  const bouton = document.getElementById("jalon-" + index);
  if (donnerLeFocus) bouton.focus();
  bouton.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function preparerFrise() {
  afficherFrise(jalonsTries);
  const dernier = jalonsTries.length - 1;
  afficherJalon(jalonsTries[0], 0, jalonsTries.length);

  const frise = document.getElementById("frise");
  frise.addEventListener("click", function (e) {
    const bouton = e.target.closest(".jalon");
    if (bouton) choisirJalon(Number(bouton.dataset.index), false);
  });
  frise.addEventListener("keydown", function (e) {
    let suivant = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") suivant = Math.min(etat.jalonActif + 1, dernier);
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") suivant = Math.max(etat.jalonActif - 1, 0);
    if (e.key === "Home") suivant = 0;
    if (e.key === "End") suivant = dernier;
    if (suivant !== null) {
      e.preventDefault();
      choisirJalon(suivant, true);
    }
  });
  document.getElementById("frise-precedent").addEventListener("click", function () {
    choisirJalon(Math.max(etat.jalonActif - 1, 0), false);
  });
  document.getElementById("frise-suivant").addEventListener("click", function () {
    choisirJalon(Math.min(etat.jalonActif + 1, dernier), false);
  });
}


/* ---------- 4. Stage : filtres des missions ---------- */

function preparerMissions() {
  afficherFiltresMissions(listerCategories(missions));
  afficherMissions(missions, missions.length, "Toutes");

  const zone = document.getElementById("filtres-missions");
  zone.addEventListener("click", function (e) {
    const bouton = e.target.closest(".filtre");
    if (!bouton) return;
    etat.categorieMission = bouton.dataset.categorie;
    zone.querySelectorAll(".filtre").forEach(function (b) {
      b.setAttribute("aria-pressed", b === bouton ? "true" : "false");
    });
    afficherMissions(filtrerMissions(missions, etat.categorieMission), missions.length, etat.categorieMission);
  });
}


/* ---------- 6. Contact : copier l'adresse ---------- */

function preparerCopie() {
  const bouton = document.getElementById("copier-email");
  const message = document.getElementById("copie-message");
  bouton.addEventListener("click", function () {
    const email = contact.email;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(function () {
        message.textContent = "Adresse copiée.";
      }, function () {
        message.textContent = "Copie impossible : sélectionne l'adresse à la main.";
      });
    } else {
      message.textContent = "Copie impossible : sélectionne l'adresse à la main.";
    }
  });
}


/* ---------- Défis de la séance 1 (console : F12) ---------- */

function defisConsole() {
  console.log("=== " + stage.entreprise + " · " + stage.periode + " ===");
  missions.forEach(function (mission) {
    console.log(mission.titre + " - " + mission.categorie);
  });
  console.log(missions.length + " missions réalisées");
}


/* ---------- Lancement ---------- */

afficherAccueil([
  { valeur: projets.length, label: "études de cas" },
  { valeur: competences.length, label: "compétences" },
  { valeur: jalons.length, label: "étapes de parcours" },
  { valeur: missions.length, label: "missions de stage" }
]);
preparerCompetences();
preparerProjets();
preparerFrise();
afficherStage(stage);
preparerMissions();
afficherOutils(outils, materiel);
afficherBilan(bilan);
afficherProjection(projection);
afficherContact(contact, transparence);
afficherPied(stage.entreprise);
preparerFenetres();
preparerClicsGeneraux();
preparerCopie();
defisConsole();
