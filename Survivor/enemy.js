function enemyType(num=1){
    const BASE_BODY_WIDTH = 7;
    const BASE_BODY_HEIGHT = 15;
    const BASE_LEG_WIDTH = 3.5;
    const BASE_LEG_HEIGHT = 15;
    const BASE_ARM_WIDTH = 2;
    const BASE_ARM_LENGTH = 6;
    const BASE_HEAD_SIZE = 5;

    const MOVE_SPEED = 1;

    const TYPE_MULTIPLIER = 1.3;


    switch(num){
        case 1:
            this.bodyWidth = BASE_BODY_WIDTH;
            this.bodyHeight = BASE_BODY_HEIGHT;
            this.legWidth = BASE_LEG_WIDTH;
            this.legHeight = BASE_LEG_HEIGHT;
            this.armWidth = BASE_ARM_WIDTH;
            this.armLength = BASE_ARM_LENGTH;
            this.headSize = BASE_HEAD_SIZE;
            this.color = "gray"
            this.moveSpeed = MOVE_SPEED;
            this.xPos = 100;
            this.yPos = 100;
            break;
        case 2:
            this.bodyWidth = BASE_BODY_WIDTH * TYPE_MULTIPLIER ;
            this.bodyHeight = BASE_BODY_HEIGHT * TYPE_MULTIPLIER;
            this.legWidth = BASE_LEG_WIDTH * TYPE_MULTIPLIER;
            this.legHeight = BASE_LEG_HEIGHT * TYPE_MULTIPLIER;
            this.armWidth = BASE_ARM_WIDTH * TYPE_MULTIPLIER;
            this.armLength = BASE_ARM_LENGTH * TYPE_MULTIPLIER;
            this.headSize = BASE_HEAD_SIZE * TYPE_MULTIPLIER;
            this.color = "red";
            this.moveSpeed = MOVE_SPEED * TYPE_MULTIPLIER;
            this.xPos = 160;
            this.yPos = 100;
            break;
    }
}
// enemy.type sets everything else
function drawEnemy(enemy){
    drawEnemyBody(enemy);
    drawEnemyLegs(enemy);
    drawEnemyArms(enemy);
    drawEnemyHead(enemy);
}

function drawEnemyBody(enemy){

    ctx.beginPath();
    ctx.rect(enemy.xPos-(enemy.bodyWidth)/2,enemy.yPos-(enemy.bodyHeight)/2,enemy.bodyWidth,enemy.bodyHeight)
    ctx.fillStyle = enemy.color;
    ctx.fill();
    ctx.closePath();
}

function drawEnemyLegs(enemy){
    
    ctx.beginPath();
    //right leg
    ctx.rect(enemy.xPos+enemy.bodyWidth/5.9,enemy.yPos+enemy.bodyHeight/2,enemy.legWidth,enemy.legHeight);
    ctx.arc(enemy.xPos+enemy.bodyWidth/2.6,enemy.yPos+enemy.bodyHeight/2,enemy.bodyWidth/3,0,Math.PI*2,false);
    //left leg
    ctx.rect(enemy.xPos-enemy.bodyWidth/1.5,enemy.yPos+enemy.bodyHeight/2,enemy.legWidth,enemy.legHeight);
    ctx.arc(enemy.xPos-enemy.bodyWidth/2.5,enemy.yPos+enemy.bodyHeight/2,enemy.bodyWidth/3,0,Math.PI*2,false);
    ctx.fillStyle = enemy.color;
    ctx.fill();
    ctx.closePath();
}

function drawEnemyArms(enemy){
    //right arm
    ctx.beginPath();
    ctx.ellipse(enemy.xPos+enemy.bodyWidth,enemy.yPos-enemy.bodyHeight/1.8,enemy.armWidth,enemy.armLength,4,0,Math.PI * 2,false);
    ctx.fillStyle = enemy.color;
    ctx.fill();
    ctx.closePath();
    //left arm
    ctx.beginPath();
    ctx.ellipse(enemy.xPos-enemy.bodyWidth,enemy.yPos-enemy.bodyHeight/1.8,enemy.armWidth,enemy.armLength,2.2,0,Math.PI * 2,false);
    ctx.fillStyle = enemy.color;
    ctx.fill();
    ctx.closePath();
}

function drawEnemyHead(enemy){
    ctx.beginPath();
    ctx.arc(enemy.xPos, enemy.yPos-enemy.bodyHeight/1.4,enemy.headSize,0, Math.PI * 2, false)
    ctx.fillStyle = enemy.color;
    ctx.fill();
    ctx.closePath();
}

/**************
 ENEMY MOVEMENT
 **************/
//basically want x and y of enemy to approach mangoX and mangoY
function moveEnemy(enemy,char){
    while(enemy.xPos<char.xPos){
        enemy.xPos += enemy.moveSpeed;
    }
    while(enemy.xPos>char.xPos){
        enemy.xPos -= enemy.moveSpeed;
    }
    while(enemy.yPos<char.yPos){
        enemy.yPos += enemy.moveSpeed;
    }
    while(enemy.yPos>char.yPos){
        enemy.yPos += enemy.moveSpeed;
    }
    
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