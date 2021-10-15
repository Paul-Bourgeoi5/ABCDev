let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
let bubbles = [];
let counter = 0;
const movesBeforeNewBubble = 1; 
canvas.height = 500;
canvas.width = 500;


setInterval(draw, 90);

class Bubble {
    constructor(x, y, r, canvasContext) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.canvasContext = canvasContext;
    }

    drawSelf() {
            this.canvasContext.beginPath();
            this.canvasContext.arc(this.x, this.y, this.r, 0, 2*Math.PI);
            this.canvasContext.strokeStyle = "white";
            this.canvasContext.lineWidth = 5;
            this.canvasContext.stroke();
        
    }

    move() {
        this.x = this.x + (Math.floor((Math.random() *5))-2);
        this.y = this.y + (Math.floor((Math.random() *5))-2);
    }

    isClicked(x,y) {
        let clickDistance = calculateDistance(this.x, x, this.y, y);
        if (clickDistance < this.r) {
            return true;
        }
        return false;
    }
}

for  (let i = 0; i < 5 ; i++) {
    let bubble = createRandomBubble();
    bubbles.push(bubble);
}
document.querySelector("strong").textContent = bubbles.length;

canvas.addEventListener("click", function(event) {
    for (let i = 0 ; i < bubbles.length ; i++) {
        if (bubbles[i].isClicked(event.offsetX, event.offsetY)) {
            bubbles.splice(i,1);
            bubbles.slice
            document.querySelector("strong").textContent = bubbles.length;
        }
    }
});

function draw() {
    counter++;
    if (counter >= movesBeforeNewBubble) {
        addNewBubbleIn(bubbles);
        counter = 0;
        
        document.querySelector("strong").textContent = bubbles.length;
    }
    context.fillStyle = 'black';
    context.fillRect(0,0,canvas.width, canvas.height)
    for(let bubble of bubbles) {
        if (bubble != null){
            bubble.move();
            bubble.drawSelf();
        }
    }
}

function calculateDistance(x1, x2, y1, y2) {
    return Math.round(Math.sqrt((Math.pow(Math.abs(x1-x2), 2))+(Math.pow(Math.abs(y1-y2), 2))));
}

function addNewBubbleIn(bubbleList) {
    bubbleList.push(createRandomBubble());
}

function createRandomBubble() {
    let positionX = Math.floor(Math.random() * canvas.width);
    let positionY = Math.floor(Math.random() * canvas.height);
    let radius = Math.floor((Math.random() * 40) +10);
    let bubbleResult = new Bubble(positionX, positionY, radius, context);
    return bubbleResult;
}