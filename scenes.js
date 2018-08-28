let Scene = function(obj) {
    this.gridScalar = obj.gridScalar;
    this.turtle = obj.turtle;
    this.noiseSeed = obj.noiseSeed;
    this.noiseScalar = obj.noiseScalar;
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

let scene = lessPerliny;