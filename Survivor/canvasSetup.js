    const canvas = document.getElementById("canvasMain");
    const ctx = canvas.getContext("2d");
    ctx.translate(0.5, 0.5);
      
        // Set display size (vw/vh).
        var sizeWidth = 100 * window.innerWidth / 100,
            sizeHeight = 100 * window.innerHeight / 100 || 766;
      
        //Setting the canvas site and width to be responsive 
        canvas.width = sizeWidth;
        canvas.height = sizeHeight;
        canvas.style.width = sizeWidth;
        canvas.style.height = sizeHeight;
        