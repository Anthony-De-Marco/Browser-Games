function weaponType(type){
    const DAMAGE = 1;

    switch(type){
        case 1:
            this.name='sOrb'
            this.damage= DAMAGE;
            this.xPos;
            this.yPos;
            this.speed;
            this.movement;
            break;
    }
}

function drawWeapon(weapon,main){
    drawShape(weapon,main);
    drawPosition(weapon,main);
}

function drawShape(weapon,main){
    ctx.beginPath();
    ctx.arc(main.xPos,main.yPos,5,0, Math.PI*2, false);
    ctx.fillStyle = "rgba(50, 1, 50, 0.9)";
    ctx.fill();
    ctx.closePath();
}

function drawPosition(){

}

        // ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle)
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