const container = document.querySelector('#container');

function createGrid(num){
    const numOfSquares = num * num;
    for(let i = 0; i <= numOfSquares; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item')
        container.append(gridItem);
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    }
    
}

createGrid(16);