let Scene = function(obj) {
    this.gridScalar = obj.gridScalar;
    this.turtle = obj.turtle;
    this.noiseSeed = obj.noiseSeed;
    this.noiseScalar = obj.noiseScalar;
    this.noiseSpeed = obj.noiseSpeed || 0.00004;
    this.framePasses = obj.framePasses || 200;
    this.fileName = obj.name;
    this.folderPath = "./frames/";
};

let firstScene = new Scene({
    gridScalar: 16,
    turtle: firstTurtle,
    noiseSeed: 95.74359133779816,
    noiseScalar: 0.025
});

let secondScene = new Scene({
    gridScalar: 16,
    turtle: secondTurtle,
    noiseSeed: 95.74359133779816,
    noiseScalar: 0.025
});

let classic = new Scene({
    gridScalar: 16,
    turtle: secondTurtle,
    noiseSeed: 838.3063237565376,
    noiseScalar: 0.025
});

let classic2 = new Scene({
    gridScalar: 16,
    turtle: thirdTurtle,
    noiseSeed: 872.5138762106428,
    noiseScalar: 0.025
});

let lessPerliny = new Scene({
    gridScalar: 16,
    turtle: cartesianTurtle,
    noiseSeed: Math.random() * 1000,
    noiseSeed: 446.669391297533,
    // noiseSeed: 383.163568608011,
    noiseScalar: 0.025
    // 383.163568608011
    // 301.0739706782297
    // 150.81636339586325
});

let classic3 = new Scene({
    gridScalar: 16,
    turtle: thirdTurtle,
    noiseSeed: 872.5138762106428,
    noiseScalar: 0.025,
    noiseSpeed: 0.00004,
    framePasses: 200
});

let intro = new Scene({
    name: "intro",
    gridScalar: 16,
    turtle: firstTurtle,
    noiseSeed: 95.74359133779816,
    noiseSeed: Math.random() * 1000,
    noiseSeed: 563.625818845061,
    noiseScalar: 0.0025
    // 563.625818845061
});

let lessPerliny2 = new Scene({
    gridScalar: 16,
    turtle: cartesianTurtle,
    noiseSeed: Math.random() * 1000,
    // noiseSeed: 446.669391297533,
    // noiseSeed: 383.163568608011,
    // noiseSeed: 301.0739706782297,
    noiseScalar: 0.025,
    framePasses: 200
    // 383.163568608011
    // 301.0739706782297
    // 150.81636339586325
    // 483.55955195831734
    // 165.34813208738507
});

let muscularPyramid = new Scene({
    name: "muscular-pyramid",
    gridScalar: 16,
    turtle: secondTurtle,
    noiseSeed: 95.74359133779816,
    // noiseSeed: Math.random() * 1000,
    noiseScalar: 0.025,
    noiseSpeed: 0.016,
    framePasses: 400
});

let scene = muscularPyramid;