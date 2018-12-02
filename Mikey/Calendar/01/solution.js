const fs = require('fs')

module.exports = { solve }

function solve (part, path) {
  // read the input and split it into an arrach of characters without newlines
  const input = fs.readFileSync(path + '/input.txt').toString().split('\n')
  return part === 1 ? p1(input) : p2(input)
}

function p1 (input) {
  return input.reduce((total, current) => total + Number(current), 0)
}

function p2 (input) {
  let previous = []
  let freq = 0
  while (true) {
    for (var i = 0; i < input.length; i++) {
      freq += Number(input[i])
      if (previous.includes(freq)) {
        return freq
      }
      previous.push(freq)
    }
  }
}
