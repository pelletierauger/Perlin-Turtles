var fs = require('fs');
let computedInput = "";
let frameCount = 1;

let sequences = [
    // {
    //         path: "./frames/intro-fade-in/intro-fade-in-",
    //         start: 1,
    //         end: 950,
    //         copies: 1
    //     },
    //     {
    //         path: "./frames/oily-non-cartesian/oily-non-cartesian-",
    //         start: 1,
    //         end: 633,
    //         copies: 1
    //     },
    {
        path: "./frames/non-cartesian-cauliflower/non-cartesian-cauliflower-",
        start: 1,
        end: 817,
        copies: 1
    }
    // {
    //     path: "./frames/muscular-pyramid2/muscular-pyramid2-",
    //     start: 1,
    //     end: 596,
    //     copies: 1
    // },
    // {
    //     path: "./frames/star/star-",
    //     start: 1,
    //     end: 619,
    //     copies: 1
    // },
    // {
    //     path: "./frames/star-fade-out/star-fade-out-",
    //     start: 620,
    //     end: 842,
    //     copies: 1
    // }
];

// 01 01 02 03 03 04 05 05 06 07 07 08 08 09 09 10 11 11 12 13 13 14 15 15
// 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24


// 01 02 03 03 04 04 05 05 06 07 08 08 09 09 10 10 11 12 13 13 14 14 15 15
// 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24

// 01   02   03   04   05   06   07   08   09   10   11   12   13   14  15
// 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24



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
        // if (frameCount % 15 == 1 ||
        //     frameCount % 15 == 3 ||
        //     frameCount % 15 == 5 ||
        //     frameCount % 15 == 7 ||
        //     frameCount % 15 == 8 ||
        //     frameCount % 15 == 9 ||
        //     frameCount % 15 == 11 ||
        //     frameCount % 15 == 13 ||
        //     frameCount % 15 == 0
        // ) {
        //     for (let i = 0; i < s.copies; i++) {
        //         computedInput += line;
        //     }
        // }
        frameCount++;
    }
}

fs.writeFile('montage2-not-transcoded.txt', computedInput, function(err) {
    if (err) {
        return console.error(err);
    } else {
        console.log('montage2-transcoded.txt written successfully.');
    }
});