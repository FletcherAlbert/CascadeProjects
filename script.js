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

const dareText = document.querySelector('.dare-text');
const vampireImage = document.querySelector('.vampire-image');

// Vampire image popup when clicking Yes button
yesButton.addEventListener('click', () => {
    vampireImage.classList.add('active');
    setTimeout(() => {
        vampireImage.classList.remove('active');
    }, 5000);
});
