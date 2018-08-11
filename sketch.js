let looping = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "./frames/sketch";
let maxFrames = 20;

function setup() {
    socket = io.connect('http://localhost:8080');
    cnvs = createCanvas(windowWidth, windowWidth / 16 * 9);
    ctx = cnvs.drawingContext;
    canvasDOM = document.getElementById('defaultCanvas0');
    frameRate(30);
    background(0);
    fill(255, 50);
    noStroke();
    if (!looping) {
        noLoop();
    }
}

function draw() {
    for (let i = 0; i < 500; i++) {
        let x = random(width);
        let y = random(height);
        ellipse(x, y, 5);
    }
    if (exporting && frameCount < maxFrames) {
        frameExport();
    }
}

function keyPressed() {
    if (keyCode === 32) {
        if (looping) {
            noLoop();
            looping = false;
        } else {
            loop();
            looping = true;
        }
    }
    if (key == 'p' || key == 'P') {
        frameExport();
    }
    if (key == 'r' || key == 'R') {
        window.location.reload();
    }
    if (key == 'm' || key == 'M') {
        redraw();
    }
}