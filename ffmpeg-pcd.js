var fs = require('fs');
let computedInput = "";

let sequences = [{
        path: "/Volumes/NO\ NAME/frames/intro-fade-in/intro-fade-in-",
        start: 1,
        end: 950,
        copies: 1
    },
    {
        path: "/Volumes/NO\ NAME/frames/oily-non-cartesian/oily-non-cartesian-",
        start: 1,
        end: 633,
        copies: 1
    },
    {
        path: "/Volumes/NO\ NAME/frames/non-cartesian-cauliflower/non-cartesian-cauliflower-",
        start: 1,
        end: 817,
        copies: 1
    },
    {
        path: "/Volumes/NO\ NAME/frames/muscular-pyramid2/muscular-pyramid2-",
        start: 1,
        end: 596,
        copies: 1
    },
    {
        path: "/Volumes/NO\ NAME/frames/star/star-",
        start: 1,
        end: 619,
        copies: 1
    },
    {
        path: "./frames/star-fade-out/star-fade-out-",
        start: 620,
        end: 842,
        copies: 1
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

fs.writeFile('montage2-pcd.txt', computedInput, function(err) {
    if (err) {
        return console.error(err);
    } else {
        console.log('montage2.txt written successfully.');
    }
});