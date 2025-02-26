const noButton = document.querySelector('.response-button:last-child');
let resetTimeout;

noButton.addEventListener('mousemove', (e) => {
    const rect = noButton.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    noButton.style.transform = `translate(${(x - rect.width/2) * 0.3}px, ${(y - rect.height/2) * 0.3}px) scale(0.1)`;
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
let yesResetTimer;

yesButton.addEventListener('mouseenter', () => {
    dareTimer = setTimeout(() => {
        dareText.style.opacity = '1';
        setTimeout(() => dareText.style.opacity = '0', 3000);
    }, 300);
});

yesButton.addEventListener('mouseleave', () => {
    clearTimeout(dareTimer);
    dareText.style.opacity = '0';
});

const dareText = document.querySelector('.dare-text');
let dareTimer;

const gotemText = document.querySelector('.gotem-text');
const vampireImage = document.querySelector('.vampire-image');

yesButton.addEventListener('click', () => {
    vampireImage.classList.add('active');
    setTimeout(() => {
        vampireImage.classList.remove('active');
    }, 5000);
});
