let fs = require('fs');
let path = require('path');
const { pid } = require('process');

fs.readFile(path.join(__dirname, 'input.txt'), (err, data) => {
    let rows = data.toString().split('\n');
    let ctr = 0;
    for(let i = 0; i < rows.length - 1; i++) {
        let pairs = rows[i].split(',');
        let pair1 = { start: parseInt(pairs[0].split('-')[0]), end: parseInt(pairs[0].split('-')[1]) };
        let pair2 = { start: parseInt(pairs[1].split('-')[0]), end: parseInt(pairs[1].split('-')[1]) };
        if(pair1.start >= pair2.start && pair1.end <= pair2.end) { //if pair1 is in pair2
            ctr++;
            console.log(pair1);
            console.log(pair2);
        }
        else if(pair2.start >= pair1.start && pair2.end <= pair1.end) { //if pair2 is in pair1
            ctr++;
            console.log(pair1);
            console.log(pair2);
        }
    }
    console.log(ctr);
    // console.log(data.toString(  ));
});
