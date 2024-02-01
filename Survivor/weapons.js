const MAX_WEAPON_DIST = 50;

const WeaponMovement = Object.freeze({
    Orbit: Symbol('orbit')
})


function weaponType(type,main){
    const BASE_WEAPON_DAMAGE = 1;
    const BASE_SPEED = 2;
    const WEAPON_SIZE = 5;
    
    switch(type){
        case 1:
            this.name='sOrb'
            this.damage= BASE_WEAPON_DAMAGE;
            this.xPos = main.xPos;
            this.yPos = main.yPos;
            this.xDiff=0;
            this.yDiff=0;
            this.speed=BASE_SPEED;
            this.size = 5;
            this.movement = WeaponMovement.Orbit;
            this.hurtBoxRight;
            this.hurtBoxLeft;
            this.hurtBoxUp;
            this.hurtBoxDown;
            break;
    }
}

function drawWeapon(weapon,main){
    weapon.xPos = main.xPos + weapon.xDiff;
    weapon.yPos = main.yPos + weapon.yDiff;
    weapon.hurtBoxRight = weapon.xPos + weapon.size;
    weapon.hurtBoxLeft = weapon.xPos - weapon.size;
    weapon.hurtBoxUp = weapon.yPos - weapon.size;
    weapon.hurtBoxDown = weapon.yPos + weapon.size;
    drawShape(weapon,main);
    moveWeapon(weapon,main);
    // drawHurtBox(weapon);
}

function drawShape(weapon,main){
    ctx.beginPath();
    ctx.arc(weapon.xPos,weapon.yPos,5,0, Math.PI*2, false);
    ctx.fillStyle = "rgba(50, 1, 50, 0.9)";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
}

function moveWeapon(weapon,main){
    switch(weapon.movement){

        case WeaponMovement.Orbit:
            if(weapon.xDiff > MAX_WEAPON_DIST || weapon.xDiff < -MAX_WEAPON_DIST){
                weapon.speed = -weapon.speed
            }
            weapon.xDiff += weapon.speed;
            break;
    }
}

function drawHurtBox(weapon){
    ctx.beginPath();
    ctx.arc(weapon.hurtBoxRight,weapon.yPos,1,0, Math.PI*2, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(weapon.hurtBoxLeft,weapon.yPos,1,0, Math.PI*2, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(weapon.xPos,weapon.hurtBoxUp,1,0, Math.PI*2, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(weapon.xPos,weapon.hurtBoxDown,1,0, Math.PI*2, false);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
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