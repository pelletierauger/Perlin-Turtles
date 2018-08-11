let looping = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "./frames/sketch";
let maxFrames = 20;
let graphics;
let turtlePath;

var gridScalar = 1;
var gridXAmount = 16 * gridScalar;
var gridYAmount = 9 * gridScalar;
var tileWidth;
var grid = [];
let turtle;

function setup() {
    socket = io.connect('http://localhost:8080');
    cnvs = createCanvas(windowWidth, windowWidth / 16 * 9);
    ctx = cnvs.drawingContext;
    canvasDOM = document.getElementById('defaultCanvas0');
    graphics = createGraphics(width * 2, height * 2);
    turtlePath = createGraphics(width * 2, height * 2);
    // turtlePath.blendMode(turtlePath.BURN);
    turtlePath.stroke(0);
    frameRate(30);
    background(255);
    fill(255, 50);
    noStroke();
    if (!looping) {
        noLoop();
    }
    tileWidth = width / gridXAmount - 1 / gridXAmount;
    turtle = new Turtle(width / 2, height / 2);
    for (var x = 0; x < gridXAmount; x++) {
        for (var y = 0; y < gridYAmount; y++) {
            var oneDValue = x + (y * gridXAmount);
            let value = noise(x * 0.5, y * 0.5);
            graphics.fill(value * 255);
            grid[oneDValue] = value;
            graphics.rect(x * tileWidth, y * tileWidth, tileWidth + 1, tileWidth + 1);
        }
    }
    // image(graphics, 0, 0, width, height);
}

function draw() {
    // turtlePath.background(255, 10);
    // clear();
    // turtle.s = sin(frameCount / 10) * 5;
    background(255);
    for (let i = 0; i < 2000; i++) {
        turtle.getLocation();
        turtle.walk();
    }
    // image(graphics, 0, 0, width, height);
    image(turtlePath, 0, 0, width, height);

    // turtle.show();
    // turtle.showLocation();
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
    if (key == 'g' || key == 'G') {
        turtle.pos = { x: random(width), y: random(height) };
    }
    // if (key == 'f' || key == 'F') {
    //     turtle.s = random(0.1, 2);
    //     turtlePath.stroke(random(255), random(255), random(255));
    // }
}