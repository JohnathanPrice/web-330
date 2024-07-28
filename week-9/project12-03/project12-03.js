/*
   JavaScript 7th Edition
   Chapter 12
   Project 12-3

   Project to show a recipe with expanding/contracting content
   Author: Johnathan Price
   Date: 07/28/2024

   Filename: project12-03.js
*/

$(document).ready(function() {
  $("article > h2").click(function() {
     // Declare variables using jQuery
     let heading = $(this);
     let list = heading.next();
     let headingImage = heading.children("img");

     // Toggle the content of the lists
     list.slideToggle(500);

     // Change the symbol in the headings
     let src = headingImage.attr("src");
     if (src === "plus.png") {
        headingImage.attr("src", "minus.png");
     } else {
        headingImage.attr("src", "plus.png");
     }
  });
});
