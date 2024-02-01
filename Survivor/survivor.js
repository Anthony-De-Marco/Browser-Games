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
    let sOrb = new weaponType(1,mango);
    let time = new metronome();
    let cTime;
    let enemy;
    
    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //between 0 and 100
        cTime = clock(time);
        drawMain(mango);
        drawWeapon(sOrb,mango);
        moveMain(mango,move);
        hitBorderMain(mango,move);

        if(ghoul.status == 1){
        drawEnemy(ghoul);
        moveEnemy(ghoul,mango);
        enemyTakeDamage(sOrb,ghoul);
        mainTakeDamage(ghoul,mango);
        }
        
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
