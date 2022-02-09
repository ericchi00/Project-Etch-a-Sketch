const gridContainer = document.querySelector('.gridContainer');

//creates the grid based on the num (num x num format)
function gridCreator (num) {
    const gridSize = num * num;
    for (i = 1; i <= gridSize; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        gridContainer.appendChild(grid);
        gridContainer.style.setProperty('grid-template-columns', 'repeat(' + num + ', 1fr)');
    }
}  

const slider = document.querySelector('.myRange');
const gridSizeInput = document.querySelector('.gridSizing');

/*
gridSizeInput.addEventListener('touchend', () => {
    gridSizeInput.textContent = slider.value;
});
*/
gridCreator(16);