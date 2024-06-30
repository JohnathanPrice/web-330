/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Johnathan Price
  Date: 6/30/2024
  Filename: script.js
*/

document.addEventListener("DOMContentLoaded", function() {
  // Your existing code here, if any
});

// New code to handle reservation

document.getElementById('reservationForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const tableNumber = parseInt(document.getElementById('tableNumber').value);
    reserveTable(tableNumber, displayMessage, 2000);
});

const tables = [
    { tableNumber: 1, capacity: 4, isReserved: false },
    { tableNumber: 2, capacity: 2, isReserved: false },
    { tableNumber: 3, capacity: 4, isReserved: false },
    { tableNumber: 4, capacity: 6, isReserved: false },
    { tableNumber: 5, capacity: 2, isReserved: false },
    // Add more tables as needed
];

function reserveTable(tableNumber, callback, time) {
    const table = tables.find(t => t.tableNumber === tableNumber);
    if (table && !table.isReserved) {
        table.isReserved = true;
        setTimeout(() => {
            callback(`Table ${tableNumber} reserved successfully!`);
        }, time);
    } else {
        callback(`Table ${tableNumber} is not available.`);
    }
}

function displayMessage(message) {
    document.getElementById('message').innerText = message;
}