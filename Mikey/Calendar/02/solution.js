const fs = require('fs')

module.exports = { solve }

function solve (part, path) {
  // read the input and split it into an arrach of characters without newlines
  const input = fs.readFileSync(path + '/input.txt').toString().split('\n')
  return part === 1 ? p1(input) : p2(input)
}

function p1 (input) {
  let twoTotal = 0
  let threeTotal = 0
  for (var i = 0; i < input.length; i++) { // loop over each input line
    let twoFound = false
    let threeFound = false
    let splitLine = input[i].split('')
    for (var x = 0; x < splitLine.length; x++) { // loop over each character in the line we're looking at
      if (threeFound && twoFound) { break }
      let num = splitLine.reduce((total, current) => total + (splitLine[x] === current ? 1 : 0), 0) //  check how many times the current character exists in the list
      if (num === 2 && !twoFound) {
        twoTotal++
        twoFound = true
      } else if (num === 3 && !threeFound) {
        threeTotal++
        threeFound = true
      }
    }
  }
  return twoTotal * threeTotal
}

function p2 (input) {
  for (var i = 0; i < input.length; i++) {
    let splitLine = input[i].split('')
  }
}
