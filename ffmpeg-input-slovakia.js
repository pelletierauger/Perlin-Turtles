var fs = require('fs');
let computedInput = "";
let fileName = "montage-slovakia.txt";

let sequences = [{
        path: "/Volumes/Volumina/frames/ravines/intro-fade-in/intro-fade-in-",
        start: 1,
        end: 950,
        copies: 1
    },
    {
        path: "/Volumes/Volumina/frames/ravines/oily-non-cartesian/oily-non-cartesian-",
        start: 1,
        end: 633,
        copies: 1
    },
    {
        path: "/Volumes/Volumina/frames/ravines/non-cartesian-cauliflower/non-cartesian-cauliflower-",
        start: 1,
        end: 817,
        copies: 1
    },
    {
        path: "/Volumes/Volumina/frames/ravines/muscular-pyramid2/muscular-pyramid2-",
        start: 1,
        end: 596,
        copies: 1
    },
    {
        path: "/Volumes/Volumina/frames/ravines/star/star-",
        start: 1,
        end: 619,
        copies: 1
    },
    {
        path: "/Volumes/Volumina/frames/ravines/star-fade-out/star-fade-out-",
        start: 620,
        end: 842,
        copies: 1
    }
];

let credits = [{
        path: "./frames/credits/fondnoir-",
        start: 1,
        end: 1,
        copies: 2
    },
    {
        path: "./frames/credits/1-",
        start: 1,
        end: 3,
        copies: 14
    },
    {
        path: "./frames/credits/2-",
        start: 1,
        end: 3,
        copies: 14
    },
    {
        path: "./frames/credits/3-",
        start: 1,
        end: 3,
        copies: 25
    },
    {
        path: "./frames/credits/4-",
        start: 1,
        end: 3,
        copies: 14
    },
    {
        path: "./frames/credits/fondnoir-",
        start: 1,
        end: 1,
        copies: 6
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

// Building the credits requires a slightly different algorithm.

for (s of credits) {
    for (let i = 0; i < s.copies; i++) {
        for (let f = s.start; f <= s.end; f++) {
            var formattedF = "" + f;
            while (formattedF.length < 5) {
                formattedF = "0" + formattedF;
            }
            let line = `file '${s.path}${formattedF}.png'\n`;
            computedInput += line;
            computedInput += line;
        }
    }
}

fs.writeFile(fileName, computedInput, function(err) {
    if (err) {
        return console.error(err);
    } else {
        console.log(fileName + ' written successfully.');
    }
});