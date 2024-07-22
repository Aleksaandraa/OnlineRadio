document.addEventListener('DOMContentLoaded', function() {
    const themeLink = document.getElementById('theme-link');
    
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        themeLink.setAttribute('href', savedTheme);
    } else {
        // Default theme
        themeLink.setAttribute('href', 'style.css');
    }

    // Toggle theme on image click
    document.getElementById('theme-toggle4').addEventListener('click', function() {
        const currentTheme = themeLink.getAttribute('href');
        const newTheme = (currentTheme === 'style.css') ? 'style.css' : 'style.css';
        themeLink.setAttribute('href', newTheme);

        // Save the new theme in localStorage
        localStorage.setItem('theme', newTheme);
    });
});