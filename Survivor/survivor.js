
main();
function main(){
    //variables
    let mangoX = sizeWidth/2;
    let mangoY = sizeHeight/2;

    function draw(){
        drawMango(mangoX,mangoY);
        
        requestAnimationFrame(draw);
    }

    draw();
}