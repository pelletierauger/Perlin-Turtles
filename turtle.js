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
    // if (this.currentValue < 0.5) {
    //     a = 2 + random();
    //     // let headingModifier = PI * this.s;
    // } else {
    //     a = -2 + random();
    //     // let headingModifier = -PI * this.s;
    // }
    if (this.currentValue > 0 && this.currentValue < 0.25) {
        a = 2 + random();
    } else if (this.currentValue > 0.25 && this.currentValue < 0.5) {
        a = -2 + random();
    } else if (this.currentValue > 0.5 && this.currentValue < 0.75) {
        a = 5 + random();
    } else if (this.currentValue > 0.75 && this.currentValue < 1) {
        a = -5 + random();
    }


    a *= this.currentValue * 1;
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