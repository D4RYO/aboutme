document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section'); // Alle Sections
    const navLinks = document.querySelectorAll('nav ul li a'); // Alle Navigationslinks

    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // 100px Toleranz für festen Header
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id'); // Aktive Section ermitteln
        }
    });

    // Aktiven Link hervorheben
    navLinks.forEach((link) => {
        link.classList.remove('active'); // Alle aktiven Links entfernen
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active'); // Aktiven Link hinzufügen
        }
    });
});