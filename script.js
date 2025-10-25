// Show/hide "Know More About Me" section
const btn = document.getElementById('show-btn');
const info = document.getElementById('more-info');

btn.addEventListener('click', () => {
    info.classList.toggle('hidden');
});

// Animate skill bars when page loads
window.addEventListener('load', () => {
    const fills = document.querySelectorAll('.fill');
    fills.forEach(fill => {
        const width = fill.style.width;
        fill.style.width = '0';
        setTimeout(() => {
            fill.style.width = width;
        }, 100);
    });
});
