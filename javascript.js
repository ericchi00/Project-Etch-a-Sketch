const gridContainer = document.querySelector('.gridContainer');

//creates the grid based on the num (num x num format)
function gridCreator(num) {
    let gridSize = num * num;
    for (i = 1; i <= gridSize; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        gridContainer.appendChild(grid);
        gridContainer.style.setProperty('grid-template-columns', 'repeat(' + num + ', 1fr)');   
    }
}  

function resetGrid() {
    const oldGrid = document.querySelectorAll('.grid');
    oldGrid.forEach(grid => oldGrid.remove());
}

const slider = document.getElementById('gridSlider');
let updateGridSize = document.getElementById('gridSizing');

let update = () => updateGridSize.innerHTML = slider.value;
slider.addEventListener('input', () => {
    resetGrid();
    update();
    gridCreator(slider.value);
});

update();
gridCreator(slider.value);
