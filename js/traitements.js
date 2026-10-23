/* ==========================================================
   TRAITEMENTS — fonctions qui calculent à partir des données.
   Aucune de ces fonctions ne touche au HTML : elles reçoivent
   des données et renvoient un résultat.
   ========================================================== */

// Retrouve un élément d'un tableau grâce à son id
function trouverParId(tableau, id) {
  return tableau.find(function (element) {
    return element.id === id;
  });
}

// Liste les valeurs différentes d'une propriété, sans doublon.
// Marche aussi quand la propriété est un tableau (ex. outils).
function valeursUniques(tableau, propriete) {
  const valeurs = [];
  tableau.forEach(function (element) {
    const valeur = element[propriete];
    const liste = Array.isArray(valeur) ? valeur : [valeur];
    liste.forEach(function (v) {
      if (v && !valeurs.includes(v)) valeurs.push(v);
    });
  });
  return valeurs;
}

// Garde les projets qui respectent TOUS les filtres choisis.
// Un filtre vide ("") veut dire « tous ».
function filtrerProjets(listeProjets, filtres) {
  return listeProjets.filter(function (projet) {
    const bonneAnnee = filtres.annee === "" || projet.annee === filtres.annee;
    const bonneCompetence = filtres.competence === "" || projet.competences.includes(filtres.competence);
    const bonType = filtres.type === "" || projet.type === filtres.type;
    const bonOutil = filtres.outil === "" || projet.outils.includes(filtres.outil);
    return bonneAnnee && bonneCompetence && bonType && bonOutil;
  });
}

// Compte combien de filtres sont actifs
function compterFiltresActifs(filtres) {
  return Object.keys(filtres).filter(function (cle) {
    return filtres[cle] !== "";
  }).length;
}

// Projets qui prouvent une compétence
function projetsDeCompetence(listeProjets, idCompetence) {
  return listeProjets.filter(function (projet) {
    return projet.competences.includes(idCompetence);
  });
}

// Trie les jalons du plus ancien au plus récent (copie du tableau)
function trierJalons(listeJalons) {
  return listeJalons.slice().sort(function (a, b) {
    return a.date.localeCompare(b.date);
  });
}

// Liste des catégories de missions, sans doublon
function listerCategories(listeMissions) {
  return valeursUniques(listeMissions, "categorie");
}

// Garde les missions d'une catégorie (ou toutes)
function filtrerMissions(listeMissions, categorie) {
  return listeMissions.filter(function (mission) {
    return categorie === "Toutes" || mission.categorie === categorie;
  });
}

// Accorde un mot au pluriel : pluriel(3, "projet") → "3 projets"
function pluriel(nombre, mot) {
  return nombre + " " + mot + (nombre > 1 ? "s" : "");
}
