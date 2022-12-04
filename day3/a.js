let fs = require('fs');
let path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), (err, data) => {
    let rucksacks = data.toString().split('\n');
    let comp1;
    let comp2;
    let priority_total = 0;
    for(let i = 0 ; i < rucksacks.length ; i++) {
        let rucksack = rucksacks[i];
        comp1 = rucksack.substring(0, (rucksack.length / 2));
        comp2 = rucksack.substring((rucksack.length / 2), rucksack.length);
        let ascii;
        for(let j = 0; j < comp2.length; j++) { //loop through characters and check if in first string
            if(comp1.includes(comp2[j])) {
                ascii = comp2[j].charCodeAt(0);
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
        console.log(comp1 + "\n" + comp2)
    }
    console.log(priority_total);
    // console.log(data.toString());
});
