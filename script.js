/* --- PARTICLES.JS INITIALIZATION --- */
// This function calls the particles library to create the star background
particlesJS("particles-js", {
    particles: {
        // Defines the number of particles and how dense they are
        number: { value: 30, density: { enable: true, value_area: 800 } },
        // Sets the star color to white
        color: { value: "#ffffff" },
        // Makes the stars circular
        shape: { type: "circle" },
        // Sets stars to be 50% transparent
        opacity: { value: 0.5 },
        // Sets the max size of the stars
        size: { value: 3 },
        // Creates the lines connecting the stars
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        // Makes the stars move at speed 2
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        // Makes stars push away when you hover your mouse over them
       "detect_on": "window",
       "events": {
        "onhover" : { 
            "enable" : true,
            "mode" : "grab"
        },
        "onclick" : { 
            "enable" : true,
            "mode" : "push"
        },
        "resize": true
       }
    }
});

/* --- REVEAL ON SCROLL FUNCTION --- */
// This constant function handles the fade-in animations
const reveal = () => {
    // Finds all elements with the 'reveal' class
    const reveals = document.querySelectorAll(".reveal");
    
    // Loops through every revealed element found
    reveals.forEach(el => {
        // Detects the height of the user's browser window
        const windowHeight = window.innerHeight;
        // Detects how far the element is from the top of the viewport
        const elementTop = el.getBoundingClientRect().top;
        // Detects the bottom of the element
        const elementBottom = el.getBoundingClientRect().bottom;

        // FIXED LOGIC: Triggers if the top enters OR if we've reached the absolute bottom of the page
        if (elementTop < windowHeight - 50 || elementBottom <= windowHeight) {
            // Adds the 'active' class which triggers the CSS opacity: 1
            el.classList.add("active");
        }
    });
};

// Listens for the user scrolling and runs the reveal function
window.addEventListener("scroll", reveal);

/* --- ACTIVE LINK ON SCROLL (The Spy Logic) --- */
// Grabs all HTML <section> tags
const sections = document.querySelectorAll("section"); 
// Grabs all navbar links with the 'nav-item' class
const navItems = document.querySelectorAll(".nav-item"); 

// Settings for the observer: trigger when 60% of the section is visible
const options = { threshold: 0.6 };

// IntersectionObserver watches which section is currently on the screen
const observer = new IntersectionObserver((entries) => {
    // Loops through the sections being watched
    entries.forEach((entry) => {
        // If the section is visible (intersecting)
        if (entry.isIntersecting) {
            // Remove 'active' from all links to reset them
            navItems.forEach((link) => link.classList.remove("active"));
            
            // Matches the section ID to the href in the navbar to highlight it
            const activeLink = document.querySelector(`.nav-item[href="#${entry.target.id}"]`);
            // If a matching link is found, add the 'active' class (the blue underline)
            if (activeLink) activeLink.classList.add("active");
        }
    });
}, options);

// Loops through all sections and tells the observer to start watching them
sections.forEach((section) => observer.observe(section));

/* --- MOBILE NAV AUTO-CLOSE --- */
// Finds the hidden checkbox that controls the mobile menu
const menuToggle = document.getElementById('click');

// Loops through every nav link
navItems.forEach(item => {
    // When a link is clicked...
    item.addEventListener('click', () => {
        // Set the checkbox to false (this closes the mobile sidebar)
        menuToggle.checked = false; 
    });
});