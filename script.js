const gridContainer = document.querySelector('#grid-container');
const button = document.querySelector('button');

function createGrid(num){
    const numOfSquares = num * num;
    for(let i = 0; i <= numOfSquares; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item')
        gridContainer.append(gridItem);
        gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    }
    
}

createGrid(16);

function addHoverClass(e){
    e.target.classList.add('hovered');
}

const gridItem = document.querySelectorAll('.grid-item');

gridItem.forEach((item) => {
    item.addEventListener('mouseover', addHoverClass);
})

