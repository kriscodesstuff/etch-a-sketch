const gridContainer = document.querySelector('#grid-container');
const chooseBtn = document.querySelector('#choose-btn');
const clearBtn = document.querySelector('#clear-btn');

function addClickClass(e){
    e.target.classList.add('clicked');
}

function createGrid(num){
    const numOfSquares = num * num;
    for(let i = 0; i < numOfSquares; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item')
        gridContainer.append(gridItem);
        gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    }

    const gridItem = document.querySelectorAll('.grid-item');

    gridItem.forEach((item) => {
    item.addEventListener('click', addClickClass);
})
    
}

createGrid(16);

function resetGrid(){
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


function getGridNum(){
    resetGrid();
    const num = prompt("Choose your grid number(e.g.,'2' = 2 x 2 grid)");
    if(num > 1 && num <= 100){
        createGrid(num);
    }else{
        alert('Invalid Answer');
        createGrid(16);
    }
}

function clearGrid(){
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach((item) => {
        item.classList.remove('hovered');
    })
}


clearBtn.addEventListener('click', clearGrid);

chooseBtn.addEventListener('click', getGridNum);



