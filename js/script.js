// Capture entry from the user //

const input = document.getElementById('search');
const entries = document.getElementsByClassName('entry');

input.addEventListener("keyup", function() {   // Adds keyup eventlistener to the input
    const val = input.value; // Gets user input
    for (let i = 0; i < entries.length; i++) { // Loops through 'entries'
      const caption = entries[i].getAttribute("data-title"); // Captures 'data-title' value
      if (caption.toLowerCase().indexOf(val.toLowerCase()) != -1) { // Matches caption to entry
        entries[i].style.display = "block"; // Displays 'entries' based on search value
      } else entries[i].style.display = "none"; // Displays none if no entry fits the search
    }
  },
  false
);
