/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Johnathan Price
  Date: 7/21/24
  Filename: script.js
*/

"use strict";

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology..."
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality..."
  },
  {
    title: "Twister",
    director: "Jan De Bont",
    year: 1996,
    synopsis: "Two storm chasers on the brink of divorce must work together to create an advanced weather alert system by putting themselves in the cross-hairs of extremely violent tornadoes."
  }
  // Add more movies as needed
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(movie => movie.title.toLowerCase() === title.toLowerCase());
      if (movie) {
        resolve(movie);
      } else {
        reject(`Movie titled "${title}" not found.`);
      }
    }, 1000); // Simulating network delay
  });
}

async function displayMovie(event) {
  event.preventDefault();
  const titleInput = document.getElementById("title-input").value;
  const movieTitle = document.getElementById("movie-title");
  const movieDirector = document.getElementById("movie-director");
  const movieYear = document.getElementById("movie-year");
  const movieSynopsis = document.getElementById("movie-synopsis");
  const errorMessage = document.getElementById("error-message");

  movieTitle.textContent = "";
  movieDirector.textContent = "";
  movieYear.textContent = "";
  movieSynopsis.textContent = "";
  errorMessage.textContent = "";

  try {
    const movie = await fetchMovie(titleInput);
    movieTitle.textContent = movie.title;
    movieDirector.textContent = `Directed by: ${movie.director}`;
    movieYear.textContent = `Release Year: ${movie.year}`;
    movieSynopsis.textContent = movie.synopsis;
  } catch (error) {
    errorMessage.textContent = error;
  }
}

document.getElementById("movie-form").addEventListener("submit", displayMovie);
