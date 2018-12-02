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
  // loop over each input line
  for (var i = 0; i < input.length; i++) {
    let twoFound = false
    let threeFound = false
    let splitLine = input[i].split('')
    // loop over each character in the line we're looking at
    for (var x = 0; x < splitLine.length; x++) {
      if (threeFound && twoFound) { break }
      //  check how many times the current character exists in the list
      let num = splitLine.reduce((total, current) => total + (splitLine[x] === current ? 1 : 0), 0)
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
  // for each line in the input file
  for (var i = 0; i < input.length; i++) {
    let splitLine = input[i].split('')
    // loop over other lines
    for (var x = 0; x < input.length; x++) {
      // if we're just comparing a line to itself then skip
      if (x === i) {
        continue
      }
      let splitLine2 = input[x].split('')
      let ans = compareLines(splitLine, splitLine2)
      if (ans !== 'owo') {
        return ans
      }
    }
  }
}

function compareLines (line1, line2) {
  let counter = 0
  // for each letter in the current line
  for (var a = 0; a < line1.length; a++) {
    // compare to each letter in the other line
    // if the letters aren't equal then increment our counter
    if (line1[a] !== line2[a]) {
      counter++
      if (counter > 1) {
        return 'owo'
      }
    }
  }
  line1.splice(a)
  return line1
}
