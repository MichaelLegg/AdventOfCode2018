// Index file that runs the calendar day specifiedfor(let arg of args)
const chalk = require('chalk')
const fs = require('fs')

// get the argument from the run command (first in array is node exe, second is index.js filename)
let arg = process.argv.slice(2)

const path = './Calendar/' + arg

if (!fs.existsSync(path)) {
  console.log(chalk.bold.red('Folder for that day does not exist'))
  process.exit()
}

console.log(chalk.blue('Welcome to the 2018 Advent of Code!'))
console.log(chalk.green('Running day'), chalk.yellow(arg) + '.')

const solution = require(path + '/solution.js')

console.log(chalk.white.bold.underline('\n______Part 1______'))
console.log(chalk.magenta('Solution is: \n' + chalk.cyan(solution.solve(1, path))))

console.log(chalk.white.bold.underline('\n______Part 2______'))
console.log(chalk.magenta('Solution is: \n' + chalk.cyan(solution.solve(2, path))))
