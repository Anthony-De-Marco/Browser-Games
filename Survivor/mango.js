function drawMango(x,y){
    drawBody(x,y);
    drawHead(x,y);
    drawLeaf(x,y);
    drawHatBottom(x,y);
    drawHatTop(x,y);
    drawMid(x,y);
}

function drawBody(x,y){
    let bodyHeight = 25;
    let bodyWidth = 20;

    ctx.beginPath();
    ctx.moveTo(x,y-bodyHeight);
    ctx.lineTo(x+bodyWidth/2,y+bodyHeight);
    ctx.lineTo(x,y+bodyHeight);
    ctx.lineTo(x-bodyWidth/2,y+bodyHeight);
    ctx.lineTo(x,y-bodyHeight);
    ctx.lineWidth=2;
    ctx.strokeStyle="black";
    ctx.fillStyle = "purple";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function drawHead(x,y){
    let size=11;

    ctx.beginPath();
    ctx.arc(x,y - 25,size,0,Math.PI * 2,false);
    ctx.fillStyle="orange";
    ctx.strokeStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawLeaf(x,y){
    let size = 7;

    ctx.beginPath();
    ctx.arc(x-5,y - 33,size,3.8,Math.PI * 2,false);
    ctx.fillStyle="green";
    ctx.fill();
    ctx.closePath();
}

function drawHatBottom(x,y){
    let size = 10;

    ctx.beginPath();
    ctx.arc(x+4,y-30,size,3.9,6.6,false);
    ctx.fillStyle = "rgb(148, 148, 148)";
    ctx.fill();
    ctx.closePath();
}

function drawHatTop(x,y){
    

    ctx.beginPath();
    ctx.moveTo(x+2,y-39);
    ctx.lineTo(x+16,y-50);
    ctx.lineTo(x+13,y-33);
    ctx.lineWidth=1;
    ctx.strokeStyle="black";
    ctx.fillStyle = "purple";
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function drawMid(x,y){
    ctx.beginPath();
    ctx.arc(x,y,2,0,Math.PI*2,false);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
}

// /**create circle */
// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI * 2, false); //(a,b,c,d,e,f) a,b = coordinates of center c = arc radius d,e = start and end angle (rads) f=direction (false = cw true = ccw)
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// function drawSquare(){
//     ctx.beginPath();
//     ctx.rect(0, 0, 20, 20); //coordinates of top left (x,x, , ) + width&height ( , ,x,x)
//     ctx.fillStyle = "#FF0000"; //color to be used by fill
//     ctx.fill(); //actually paints the square
//     ctx.closePath();

// /**showoff stroke */
// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
// ctx.stroke();   //only does outline
// ctx.closePath();