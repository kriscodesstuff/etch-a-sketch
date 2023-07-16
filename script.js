const container = document.querySelector('#container');

function createGrid(num){
    const numOfSquares = num * (num + 1) * (2 * num + 1) / 6;

    for(let i = 0; i <= numOfSquares; i++){

        container.append(document.createElement('div'));
    }
    
}

createGrid(16);