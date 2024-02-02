function metronome(){
    this.time = 0;
    this.speed = 1;
}

/**
 * Returns the 0 100 and 50 ticks
 * 
 * @param {object} metronome 
 * @returns 
 */
function clock(metronome){
    const MAX = 100;

    metronome.time += metronome.speed;
    if(metronome.time >= MAX){
        metronome.speed = -metronome.speed;
        console.log("tick");
        return metronome.time;
    }
    if(metronome.time == 50){
        return metronome.time;
    }
    if(metronome.time <= 0){
        metronome.speed = -metronome.speed;
        console.log("tock");
        return metronome.time;
    }
}