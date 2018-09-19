function setup() {
    createCanvas(600, 500);
    fill(0);
    noStroke();
    background(240);
    let x, y;
    noLoop();
    for (let i = 0; i < 350; i++) {
        fill(0, map(i, 0, 350, 0, 255));
        x = 10 + i * 1.5;
        y = 200 + moreCosineFade(0, i, 350, 200);
        if (i % 25 == 0) {
            text(round(moreCosineFade(0, i, 350, 200) * 100) / 100, x, y);
        }
        ellipse(x, y, 2);

    }
}

function draw() {}

function moreCosineFade(start, current, duration, scale) {
    var range = map(current, start, start + duration, 1, 0);
    var coFade = map(pow(cos(range), 0.000001), 1, 0.9999993843737192, 0, 1);
    coFade = map(cos(coFade), 1, 0.5403023058681398, 0, scale);
    return coFade;
}