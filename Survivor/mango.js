        function mainChar(){
            this.bodyWidth = 20;
            this.bodyHeight = 25;
            this.headSize = 11;
            this.leafSize = 11;
            this.hatSize = 11;
            this.shieldWidth = 25;
            this.shieldHeight = 40;
            this.headColor = "orange";
            this.leafColor = "green"
            this.robeColor = "purple";
            this.rimColor = "rgb(148, 148, 148)";
            this.strokeColor = "black";
            this.linewidth = 2;

            this.shieldHealth=document.getElementById("health");
            this.moveSpeed = 3;
            this.xPos = canvas.width/2;
            this.yPos = canvas.height/2;

            this.status = 1;
            this.hitBoxRight;
            this.hitBoxLeft;
            this.hitBoxUp;
            this.hitBoxDown;
            this.shield;
        }

        function drawMain(char){
            char.hitBoxRight = char.xPos + char.shieldWidth;
            char.hitBoxLeft = char.xPos - char.shieldWidth;
            char.hitBoxUp = char.yPos - char.shieldHeight * 1.2;
            char.hitBoxDown = char.yPos + char.shieldHeight/1.25;
            char.shield = {cx: char.xPos, cy: char.yPos-char.bodyHeight/3.125, rx: char.shieldWidth, ry: char.shieldHeight}
            // distance < 1 is everything within the ellipse.
            // distance > 1 is everything outside the ellipse.
            drawMainBody(char);
            drawMainHead(char);
            drawMainLeaf(char);
            drawMainHatBottom(char);
            drawMainHatTop(char);
            drawMainShield(char);
            // drawMangoMid(x,y);
            // drawMainHitBox(char);
        }
        
        function drawMainBody(char){
            ctx.beginPath();
            ctx.moveTo(char.xPos,char.yPos-char.bodyHeight);
            ctx.lineTo(char.xPos+char.bodyWidth/2,char.yPos+char.bodyHeight);
            ctx.lineTo(char.xPos,char.yPos+char.bodyHeight);
            ctx.lineTo(char.xPos-char.bodyWidth/2,char.yPos+char.bodyHeight);
            ctx.lineTo(char.xPos,char.yPos-char.bodyHeight);
            ctx.lineWidth=char.lineWidth;
            ctx.strokeStyle=char.strokeColor;
            ctx.fillStyle = char.robeColor;
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
        
        function drawMainHead(char){
            ctx.beginPath();
            ctx.arc(char.xPos,char.yPos - char.bodyHeight,char.headSize,0,Math.PI * 2,false);
            ctx.fillStyle=char.headColor;
            ctx.strokeStyle = char.strokeColor;
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        }
        
        function drawMainLeaf(char){
            ctx.beginPath();
            ctx.arc(char.xPos-char.leafSize/2,char.yPos - char.leafSize*3, char.leafSize, 3.8 ,Math.PI * 2, false);
            ctx.fillStyle=char.leafColor;
            ctx.fill();
            ctx.closePath();
        }
        
        function drawMainHatBottom(char){
            ctx.beginPath();
            ctx.arc(char.xPos+char.hatSize/3,char.yPos-char.bodyHeight*1.2,char.hatSize,3.9,6.6,false);
            ctx.fillStyle = char.rimColor;
            ctx.fill();
            ctx.closePath();
        }
        
        function drawMainHatTop(char){
            ctx.beginPath();
            ctx.moveTo(char.xPos+char.hatSize/5,char.yPos-char.hatSize*3.54);
            ctx.lineTo(char.xPos+char.hatSize * 1.45,char.yPos-char.hatSize*4.54);
            ctx.lineTo(char.xPos+char.hatSize*1.18,char.yPos-char.hatSize*3);
            ctx.lineWidth=char.lineWidth/2;
            ctx.strokeStyle=char.strokeColor;
            ctx.fillStyle = char.robeColor;
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
        }
        
        function drawMangoMid(x,y){
            ctx.beginPath();
            ctx.arc(x,y,2,0,Math.PI*2,false);
            ctx.fillStyle = "yellow";
            ctx.fill();
            ctx.closePath();
        }
        
        function drawMainShield(char){
            ctx.beginPath();
            ctx.ellipse(char.xPos,char.yPos-char.bodyHeight/3.125,char.shieldWidth,char.shieldHeight,0,0,Math.PI * 2);
            ctx.strokeStyle = "rgb(137, 211, 251)";
            ctx.stroke();
            ctx.closePath();
        }
        
        function moveMain(char,move){
            if(move.canMoveUp && move.upPressed){
                char.yPos -= char.moveSpeed;
            }
            if(move.canMoveDown && move.downPressed){
                char.yPos += char.moveSpeed;
            }
            if(move.canMoveRight && move.rightPressed){
                char.xPos += char.moveSpeed;
            }
            if(move.canMoveLeft && move.leftPressed){
                char.xPos -= char.moveSpeed;
            }
        }

        function hitBorderMain(char,move){
            if(char.xPos+char.shieldWidth >= canvas.width){
                move.canMoveRight = false;
            }
            if(char.xPos-char.shieldWidth < 0){
                move.canMoveLeft = false;
            }
            if(char.yPos-char.shieldHeight < 0){
                move.canMoveUp = false;
            }
            if(char.yPos+char.shieldHeight >= canvas.height){
                move.canMoveDown = false;
            }
        }

    function mainTakeDamage(enemy,main){
        //if right side of enemy hits shield
        if(Math.pow(enemy.hitBoxRight - main.shield.cx, 2) / Math.pow(main.shield.rx, 2) 
        + Math.pow(enemy.yPos - main.shield.cy,2) / Math.pow(main.shield.ry,2) < 1){
            main.shieldHealth.value -= enemy.damage;
            console.log("hit taken");
        }
        //if left side of enemy hits
        if(Math.pow(enemy.hitBoxLeft - main.shield.cx, 2) / Math.pow(main.shield.rx, 2) 
        + Math.pow(enemy.yPos - main.shield.cy,2) / Math.pow(main.shield.ry,2) < 1){
            main.shieldHealth.value -= enemy.damage;
            console.log("hit taken");
        }
        //if top  side of enemy hits
        if(Math.pow(enemy.xPos - main.shield.cx, 2) / Math.pow(main.shield.rx, 2) 
        + Math.pow(enemy.hitBoxUp - main.shield.cy,2) / Math.pow(main.shield.ry,2) < 1){
            main.shieldHealth.value -= enemy.damage;
            console.log("hit taken");
        }
        //if bottom side of enemy hits
        if(Math.pow(enemy.xPos - main.shield.cx, 2) / Math.pow(main.shield.rx, 2) 
        + Math.pow(enemy.hitBoxDown - main.shield.cy,2) / Math.pow(main.shield.ry,2) < 1){
                main.shieldHealth.value -= enemy.damage;
                console.log("hit taken");
            }
            //if top right
            if(Math.pow(enemy.hitBoxRight - main.shield.cx, 2) / Math.pow(main.shield.rx, 2) 
            + Math.pow(enemy.hitBoxUp - main.shield.cy,2) / Math.pow(main.shield.ry,2) < 1){
                main.shieldHealth.value -= enemy.damage;
                console.log("hit taken");
            }
            //if bottom right
            if(Math.pow(enemy.hitBoxRight - main.shield.cx, 2) / Math.pow(main.shield.rx, 2) 
            + Math.pow(enemy.hitBoxDown - main.shield.cy,2) / Math.pow(main.shield.ry,2) < 1){
                main.shieldHealth.value -= enemy.damage;
                console.log("hit taken");
            }
            //if top left
            if(Math.pow(enemy.hitBoxLeft - main.shield.cx, 2) / Math.pow(main.shield.rx, 2) 
            + Math.pow(enemy.hitBoxUp - main.shield.cy,2) / Math.pow(main.shield.ry,2) < 1){
                main.shieldHealth.value -= enemy.damage;
                console.log("hit taken");
            }
            //if bottom left
            if(Math.pow(enemy.hitBoxLeft - main.shield.cx, 2) / Math.pow(main.shield.rx, 2) 
            + Math.pow(enemy.hitBoxDown - main.shield.cy,2) / Math.pow(main.shield.ry,2) < 1){
                main.shieldHealth.value -= enemy.damage;
                console.log("hit taken");
            }
            
        }
        
        
function drawMainHitBox(main){
    ctx.beginPath();
      ctx.arc(main.hitBoxRight,main.yPos,1,0, Math.PI*2, false);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(main.hitBoxLeft,main.yPos,1,0, Math.PI*2, false);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(main.xPos,main.hitBoxUp,1,0, Math.PI*2, false);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();
      ctx.beginPath();
      ctx.arc(main.xPos,main.hitBoxDown,1,0, Math.PI*2, false);
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
    