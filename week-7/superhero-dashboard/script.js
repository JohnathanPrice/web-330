/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Johnathan Price
  Date: 7/14/2024
  Filename:
*/

"use strict";

const chefs = [
  {
    name: 'Gordon Ramsay',
    specialty: 'British cuisine',
    weakness: 'Short temper',
    location: 'London'
  },
  {
    name: 'Jamie Oliver',
    specialty: 'Italian cuisine',
    weakness: 'Lack of formal training',
    location: 'Essex'
  },
  {
    name: 'Nigella Lawson',
    specialty: 'Home cooking',
    weakness: 'Desserts',
    location: 'London'
  }
];

function retrieveChef1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Uncomment next line and comment resolve to simulate error
      // reject('Error retrieving Chef 1 data');
      resolve(chefs[0]);
    }, 2000);
  });
}

function retrieveChef2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Uncomment next line and comment resolve to simulate error
      // reject('Error retrieving Chef 2 data');
      resolve(chefs[1]);
    }, 3000);
  });
}

function retrieveChef3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Uncomment next line and comment resolve to simulate error
      // reject('Error retrieving Chef 3 data');
      resolve(chefs[2]);
    }, 4000);
  });
}

Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
  .then(results => {
    results.forEach((result, index) => {
      const chefInfoDiv = document.getElementById(`chef${index + 1}-info`);
      const chefErrorDiv = document.getElementById(`chef${index + 1}-error`);

      if (result.status === 'fulfilled') {
        const chef = result.value;
        chefInfoDiv.innerHTML = `
          <p>Name: ${chef.name}</p>
          <p>Specialty: ${chef.specialty}</p>
          <p>Weakness: ${chef.weakness}</p>
          <p>Location: ${chef.location}</p>
        `;
      } else {
        chefErrorDiv.innerHTML = `<p>${result.reason}</p>`;
      }
    });
  });
