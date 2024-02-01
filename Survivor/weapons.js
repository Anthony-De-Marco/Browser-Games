const MAX_WEAPON_DIST = 50;

const WeaponMovement = Object.freeze({
    Orbit: Symbol('orbit')
})


function weaponType(type){
    const BASE_WEAPON_DAMAGE = 1;
    const BASE_SPEED = 2;
    
    switch(type){
        case 1:
            this.name='sOrb'
            this.damage= BASE_WEAPON_DAMAGE;
            this.xPos = 0;
            this.yPos = 0;
            this.speed=BASE_SPEED;
            this.movement = WeaponMovement.Orbit;
            break;
    }
}

function drawWeapon(weapon,main){
    drawShape(weapon,main);
}

function drawShape(weapon,main){
    ctx.beginPath();
    ctx.arc(main.xPos+weapon.xPos,main.yPos+weapon.yPos,5,0, Math.PI*2, false);
    ctx.fillStyle = "rgba(50, 1, 50, 0.9)";
    ctx.fill();
    ctx.closePath();
}

function moveWeapon(weapon,main){
    switch(weapon.movement){

        case WeaponMovement.Orbit:
            if(weapon.xPos > MAX_WEAPON_DIST || weapon.xPos < -MAX_WEAPON_DIST){
                weapon.speed = -weapon.speed
            }
            weapon.xPos += weapon.speed;
            break;
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