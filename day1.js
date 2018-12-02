var fs = require('fs');
var chalk = require('chalk');

const count = (data) => data.reduce((acc, val) => val[0] == '+' ? acc += parseInt(val.slice(1)) : acc -= parseInt(val.slice(1)), 0);

const first_freq = (data) => {
    var counter = 0, history = {};
    while (1) {
        for (let number of data) {
            number[0] == '+' ?
                counter += parseInt(number.slice(1)) : 
                counter -= parseInt(number.slice(1))
            if (history[counter]) return counter;
            else {
                history[counter] = true;
            }
        }
    }
    return false;
}

fs.readFile('day1.txt', "utf8", (err, data) => {
    if (err) throw err;
    data = data.split('\n');
    console.log(`Part 1: ${chalk.green(count(data))}`);
    console.log(`Part 2: ${chalk.green(first_freq(data))}`);
})
