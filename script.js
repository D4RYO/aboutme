const textElement = document.getElementById("typing-text");
const words = ["Student", "Traveller", "Motorcycle Lover", "Developer."];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    const displayedText = isDeleting
        ? currentWord.substring(0, letterIndex--)
        : currentWord.substring(0, letterIndex++);

    textElement.textContent = displayedText;

    // Bei jedem Buchstaben tippen den Indikator einfügen
    showBlinkingIndicator();

    // Wechselt zwischen Tippen und Löschen
    if (!isDeleting && letterIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1000); // Pause nach dem Schreiben
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Nächstes Wort
    }

    // Geschwindigkeit des Effekts
    const typingSpeed = isDeleting ? 50 : 150;
    setTimeout(type, typingSpeed);
}

// Funktion, um den blinkenden Indikator anzuzeigen
function showBlinkingIndicator() {
    const indicator = document.createElement('span');
    indicator.textContent = '|'; // Der Blinkindikator (kann durch jedes Zeichen ersetzt werden)
    indicator.style.fontWeight = 'bold';
    indicator.style.fontSize = '1.5em';
    indicator.style.color = 'goldenrod';
    indicator.style.animation = 'blink 1s step-end infinite'; // Blinking Animation

    textElement.appendChild(indicator);

    // Entferne den Indikator nach 300ms
    setTimeout(() => {
        indicator.remove();
    }, 300);
}

// Starte den Typing-Effekt
type();
