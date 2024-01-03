const gridContainer = document.querySelector('#grid-container');
const pencilBtn = document.querySelector('#pencil-btn');
const chooseBtn = document.querySelector('#choose-btn');
const clearBtn = document.querySelector('#clear-btn');
const eraserBtn = document.querySelector('#eraser-btn');



function drawOrErase(e){

    const currButton = e ? e.currentTarget.id : 'pencil-btn';
    const gridItem = document.querySelectorAll('.grid-item');

    if(currButton == 'pencil-btn'){
    pencilBtn.classList.add('active-btn');
    eraserBtn.classList.remove('active-btn');

    gridItem.forEach((item) => {
        item.addEventListener('click', () => item.classList.add('clicked'));
    })
    }else if(currButton == 'eraser-btn'){
        pencilBtn.classList.remove('active-btn');
        eraserBtn.classList.add('active-btn');
        gridItem.forEach((item) => {
            item.addEventListener(('click'), () => item.classList.remove('clicked'));
        })
    }
    
    
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

    drawOrErase();
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
        item.classList.remove('clicked');
    })
}





clearBtn.addEventListener('click', clearGrid);

chooseBtn.addEventListener('click', getGridNum);

eraserBtn.addEventListener('click', drawOrErase);

pencilBtn.addEventListener('click', drawOrErase);

