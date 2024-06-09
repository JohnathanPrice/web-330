/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Johnathan Price
  Date:6/9/24
  Filename: script.js
*/

"use strict";

document
  .getElementById("generateHero")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("heroName").value;
    const gender = document.getElementById("heroGender").value;
    const heroClass = document.getElementById("heroClass").value;

    // Create a new character
    const character = createCharacter(name, gender, heroClass);

    // Display character details
    const characterOutput = document.getElementById("characterOutput");
    characterOutput.innerHTML = `
    <h2>Character Created:</h2>
    <p>Name: ${character.getName()}</p>
    <p>Gender: ${character.getGender()}</p>
    <p>Class: ${character.getClass()}</p>
  `;
  });

// Character creation function using closure
function createCharacter(name, gender, heroClass) {
  return {
    getName: function () {
      return name;
    },
    getGender: function () {
      return gender;
    },
    getClass: function () {
      return heroClass;
    },
  };
}
