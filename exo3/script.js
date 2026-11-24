"use strict";
// Mode strict activé, vu dans le slide 52

// Tableau de tableaux (type complexe: tableau), vu dans le slide 39
// Chaque sous-tableau représente un étudiant: [id, prenom, nom, note, coef]
const students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3]
];

// Fonction B: prend un paramètre de type float (number) et retourne un booléen, vu dans le slide 38 et 46
function B(note) {
  // Condition if sans bloc, vu dans le slide 43
  // Opérateur rationnel >=, vu dans le slide 42
  return note >= 10;
}

// Fonction A: appelle la fonction B, vu dans le slide 46
function A() {
  // Boucle for..of pour parcourir le tableau d'étudiants, vu dans le slide 45
  for (const s of students) {
    const id = s[0];
    const note = s[3];
    // Appel de la fonction B (fonction de rappel simple), vu dans le slide 46
    const admis = B(note);
    // Notation ternaire pour choisir le texte à afficher, vu dans le slide 43
    // Template litteral pour l'affichage formaté, vu dans le slide 38
    console.log(`${id}: ${admis ? "ADMIS" : "AJOURNÉ"}`);
  }
}