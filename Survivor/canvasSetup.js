const canvas = document.getElementById("canvasMain");
const ctx = canvas.getContext("2d");
const PERCENT_HEIGHT = 100;
const PERCENT_WIDTH= 100;

function canvasSetupMain(canvas,ctx){
    ctx.translate(0.5, 0.5);
    
    // Set display size (vw/vh).
    var sizeWidth = PERCENT_WIDTH * window.innerWidth / 100,
    sizeHeight = PERCENT_HEIGHT * window.innerHeight / 105;
    
    //Setting the canvas site and width to be responsive 
    canvas.width = sizeWidth;
    canvas.height = sizeHeight;
    canvas.style.width = sizeWidth;
    canvas.style.height = sizeHeight;
}
