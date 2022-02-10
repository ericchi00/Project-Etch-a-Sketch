const gridContainer = document.querySelector('.gridContainer');

//creates the grid based on the number input (num x num format)
function gridCreator(num) {
    let gridSize = num * num;
    for (i = 1; i <= gridSize; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        gridContainer.appendChild(grid);
        gridContainer.style.setProperty('grid-template-columns', 'repeat(' + num + ', 1fr)');   
    }
}  

//deletes the current grid
function resetGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    resetGrid();    
    gridCreator(15);
    slider.value = 15;
    update();
    hoverEffect();
});

const resetColorBtn = document.querySelector('#resetColor');
resetColorBtn.addEventListener('click', () => {
    let gridClass = document.querySelectorAll('.grid');
    gridClass.forEach(div => {
        div.setAttribute("style", "background-color: white;")
    })
})


const slider = document.getElementById('gridSlider');
const updateGridSize = document.getElementById('gridSizing');

//resets grid and then updates it to the new one on slier
let update = () => updateGridSize.textContent = slider.value + ' x ' + `${slider.value}`;
slider.addEventListener('input', () => {
    resetGrid();
    update();
    gridCreator(slider.value);
    hoverEffect();
});

update(); //sets the text to the inital grid value (10x10)
gridCreator(slider.value); //creates the inital grid (10x10)
hoverEffect(); //allows the colors to appear on the inital grid

//adds hover effect
function hoverEffect() {
    let gridClass = document.querySelectorAll('.grid');
    gridClass.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.setAttribute("style", "background-color: #c4dfff;")
        });
    });
}