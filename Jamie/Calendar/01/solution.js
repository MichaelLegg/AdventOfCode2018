const fs = require('fs')

module.exports = { solve }

function solve (part, path) {
  // read the input and split it into an arrach of characters without newlines
  const input = fs.readFileSync(path + '/input.txt').toString().split('\r\n')
  return part === 1 ? part1(input) : part2(input)
}

function part1 (input) {
    var currentValue = 0

    var i;
    for (i = 0; i < input.length; i++) { 
        currentValue = currentValue + Number(input[i]);
    }
    return currentValue;
}

function part2 (input) {
    var storedValues= [];
    var currentValue = 0

    var i;

    while (true) {
        for (i = 0; i < input.length; i++) { 
            currentValue = currentValue + Number(input[i]);
            for (b=0; b < storedValues.length; b++) {
                if (currentValue == (storedValues[b])){
                    return currentValue;
                }
            }
            storedValues.push(currentValue);
        }
    }
}