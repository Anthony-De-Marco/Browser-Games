
main();
function main(){
    //variables
    let posX = sizeWidth/2;
    let posY = sizeHeight/2;

    function draw(){
        drawMango(posX,posY);
        
        requestAnimationFrame(draw);
    }

    draw();
}