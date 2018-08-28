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
    name: "intro-different-speed",
    gridScalar: 16,
    turtle: firstTurtle,
    noiseSeed: 95.74359133779816,
    noiseSeed: Math.random() * 1000,

    // The classic seed :
    noiseSeed: 563.625818845061,

    // noiseSeed: 731.8821533848186,
    noiseScalar: 0.0025,
    noiseSpeed: 0.008,
    framePasses: 200
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

let classicAnimated = new Scene({
    gridScalar: 16,
    turtle: secondTurtle,
    noiseSeed: 838.3063237565376,
    noiseSeed: Math.random() * 1000,
    noiseScalar: 0.005
    // 466.8908455195018
    // 499.16182227633124
    // 372.8749198404484
    // 993.6234906155994
});

let oily = new Scene({
    gridScalar: 16,
    turtle: cartesianTurtle,
    noiseSeed: 838.3063237565376,
    noiseSeed: Math.random() * 1000,
    noiseScalar: 0.005
    // 22.44579857348161
    // 431.191359098023
    // 183.7066265870173
    // 636.5211929757423
    // 974.1991913443986
    // 975.4769439735837
});

let star = new Scene({
    name: "star",
    gridScalar: 16,
    turtle: starTurtle,
    noiseSeed: Math.random() * 1000,
    noiseScalar: 0.025,
    noiseSpeed: 0.008,
    framePasses: 200
    // 563.625818845061
    // 67.43430974060716
});

let star2 = new Scene({
    name: "star2",
    gridScalar: 16,
    turtle: starTurtle2,
    noiseSeed: Math.random() * 1000,
    // noiseSeed: 453.42929689632894,
    // noiseSeed: 77.75688183883678,
    noiseSeed: 508.1951110759904,
    noiseScalar: 0.025,
    noiseSpeed: 0.008,
    framePasses: 200
    // 108.60215798080586
    // 453.42929689632894
    // 77.75688183883678
});

let shiningMountains = new Scene({
    gridScalar: 16,
    turtle: cartesianTurtle,
    noiseSeed: Math.random() * 1000,
    noiseSeed: 446.669391297533,
    // noiseSeed: 383.163568608011,
    noiseScalar: 0.025,
    noiseSpeed: 0.008,
    framePasses: 800
    // 383.163568608011
    // 301.0739706782297
    // 150.81636339586325
});

let scene = intro;