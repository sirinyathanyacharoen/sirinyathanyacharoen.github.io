// --- Dark/Light Mode Toggle ---
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme in localStorage and set the toggle state on load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.checked = true; // Set the switch to the "on" position
}

// Listen for changes on the checkbox
themeToggle.addEventListener('change', () => {
    // Toggle dark-mode class on the body
    document.body.classList.toggle('dark-mode');
    
    // Save theme preference to localStorage based on checkbox state
    if (themeToggle.checked) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
});


// --- Improved Email Copy Button ---
const contactButton = document.getElementById('contactBtn');
const originalButtonText = contactButton.textContent;

contactButton.addEventListener('click', () => {
    navigator.clipboard.writeText(originalButtonText).then(() => {
        contactButton.textContent = 'Email Copied!';
        setTimeout(() => {
            contactButton.textContent = originalButtonText;
        }, 2000); // Revert back to original text after 2 seconds
    }).catch(err => {
        console.error('Failed to copy email: ', err);
    });
});

// --- Scroll Animation Logic ---
const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null, // it is the viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% of the section should be visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it's visible
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});