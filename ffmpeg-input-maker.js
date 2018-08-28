var fs = require('fs');
let computedInput = "";

let sequences = [{
        path: "/Volumes/WD001/animation-frames/game-of-life/assorted-drips-one/assorted-drips-one-",
        start: 1,
        end: 708,
        copies: 1
    },
    {
        path: "/Volumes/WD001/genetic-render/old-render/excellent-drips-one-fadeout-2/excellent-drips-one-fadeout-2-",
        start: 1,
        end: 1188,
        copies: 1
    },

    // Credit sequence
    {
        path: "/Volumes/WD001/genetic-render/rainy-two/rainy-two-",
        start: 1,
        end: 1,
        copies: 12 * 3
    },
    {
        path: "/Volumes/WD001/genetic-render/credits-study-two/1-title-",
        start: 1,
        end: 1,
        copies: 60
    },
    {
        path: "/Volumes/WD001/genetic-render/credits-study-two/2-credits-",
        start: 1,
        end: 1,
        copies: 48
    },
    {
        path: "/Volumes/WD001/genetic-render/credits-study-two/3-calq-",
        start: 1,
        end: 1,
        copies: 72
    },
    {
        path: "/Volumes/WD001/genetic-render/credits-study-two/4-montreal-",
        start: 1,
        end: 1,
        copies: 36
    },
    {
        path: "/Volumes/WD001/genetic-render/rainy-two/rainy-two-",
        start: 1,
        end: 1,
        copies: 18
    }
];

for (s of sequences) {
    for (let f = s.start; f <= s.end; f++) {
        var formattedF = "" + f;
        while (formattedF.length < 5) {
            formattedF = "0" + formattedF;
        }
        let line = `file '${s.path}${formattedF}.png'\n`;
        for (let i = 0; i < s.copies; i++) {
            computedInput += line;
        }
    }
}

fs.writeFile('./ffmpeg-commands/study-no-2-credits.txt', computedInput, function(err) {
    if (err) {
        return console.error(err);
    } else {
        console.log('study-no-2.txt written successfully.');
    }
});