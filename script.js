const noButton = document.querySelector('.response-button:last-child');
let resetTimeout;

// No button shrink and move away effect
noButton.addEventListener('mousemove', (e) => {
    const rect = noButton.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    noButton.style.transform = `translate(${(x - rect.width/2) * -0.5}px, ${(y - rect.height/2) * -0.5}px) scale(0.1)`;
});

noButton.addEventListener('mouseenter', () => {
    noButton.style.transform = 'scale(0.1)';
    noButton.style.opacity = '0.2';
    resetTimeout = setTimeout(() => {
        noButton.style.transform = 'scale(1)';
        noButton.style.opacity = '1';
    }, 5000);
});

noButton.addEventListener('mouseleave', () => {
    clearTimeout(resetTimeout);
    noButton.style.transform = 'scale(1)';
    noButton.style.opacity = '1';
});

// Mobile touch event for No button
noButton.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent default touch behavior
    
    // Move the button away from the touch point
    const touch = e.touches[0];
    const rect = noButton.getBoundingClientRect();
    const centerX = rect.left + rect.width/2;
    const centerY = rect.top + rect.height/2;
    
    // Calculate direction to move (away from touch)
    const dirX = centerX - touch.clientX;
    const dirY = centerY - touch.clientY;
    
    // Normalize and apply movement
    const distance = Math.sqrt(dirX*dirX + dirY*dirY);
    const normalizedX = dirX / distance * 100;
    const normalizedY = dirY / distance * 100;
    
    noButton.style.transform = `translate(${normalizedX}px, ${normalizedY}px) scale(0.1)`;
    noButton.style.opacity = '0.2';
    
    // Reset after a delay
    setTimeout(() => {
        noButton.style.transform = 'scale(1)';
        noButton.style.opacity = '1';
    }, 1000);
});

const yesButton = document.querySelector('.response-button:first-child');
let dareTimer;

// Dare text popup when hovering on Yes button
yesButton.addEventListener('mouseenter', () => {
    // Clear any existing timers
    clearTimeout(dareTimer);
    
    // Show the dare text after a short delay
    dareTimer = setTimeout(() => {
        dareText.style.opacity = '1';
        
        // Hide the dare text after 3 seconds
        setTimeout(() => {
            dareText.style.opacity = '0';
        }, 3000);
    }, 300);
});

yesButton.addEventListener('mouseleave', () => {
    clearTimeout(dareTimer);
    dareText.style.opacity = '0';
});

// Mobile touch events for Yes button
yesButton.addEventListener('touchstart', (e) => {
    // Don't prevent default here to allow the click event to fire
    
    // Show the dare text
    dareText.style.opacity = '1';
});

const dareText = document.querySelector('.dare-text');
const vampireImage = document.querySelector('.vampire-image');

// Vampire image popup ONLY when clicking Yes button
yesButton.addEventListener('click', (event) => {
    // Stop the event from propagating to the document
    event.stopPropagation();
    
    // Hide the dare text immediately when vampire appears
    dareText.style.opacity = '0';
    
    // Show the vampire image
    vampireImage.classList.add('active');
    
    // Hide the vampire image after 3 seconds (3000ms)
    setTimeout(() => {
        vampireImage.classList.remove('active');
    }, 3000);
});

// Prevent any other clicks from showing the vampire image
document.addEventListener('click', (event) => {
    // If the click is not on the Yes button, make sure the vampire image is not shown
    if (!event.target.closest('.response-button:first-child')) {
        vampireImage.classList.remove('active');
    }
});

// Initialize for mobile - check if it's a touch device
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Add a class to the body if it's a touch device
if (isTouchDevice) {
    document.body.classList.add('touch-device');
}
