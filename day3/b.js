let fs = require('fs');
let path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), (err, data) => {
    let rucksacks = data.toString().split('\n');
    let comp1;
    let comp2;
    let priority_total = 0;
    for(let i = 0 ; i < rucksacks.length ; i = i + 3) {
        let rucksack1 = rucksacks[i];
        let rucksack2 = rucksacks[i + 1];
        let rucksack3 = rucksacks[i + 2];
        let ascii;
        for(let j = 0; j < rucksack1.length; j++) { //loop through characters and check if in first string
            if(rucksack2.includes(rucksack1[j]) && rucksack3.includes(rucksack1[j])) {
                ascii = rucksack1[j].charCodeAt(0);
                if(ascii > 96) { //lowercase a starts at 97
                    ascii -= 96;
                } else { //uppercase
                    ascii -= 38;
                }
                console.log(ascii);
                priority_total += ascii;
                break; //break out of loop to not add same character twice
            }
        }
    }
    console.log(priority_total);
    // console.log(data.toString());
});
