"use strict";
// Mode strict activé, vu dans le slide 52

function f1() {
  // Déclaration d'un tableau (type complexe), vu dans le slide 39
  const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
  // Boucle for..of pour parcourir le tableau, vu dans le slide 45
  for (const e of etudiants) {
    console.log(e);
  }
}

function f2() {
  // Déclaration d'un objet (type complexe), vu dans le slide 40
  const etudiant = { nom: "John", prenom: "DOE", age: 30 };
  console.log(etudiant);
}

function f3() {
  // Tableau d'objets, vu dans le slide 41
  const etudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
  ];
  // Boucle for..of pour parcourir le tableau d'objets, vu dans le slide 45
  // Affichage formaté avec template litteral (backstick), vu dans le slide 38
  for (const e of etudiants) {
    console.log(`${e.nom}-${e.prenom}-${e.age}`);
  }
}