const textElement = document.getElementById("typing-text");
const words = ["Student.", "Traveller.", "Gamer.", "Developer.."];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
let isPausing = false;

function type() {
    if (isPausing) {
        return; // Verhindert Tippen, während eine Pause läuft
    }

    const currentWord = words[wordIndex];
    const displayedText = isDeleting
        ? currentWord.substring(0, letterIndex--)
        : currentWord.substring(0, letterIndex++);

    // Setze die Farbe des aktuellen Wortes
    textElement.innerHTML = `<span style="color: ${getWordColor(wordIndex)}">${displayedText}</span>`;

    // Zeige den entsprechenden Emoji-Indikator während des Tippens
    showBlinkingIndicator(wordIndex);

    // Wechselt zwischen Tippen und Löschen
    if (!isDeleting && letterIndex === currentWord.length) {
        if (wordIndex === 3) {  // Pause nach dem Wort "Developer."
            isPausing = true;
            setTimeout(() => {
                isPausing = false;
                isDeleting = true; // Beginnt das Löschen des Wortes nach 15 Sekunden
                type(); // Starte das Tippen nach der Pause
            }, 15000); // 15 Sekunden Pause für das Wort Developer.
        } else {
            setTimeout(() => (isDeleting = true), 1000); // Pause nach dem Schreiben
        }
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Nächstes Wort
    }

    // Geschwindigkeit des Effekts
    const typingSpeed = isDeleting ? 70 : 100;
    setTimeout(type, typingSpeed);
}

// Funktion, um die Farbe für jedes Wort basierend auf dem Index zu wählen
function getWordColor(index) {
    if (index === 3) {
        return 'goldenrod'; // Developer in goldenrod
    }
    return 'white'; // Andere Wörter in weiß
}

// Funktion, um den blinkenden Indikator anzuzeigen
function showBlinkingIndicator(index) {
    // Emoji Auswahl basierend auf dem Wort
    const emojis = ["🤓", "✈️", "🎮", "🔥"]; // Emojis für jedes Wort
    const indicator = document.createElement('span');
    indicator.textContent = emojis[index]; // Wähle das Emoji je nach Wort
    indicator.style.fontWeight = 'bold';
    indicator.style.fontSize = '1em';
    indicator.style.color = 'goldenrod'; // Farbe des Indikators
    indicator.style.animation = 'blink 1s step-end infinite'; // Blinking Animation

    textElement.appendChild(indicator);

   }

// Starte den Typing-Effekt
type();