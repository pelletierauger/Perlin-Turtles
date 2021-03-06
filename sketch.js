let looping = true;
let socket, cnvs, ctx, canvasDOM;
// let fileName = `./frames/${scene.name}/${scene.name}`;
let maxFrames = Infinity;
let graphics;
let turtlePath;
let seed;

let gridScalar, gridXAmount, gridYAmount;
let tileWidth;
let grid = [];
let turtle;
let frameToPrint = 620;
let framePasses = 0;
let respawnTimes = 0;
let xRespawn = [];
let yRespawn = [];

function setup() {
    socket = io.connect('http://localhost:8080');
    cnvs = createCanvas(windowWidth, windowWidth / 16 * 9);
    ctx = cnvs.drawingContext;
    canvasDOM = document.getElementById('defaultCanvas0');
    graphics = createGraphics(width * 2, height * 2);
    turtlePath = createGraphics(width * 2, height * 2);
    // canvasDOM = turtlePath.canvas;
    // turtlePath.blendMode(turtlePath.BURN);
    turtlePath.background(255);
    turtlePath.stroke(0);
    frameRate(30);
    background(255);
    fill(255, 50);
    noStroke();
    if (!looping) {
        noLoop();
    }

    for (let i = 0; i < 1257606; i++) {
        xRespawn.push(random(width));
        yRespawn.push(random(height));
    }

    gridScalar = scene.gridScalar;
    gridXAmount = 16 * gridScalar;
    gridYAmount = 9 * gridScalar;
    tileWidth = width / gridXAmount - 1 / gridXAmount;

    seed = scene.noiseSeed;
    noiseSeed(seed);

    turtle = scene.turtle;
    turtle.setPos(width / 2, height / 2);

    // seed = 34.41719031221789;
    // seed = 61.813779498236926;
    // seed = 57.677245280529235;
    // seed = 62.18022654507042;
    // seed = 34.32327235922706;
    // seed = 81.57620468149568;
    // seed = 55.25271887883502;
    // seed = 40.35035789800042;
    // seed = 95.74359133779816;

    for (var x = 0; x < gridXAmount; x++) {
        for (var y = 0; y < gridYAmount; y++) {
            var oneDValue = x + (y * gridXAmount);
            // let value = noise(x * scene.noiseScalar, y * scene.noiseScalar);
            let value = noise(x * scene.noiseScalar, y * scene.noiseScalar, frameToPrint * scene.noiseSpeed);
            // let value = (noise(x * 0.025, y * 0.025) * 0.75) + (random() * 0.25);
            graphics.fill(value * 255);
            grid[oneDValue] = value;
            graphics.rect(x * tileWidth, y * tileWidth, tileWidth + 1, tileWidth + 1);
        }
    }
    // image(graphics, 0, 0, width, height);
}

let iterations = 2000;

function draw() {

    if (frameToPrint >= 642) {
        scene.framePasses = moreCosineFade(642, frameToPrint, 200, 200);
        iterations = moreCosineFade(642, frameToPrint, 200, 2000);
    }
    // else if (frameToPrint == 200) {
    //     scene.framePasses = 200;
    //     iterations = 2000;
    // }
    if (frameCount % 5 == 0) {
        turtle.pos = { x: random(width), y: random(height) };
        // turtle.pos = { x: xRespawn[respawnTimes], y: yRespawn[respawnTimes] };
        // respawnTimes++;
    }
    // turtlePath.background(255, 10);
    // clear();
    // turtle.s = sin(frameCount / 10) * 5;

    for (let i = 0; i < iterations; i++) {
        turtle.getLocation();
        turtle.walk();
    }
    // image(graphics, 0, 0, width, height);
    if (framePasses > scene.framePasses) {
        console.log("respawnTimes :" + respawnTimes);
        respawnTimes = 0;
        grid = [];
        for (var x = 0; x < gridXAmount; x++) {
            for (var y = 0; y < gridYAmount; y++) {
                var oneDValue = x + (y * gridXAmount);
                // let value = noise(x * scene.noiseScalar, y * scene.noiseScalar, frameCount / 1000);
                let value = noise(x * scene.noiseScalar, y * scene.noiseScalar, (frameToPrint + 1) * scene.noiseSpeed);
                // let value = noise(x * scene.noiseScalar, y * scene.noiseScalar);
                // let value = (noise(x * 0.025, y * 0.025) * 0.75) + (random() * 0.25);
                graphics.fill(value * 255);

                grid[oneDValue] = value;
                graphics.rect(x * tileWidth, y * tileWidth, tileWidth + 1, tileWidth + 1);
            }
        }
        background(255);
        image(turtlePath, 0, 0, width, height);
        framePasses = 0;
        turtlePath.background(255);
        // turtle.setPos(width / 2, height / 2);
        turtle.pos = { x: random(width), y: random(height) };
        if (exporting && frameCount < maxFrames) {
            frameExport();
        }
        frameToPrint++;
    }
    framePasses++;


    // turtle.show();
    // turtle.showLocation();

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
    if (key == 'g' || key == 'G') {
        turtle.pos = { x: random(width), y: random(height) };
    }
    // if (key == 'f' || key == 'F') {
    //     turtle.s = random(0.1, 2);
    //     turtlePath.stroke(random(255), random(255), random(255));
    // }
}

function cosineFade(sum, dur, scale) {
    var range = map(sum, 0, dur, 0, 1);
    var coFade = map(pow(cos(range), 0.000001), 1, 0.9999993843737192, 0, scale);
    return coFade;
}

function moreCosineFade(start, current, duration, scale) {
    var range = map(current, start, start + duration, 1, 0);
    var coFade = map(pow(cos(range), 0.000001), 1, 0.9999993843737192, 0, 1);
    coFade = map(cos(coFade), 1, 0.5403023058681398, 0, scale);
    return coFade;
}