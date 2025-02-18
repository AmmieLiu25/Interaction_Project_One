const container = document.querySelector('.aurora-container');
let activeAuroras = [];
let lastX = 0, lastY = 0;
let isMoving = false;
let movementTimeout;

document.addEventListener('mousemove', (e) => {
    clearTimeout(movementTimeout); // Reset movement stop detection
    isMoving = true;

    const speed = Math.sqrt((e.clientX - lastX) ** 2 + (e.clientY - lastY) ** 2);
    lastX = e.clientX;
    lastY = e.clientY;

    const x = e.clientX - 250; // Adjust for centering
    const y = e.clientY - 150;

    // Create a new aurora trail
    const aurora = document.createElement('div');
    aurora.classList.add('aurora');
    aurora.style.transform = `translate(${x}px, ${y}px)`;
    aurora.style.opacity = '1';

    container.appendChild(aurora);
    activeAuroras.push(aurora);

    // Adjust trail length dynamically based on speed
    const maxTrailLength = 25; // Longer trail
    if (activeAuroras.length > maxTrailLength) { 
        let oldAurora = activeAuroras.shift();
        oldAurora.remove();
    }

    // Extend fade duration dynamically when moving
    const fadeDuration = isMoving ? 4000 : 800; // Slow fade if moving, fast fade if stopping

    setTimeout(() => {
        aurora.style.opacity = '0';
        setTimeout(() => {
            aurora.remove();
            activeAuroras = activeAuroras.filter(a => a !== aurora);
        }, fadeDuration);
    }, 1000);

    // Detect when movement stops and shorten the fade
    movementTimeout = setTimeout(() => {
        isMoving = false;
    }, 300); // If no movement for 300ms, consider cursor stopped
});
