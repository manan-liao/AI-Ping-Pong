function setup(){
    canvas = createCanvas(700,600);
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(700,600);
    video.hide();
}

function draw(){
    background("white");
    image(video,0,0,700,600);
}