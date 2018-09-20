var fs = require('fs');
let computedInput = "";

let sequences = [{
    path: "./frames/demo/demo-",
    start: 1,
    end: 1299
}];

for (s of sequences) {
    for (let f = s.start; f <= s.end; f++) {
        if ((f + 1) % 4 == 0) {
            var formattedF = "" + f;
            while (formattedF.length < 5) {
                formattedF = "0" + formattedF;
            }
            let line = `file '${s.path}${formattedF}.png'\n`;
            computedInput += line;
        }
    }
}

fs.writeFile('demo.txt', computedInput, function(err) {
    if (err) {
        return console.error(err);
    } else {
        console.log('demo.txt written successfully.');
    }
});