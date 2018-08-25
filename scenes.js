let Scene = function(obj) {
    this.gridScalar = obj.gridScalar;
    this.turtleName = obj.turtleName;
    this.noiseSeed = obj.noiseSeed;
    this.noiseScalar = obj.noiseScalar;
};

let firstScene = new Scene({
    gridScalar: 16,
    turtleName: "calm",
    noiseSeed: 95.74359133779816,
    noiseScalar: 0.025
});

let scene = firstScene;