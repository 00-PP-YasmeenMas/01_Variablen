"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hi");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; // Deklaration ( Definition)
// firstName = "Max";  // Wertzuweisung
// console.log(firstName);  // Ausgabe

// let familyName;
// familyName = "Mütze";
// console.log(familyName);


/***** 03 Deklaration + Wertzuweisung II *******/

// let firstName, familyName;

// firstName = prompt("Bitte Vorname eingeben:");
// familyName = prompt("Bitte Nachname eingeben:");

// console.log(firstName + " " + familyName);

/* JS ist eine untypisierte Sprache! | untyped */
let test;
test = "Maxine";
test = 2; 
test = false;

console.log("Datentyp: " + typeof test);
console.log("Inhalt: " + test);