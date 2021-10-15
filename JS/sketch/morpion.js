let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

canvas.height = 600;
canvas.width = 600;

let grid = [["", "", ""],
["", "", ""],
["", "", ""]];

let players = ["X", "O"];
let currentPlayer = 0;

let currentPlayerDisplay = document.createElement("p");
document.body.appendChild(currentPlayerDisplay);

currentPlayerDisplay.textContent = `Au tour du joueur ${currentPlayer+1}`
context.fillStyle = 'black';
context.fillRect(0,0,canvas.width, canvas.height);

canvas.addEventListener("click", playPosition);

drawGrid();


function drawGrid() {
    let margin = 0
    context.strokeStyle = 'white';
    context.lineWidth = 3;
    drawLine(canvas.width/3, margin, canvas.width/3, canvas.height - margin);
    drawLine(canvas.width/3*2, margin, canvas.width/3*2, canvas.height -margin);
    drawLine(margin, canvas.height/3, canvas.width-margin, canvas.height/3);
    drawLine(margin, canvas.height/3*2, canvas.width-margin, canvas.height/3*2);
    context.closePath
}

function drawLine(x1,y1, x2,y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

function playPosition(event) {
    let xPartSize = canvas.width/3;
    let yPartSize = canvas.height/3;


    let x = parseInt(event.offsetX/xPartSize);
    let y = parseInt(event.offsetY/yPartSize)

    if (isPositionEmpty(x,y)){
        playerPlayed(x,y);  
        
        
        drawPlay();
        let anyVictory = checkVictory();
        if (anyVictory === "") {
            if (currentPlayer === 0) {
                currentPlayer = 1;
            } else {
                currentPlayer = 0;
            }  
            currentPlayerDisplay.textContent = `Au tour du joueur ${currentPlayer+1}`;
        } else {
            canvas.removeEventListener("click", playPosition);
            if (anyVictory === "draw") {
                currentPlayerDisplay.textContent = `MATCH NUL`;
            } else {
                currentPlayerDisplay.textContent = `VICTOIRE DU JOUEUR ${currentPlayer+1}`;
            }   
        }
        
    }
}

function playerPlayed(posX, posY) {
    grid[posY][posX] = players[currentPlayer];
     
}

function isPositionEmpty(posX, posY) {
    return (grid[posY][posX] === "");
}

function drawPlay() {
    for(let y = 0 ; y < grid.length; y++) {
        for (let x = 0 ; x < grid[0].length ; x++) {
            if (grid[y][x] === "X") {
                drawCross(x, y);
            } else if (grid[y][x] === "O"){
                drawCircle(x,y);
            }
        }
    }
}

function drawCross (posX, posY) {
    const cellSize = canvas.width / 3;
    const cellMargin = 20;
    drawLine(cellMargin + posX*cellSize, cellMargin + posY*cellSize, cellSize - cellMargin + posX*cellSize, cellSize - cellMargin + posY*cellSize);
    drawLine(cellSize - cellMargin + posX*cellSize, cellMargin + posY*cellSize, cellMargin + posX*cellSize, cellSize - cellMargin + posY*cellSize);
}

function drawCircle (posX, posY) {
    const cellSize = canvas.width / 3;
    const cellMiddle = canvas.width / 6;
    const radius = (cellSize-50) / 2 
    context.beginPath();
    context.arc(cellMiddle + posX * cellSize, cellMiddle + posY * cellSize, radius, 0, 2 * Math.PI );
    context.stroke();
}


function checkVictory() {
    let result;
    result = checkLines();
    if (result === "") {
        result = checkDiagonals();
    }
    if (result === "" ) {
        result = checkDraw();
        console.log(`check draw : ${result}`)
    }
    return result;
}

function checkLines() {
    let result = "";
    for (let y = 0 ; y < grid.length && result === "" ; y++) {
        let value = grid[y][0];
        if (value != "" && grid[y][1] === value && grid[y][2] === value) {
            result = value;
            
            console.log("victoire ligne: " + result);
        }
        
    }

    if (result === "") {
        for (let x = 0 ; x < grid.length && result === "" ; x++) {
            let value = grid[0][x];
            if (value != "" && grid[1][x] === value && grid[2][x] === value) {
                result = value;
                
                console.log("victoire colonne : " + result);
            }
            
        }
    } 
    
    return result;
}


function checkDiagonals() {
    let result = "";
    if (grid[0][0] != "" && grid[0][0] === grid[1][1] && grid[0][0]===grid[2][2]) {
        result = grid[1][1];
    } else if (grid[2][0] != "" && grid[2][0] === grid[1][1] && grid[2][0]===grid[0][2]) {
        result = grid[1][1];
    }
    return result;
}

function checkDraw() {
    let result = "draw";
    for(let y = 0 ; y < grid.length; y++) {
        for (let x = 0 ; x < grid[0].length ; x++) {
            if (grid[y][x] === "") {
                result = "";
            }
        }
    }
    return result;
}