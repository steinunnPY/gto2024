document.addEventListener('DOMContentLoaded', () => {
    // Load the navigation menu from nav.html
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;

            // Add event listener for toggle button after loading navigation
            const menuToggle = document.getElementById('menu-toggle');
            const sideNav = document.getElementById('side-nav');

            if (menuToggle && sideNav) {
                menuToggle.addEventListener('click', () => {
                    sideNav.classList.toggle('visible');
                });
            }

            // Highlight the active link after loading navigation
            const currentPath = window.location.pathname;
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.pathname === currentPath) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
        });

    // Close side navigation when clicking outside of it
    document.addEventListener('click', (event) => {
        const sideNav = document.getElementById('side-nav');
        const menuToggle = document.getElementById('menu-toggle');

        if (sideNav && sideNav.classList.contains('visible')) {
            if (!sideNav.contains(event.target) && event.target !== menuToggle) {
                sideNav.classList.remove('visible');
            }
        }
    });


    // Fullscreen image functionality
    const infographics = document.querySelectorAll('.infographic');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const fullscreenImage = document.getElementById('fullscreen-image');

    infographics.forEach(img => {
        img.addEventListener('click', () => {
            fullscreenImage.src = img.src;
            fullscreenOverlay.style.display = 'flex';
        });
    });

    fullscreenOverlay.addEventListener('click', () => {
        fullscreenOverlay.style.display = 'none';
    });

    // Load the footer from footer.html
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});
