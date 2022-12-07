let fs = require('fs');
let path = require('path');

class stack {
    constructor(key, array) {
        this.key = key;
        this.array = array;
    }

    push(value) {
        this.array.push(value);
    }

    pop() {
        this.array.pop();
    }
}

const stacks = []; //Object with key and array of variables
fs.readFile(path.join(__dirname, 'input.txt'), (err, data) => {
    const crane = data.toString().split('\n\n')[0];
    const lines = crane.split('\n');
    const firstLine = lines[lines.length-1];
    //Go through first line and add keys
    for(let i = 1; i < firstLine.length; i += 4) {
        stacks.push( new stack(firstLine[i], new Array()));
    }
    for(let i = lines.length-2; i > 0; i--) {
        let line = lines[i];
        console.log(line);
        let stack;
        for(let j = 1; j < line.length; j+= 4) {
            if(line[j] !== ' ') {
                let key = Math.ceil(j/4);
                console.log(key);
                let value = line[j];
                stack = stacks[key-1];
                stack.push(value);
                console.log(value);
                console.log(stack);
            }
            
        }
        
    }

    let moves = data.toString().split('\n\n')[1];
});
