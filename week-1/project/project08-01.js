"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Johnathan Price
      Date:   6/2/2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// Constructor function for the timer object
function Timer(min, sec) {
    this.minutes = min;
    this.seconds = sec;
    this.timeID = null;
}

// Adding the runPause method to the Timer prototype
Timer.prototype.runPause = function(timer, minBox, secBox) {
    if (timer.timeID) {
        // Pause the timer
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    } else {
        // Start the timer
        timer.timeID = window.setInterval(countdown, 1000, timer, minBox, secBox);
    }
};

// Countdown function
function countdown(timer, minBox, secBox) {
    if (timer.seconds > 0) {
        timer.seconds--;
    } else if (timer.minutes > 0) {
        timer.minutes--;
        timer.seconds = 59;
    } else {
        // Timer has reached 0:0
        window.clearInterval(timer.timeID);
        timer.timeID = null;
    }
    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
}

/*--------------- Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

// Declare an instance of the Timer object
let myTimer = new Timer(minBox.value, secBox.value);

// onchange event handler for minBox
minBox.onchange = function() {
    myTimer.minutes = minBox.value;
};

// onchange event handler for secBox
secBox.onchange = function() {
    myTimer.seconds = secBox.value;
};

// onclick event handler for the runPauseTimer button
runPauseTimer.onclick = function() {
    myTimer.runPause(myTimer, minBox, secBox);
};