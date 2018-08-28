let firstTurtle = new Turtle();

let secondTurtle = new Turtle();

secondTurtle.walk = function() {
    this.s = 0.5;
    let headingModifier = map(this.currentValue, 0, 0.5, -PI * this.s, PI * this.s);

    var r = map(this.currentValue, 0, 1, tileWidth * 0.1, tileWidth * 1);
    r = max(10, this.currentValue * 5);
    // r = sin(this.currentValue * 100) * 15;
    r = 0.5;
    r *= this.currentValue * 5;
    if (this.currentValue < 0.5) {
        a = 0 + random();
        // let headingModifier = PI * this.s;
        a *= this.currentValue * 2;
    } else {
        a = -7 + random();
        // let headingModifier = -PI * this.s;
        a *= this.currentValue * 1;
    }

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

let thirdTurtle = new Turtle();

thirdTurtle.walk = function() {
    this.s = 0.5;
    let headingModifier = map(this.currentValue, 0, 0.5, -PI * this.s, PI * this.s);

    var r = map(this.currentValue, 0, 1, tileWidth * 0.1, tileWidth * 1);
    r = max(10, this.currentValue * 5);
    // r = sin(this.currentValue * 100) * 15;
    r = 0.5;
    r *= this.currentValue * 5;
    if (this.currentValue < 0.5) {
        a = -2 + (random() * 0.5);
        // let headingModifier = PI * this.s;
        a *= this.currentValue * 2;
    } else {
        a = -7 + random();
        // let headingModifier = -PI * this.s;
        a *= this.currentValue * 1;
    }

    a = pow(this.currentValue, a);
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

let cartesianTurtle = new Turtle();

cartesianTurtle.walk = function() {
    this.s = 0.5;
    let headingModifier = map(this.currentValue, 0, 0.5, -PI * this.s, PI * this.s);

    var r = map(this.currentValue, 0, 1, tileWidth * 0.1, tileWidth * 1);
    r = max(10, this.currentValue * 5);
    // r = sin(this.currentValue * 100) * 15;
    r = 0.5;
    r *= this.currentValue * 5;
    if (this.currentValue < 0.5) {
        // if (random() < 0.0125) {
        //     this.pos = { x: random(width), y: random(height) };
        // }
        a = 1 + (random() * 0.25);
        // let headingModifier = PI * this.s;
        // a *= (1 / this.currentValue * 10) * 0.1;
    } else {
        // if (random() < 0.125) {
        //     this.pos = { x: random(width), y: random(height) };
        // }
        a = -1 + (random() * 0.25);
        a = noise(this.currentValue * 10) * 10;
        // let headingModifier = -PI * this.s;
        // a *= this.currentValue * 1;
    }

    // a = pow(this.currentValue, a);
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
        this.pos = { x: xRespawn[respawnTimes], y: yRespawn[respawnTimes] };
        respawnTimes++;
        // this.heading = random(TWO_PI);
    }
};