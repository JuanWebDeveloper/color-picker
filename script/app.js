const color = document.getElementById('color');
const palette = document.getElementById('palette');
const title = document.getElementById('title');

color.addEventListener('input', () => {
    const select = color.value;
    
    palette.innerHTML = select;
    palette.style.background = select;
    title.style.color = select;
});