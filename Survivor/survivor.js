window.onload = main();
const MAX_LEVEL = 2;
function main(){

    console.log("hello");
    canvasSetupMain(canvas,ctx);

    /**FOR NOW */
    let ghoul = new enemyType(1);
    let orc = new enemyType(2);

    let mango = new mainChar();
    let move = new movement();
    let sOrb = new weaponType(1,mango);
    let time = new metronome();
    let cTime;
    let enemy = [];
    let level = 1;

    //create enemy, push into array
    function draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "30px Arial";
        ctx.fillStyle = "blue";
        ctx.fillText(mango.score,10,40);
        //can be 0 or 50 or 100
        cTime = clock(time);
        console.log(cTime);
        drawMain(mango);
        drawWeapon(sOrb,mango);
        moveMain(mango,move);
        hitBorderMain(mango,move);
        creature = new enemyType(getRndInteger(1,level));
        if(mango.score != 0 && mango.score%10 == 0 && level != MAX_LEVEL){
            level++;
        }
        //enemy spawn
        if(cTime == 100 || cTime == 0){
            setEnemyPosition(creature,mango);
            enemy.push(creature);
        }
    
        enemy.forEach((enemy) => {
            if(enemy.status == 1){
                drawEnemy(enemy);
                moveEnemy(enemy,mango);
                enemyTakeDamage(sOrb,enemy,mango);
                mainTakeDamage(enemy,mango);
                if(enemy.invuln == true && (cTime == 50 || cTime == 100)){
                    enemy.invuln = false;
                }
            }
        });
        //     if(orc.status == 1){
    //     drawEnemy(orc);
    //     moveEnemy(orc,mango);
    //     enemyTakeDamage(sOrb,orc);
    //     mainTakeDamage(orc,mango);
    //     if(orc.invuln == true && (cTime == 50 || cTime == 100)){
    //         orc.invuln = false;
    //     }
    // }
       
        
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
/**
 * gets Random integer between min and max included
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getRndInteger(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
