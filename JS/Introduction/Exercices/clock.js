window.addEventListener('load', drawClock);

function drawClock(){
    let canvas = document.createElement("canvas");
    canvas.height = 400;
    canvas.width = 400;
    canvas.style.backgroundColor = "rgb(0, 0, 0)";
    document.body.appendChild(canvas);

    let ctx =  canvas.getContext("2d");
    let radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90;
    drawClock();

    function drawClock() {
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "white";
        ctx.fill();
    }
}