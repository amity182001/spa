// Configuration
const REDIRECT_URL = 'destination.html'; // Custom destination page
const REDIRECT_DELAY = 3; // seconds

// DOM elements
const countdownElement = document.getElementById('countdown');
const redirectButton = document.getElementById('redirect-now');
const destinationElement = document.getElementById('destination-url');

// Initialize
let countdown = REDIRECT_DELAY;
destinationElement.textContent = REDIRECT_URL;

// Countdown function
function updateCountdown() {
    countdownElement.textContent = countdown;
    
    if (countdown <= 0) {
        redirectToUrl();
        return;
    }
    
    countdown--;
    setTimeout(updateCountdown, 1000);
}

// Redirect function
function redirectToUrl() {
    // You can use different redirect methods:
    // window.location.href = REDIRECT_URL; // Allows back navigation
    window.location.replace(REDIRECT_URL); // Replaces current page in history
}

// Event listeners
redirectButton.addEventListener('click', redirectToUrl);

// Start countdown when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
});

// Optional: Add keyboard shortcut (Enter key) to redirect immediately
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        redirectToUrl();
    }
});

// Optional: Pause countdown on mouse hover (for better UX)
const container = document.querySelector('.redirect-message');
let isPaused = false;
let pausedCountdown = countdown;

container.addEventListener('mouseenter', function() {
    isPaused = true;
    pausedCountdown = countdown;
});

container.addEventListener('mouseleave', function() {
    if (isPaused) {
        isPaused = false;
        countdown = pausedCountdown;
        setTimeout(updateCountdown, 1000);
    }
});

// Modify updateCountdown to respect pause
function updateCountdown() {
    if (isPaused) return;
    
    countdownElement.textContent = countdown;
    
    if (countdown <= 0) {
        redirectToUrl();
        return;
    }
    
    countdown--;
    setTimeout(updateCountdown, 1000);
} 