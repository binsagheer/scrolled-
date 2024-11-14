
    const navLinks = document.querySelectorAll('.nav-link-s');
    const sections = document.querySelectorAll('.section-content');
    const dropdown = document.getElementById('section-dropdown');

    // Function to handle scroll event and highlight the active section
    function highlightSection() {
        let currentSection = '';

        // Loop through each section and find the one currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop  -100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        // Loop through each nav link and update active class based on current section
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });

        // Update dropdown label for mobile view
        if (dropdown) {
            dropdown.value = `#${currentSection}`;
        }
    }

    // Scroll to selected section on dropdown change
    dropdown.addEventListener('change', (e) => {
        const targetSection = document.querySelector(e.target.value);
        if (targetSection) {
            window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
        }
    });

    // Add scroll event listener
    window.addEventListener('scroll', highlightSection);

    // Trigger the function on page load to set the initial active section
    highlightSection();
