"use strict";
/*
   JavaScript 7th Edition
   Chapter 11
   Hands-on Project 11-2

   Author: Johnathan Price
   Date:   7/7/24

   Filename: project11-02.js
*/


document.getElementById("postalCode").onblur = function() {
  let codeValue = document.getElementById("postalCode").value;
  let countryValue = document.getElementById("country").value;

  document.getElementById("place").value = "";
  document.getElementById("region").value = "";

  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(json => {
      document.getElementById("place").value = json.places[0]['place name'];
      document.getElementById("region").value = json.places[0]['state abbreviation'];
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
};
