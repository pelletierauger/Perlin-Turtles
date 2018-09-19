var fs = require('fs');
let computedInput = "";

let sequences = [{
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
    }, {
        path: "./frames/credits/2-",
        start: 1,
        end: 3,
        copies: 14
    }, {
        path: "./frames/credits/3-",
        start: 1,
        end: 3,
        copies: 25
    }, {
        path: "./frames/credits/4-",
        start: 1,
        end: 3,
        copies: 14
    }, {
        path: "./frames/credits/fondnoir-",
        start: 1,
        end: 1,
        copies: 6
    }
];


for (s of sequences) {
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

fs.writeFile('credits.txt', computedInput, function(err) {
    if (err) {
        return console.error(err);
    } else {
        console.log('credits.txt written successfully.');
    }
});