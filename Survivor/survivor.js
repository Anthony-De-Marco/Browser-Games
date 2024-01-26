window.onload = main();

function main(){

    console.log("hello");
    canvasSetupMain(canvas,ctx);

    /**FOR NOW */
    let ghoul = new enemyType(1);
    console.log(ghoul);

    let orc = new enemyType(2);
    let mango = new mainChar();
    let move = new movement();

    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawMain(mango);
        moveMain(mango,move);
        hitBorderMain(mango,move);

        drawEnemy(100,100,ghoul);
        drawEnemy(160,100,orc);
        
        requestAnimationFrame(draw);
    }

    //keyboard event listeners
    document.addEventListener("keydown",keyDownHandler,false);
    document.addEventListener("keyup",keyUpHandler,false);

    //control event listeners 
    document.addEventListener("keydown",keyDownHandler,false);
    document.addEventListener("keyup",keyUpHandler,false);

    //control event functions
    function keyDownHandler(e) {
        if (e.key === "Right" || e.key === "ArrowRight") {
            move.rightPressed = true;
            move.canMoveLeft = true;
        } else if (e.key === "Left" || e.key === "ArrowLeft") {
            move.leftPressed = true;
            move.canMoveRight = true;
        }

        if(e.key === "Up" || e.key === "ArrowUp"){
            move.upPressed = true;
            move.canMoveDown = true;
        }else if(e.key === "Down" || e.key === "ArrowDown" ){
            move.downPressed = true;
            move.canMoveUp = true;
        }
    }

    function keyUpHandler(e) {
        if(e.key == "Right" || e.key == "ArrowRight") {
            move.rightPressed = false;
            move.canMoveLeft = true;
        }
        else if(e.key == "Left" || e.key == "ArrowLeft") {
            move.leftPressed = false;
            move.canMoveRight = true;
        }
        if(e.key === "Up" || e.key === "ArrowUp"){
            move.upPressed = false;
            move.canMoveDown = true;
        }else if(e.key === "Down" || e.key === "ArrowDown" ){
            move.downPressed = false;
            move.canMoveUp = true;
        }
    }
    draw();
}
