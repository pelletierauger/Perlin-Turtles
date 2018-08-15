let looping = true;
let socket, cnvs, ctx, canvasDOM;
let fileName = "./frames/sketch";
let maxFrames = 20;
let graphics;
let turtlePath;
let seed;

var gridScalar = 16;
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
    turtlePath.background(255);
    turtlePath.stroke(0);
    frameRate(30);
    background(255);
    fill(255, 50);
    noStroke();
    if (!looping) {
        noLoop();
    }
    seed = random(0, 99);
    noiseSeed(seed);
    tileWidth = width / gridXAmount - 1 / gridXAmount;
    turtle = new Turtle(width / 2, height / 2);
    for (var x = 0; x < gridXAmount; x++) {
        for (var y = 0; y < gridYAmount; y++) {
            var oneDValue = x + (y * gridXAmount);
            let value = noise(x * 0.025, y * 0.025);
            graphics.fill(value * 255);
            grid[oneDValue] = value;
            graphics.rect(x * tileWidth, y * tileWidth, tileWidth + 1, tileWidth + 1);
        }
    }
    // image(graphics, 0, 0, width, height);
}

function draw() {
    // if (frameCount % 5 == 0) {
    //     turtle.pos = { x: random(width), y: random(height) };
    // }
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

let Turtle = function(x, y) {
    this.pos = { x: x, y: y };
    this.heading = 0;
    this.location = { x: 0, y: 0 };
    this.currentValue = 0;
    this.s = 2;
};

Turtle.prototype.show = function() {
    fill(0, 255, 0);
    // ellipse(this.pos.x, this.pos.y, 10);
    let turtleSize = 15;
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    beginShape();
    vertex(0, -turtleSize);
    vertex(turtleSize / 3, 0);
    vertex(-turtleSize / 3, 0);
    endShape(CLOSE);
    fill(0);
    ellipse(0, 0, 5);
    fill(0, 200, 0);
    pop();
};

Turtle.prototype.walk = function() {
    this.s = 0.5;
    let headingModifier = map(this.currentValue, 0, 0.5, -PI * this.s, PI * this.s);

    var r = map(this.currentValue, 0, 1, tileWidth * 0.1, tileWidth * 1);
    r = max(10, this.currentValue * 5);
    // r = sin(this.currentValue * 100) * 15;
    r = 0.5;
    if (this.currentValue < 0.5) {
        a = 0 + random();
        // let headingModifier = PI * this.s;
    } else {
        a = -7 + random();
        // let headingModifier = -PI * this.s;
    }
    a *= this.currentValue * 5;
    // a = PI /  10;
    // var a = this.heading + headingModifier;
    var x = cos(a) * r;
    var y = sin(a) * r;
    // console.log(x, y);
    let padding = 10 + random(4);
    if (this.pos.x + x > padding &&
        this.pos.x + x < width - padding &&
        this.pos.y + y > padding &&
        this.pos.y + y < height - padding) {
        turtlePath.beginShape();
        turtlePath.vertex(this.pos.x, this.pos.y);
        this.pos.x += x;
        this.pos.y += y;
        turtlePath.vertex(this.pos.x, this.pos.y);
        turtlePath.endShape();
        this.heading += headingModifier;
    } else {
        // this.pos = { x: width / 2, y: height / 2 };
        this.pos = { x: random(width), y: random(height) };
        // this.heading = random(TWO_PI);
    }
};

Turtle.prototype.getLocation = function() {
    // ellipse(this.pos.x, this.pos.y, 5);
    let gridPosX = map(this.pos.x, 0, width, 0, gridXAmount);
    let gridPosY = map(this.pos.y, 0, height, 0, gridYAmount);
    this.location = { x: Math.floor(gridPosX), y: Math.floor(gridPosY) };
    let xAmount = gridXAmount;
    var oneDValue = Math.floor(gridPosX) + (Math.floor(gridPosY) * xAmount);
    this.currentValue = grid[oneDValue];
    // return grid[oneDValue] ? grid[oneDValue] : "There was a mistake";
};

Turtle.prototype.showLocation = function() {
    let x = this.location.x;
    let y = this.location.y;
    fill(0, 0, 255, 50);
    noStroke();
    rect(x * tileWidth, y * tileWidth, tileWidth + 1, tileWidth + 1);
};

// The noise seed is : 17.504938710989215