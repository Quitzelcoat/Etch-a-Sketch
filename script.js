const container = document.getElementById('container');
const btnDiv = document.getElementById('gridCreate');

// To create the grid.
function areaGrid(size) {

    container.innerHTML = "";

    const cellSize = 100 / size;

    for(let i = 0; i < size * size; i++) {
        const columns = document.createElement("div");
        columns.classList.add("columns");
        columns.style.minWidth = cellSize + '%';
        columns.style.minHeight = cellSize + '%';
        container.appendChild(columns);

        // to hover when mouse moves.    
        columns.addEventListener("mouseover", () => {
            columns.classList.add('hover');
            columns.style.backgroundColor = 'red';
        });
    }

}

// Button for creating grid
btnDiv.addEventListener('click', (event) => {
    let gridSize = prompt("Choose grid size from 0 to 100");
    gridSize = parseInt(gridSize);
    
    if(!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        areaGrid(gridSize);
    } else {
        alert("Please enter a valid number!");
    }

    event.preventDefault();
});