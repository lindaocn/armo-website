
const mode = document.getElementById("mode");

// Initialer Modus (hell oder dunkel)
let isDarkMode = false;

// Wenn der Button geklickt wird
mode.addEventListener('click', () => {
    // => bedeutet, dass eine anoynyme Funktion erstellt wird (auf Click wird eine Aktion ausgelöst)
  isDarkMode = !isDarkMode;
// Umdrehen des Wahrheitwertes

  // Wechseln zwischen den Modus-Klassen
  if (isDarkMode) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    mode.textContent = "🌞";
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    mode.textContent = "🌚";
  }
});

